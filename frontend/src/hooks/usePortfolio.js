import { useState, useEffect } from 'react';
import { getAdminProyek } from '../api/api';
import { getHandlers } from './portfolioHandlers';

export const usePortfolio = () => {
    // Initial State
    const initialForm = {
        nama: '',
        deskripsi: '',
        gambar: '',
        kategori: '',
        teknologi: '',
        link: '',
    };

    const [state, setState] = useState({
        proyekList: [],
        loading: true,
        editing: null,
        form: initialForm,
        message: null,
    });

    // Helper untuk update state parsial
    const updateState = (updates) => {
        setState(prev => ({ ...prev, ...updates }));
    };

    const fetchData = async () => {
        try {
            const res = await getAdminProyek();
            if (res.sukses) {
                updateState({ proyekList: res.data || [] });
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            updateState({ loading: false });
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Get handlers from separate file
    const handlers = getHandlers(state, updateState, fetchData, initialForm);

    return {
        ...state,
        handlers
    };
};
