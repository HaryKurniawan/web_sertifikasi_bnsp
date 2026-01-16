import { useState, useEffect } from 'react';
import { getAdminProyek } from '../api/api';
import { getHandlers } from './portfolioHandlers';

// Custom hook untuk mengelola state dan logic halaman Admin Portfolio
export const usePortfolio = () => {
    // Template form kosong
    const initialForm = {
        nama: '',
        deskripsi: '',
        gambar: '',
        kategori: '',
        teknologi: '',
        link: '',
    };

    // State utama: daftar proyek, status loading, mode edit, form, dan pesan
    const [state, setState] = useState({
        proyekList: [],
        loading: true,
        editing: null,
        form: initialForm,
        message: null,
    });

    // Helper untuk update state secara parsial
    const updateState = (updates) => {
        setState(prev => ({ ...prev, ...updates }));
    };

    // Ambil data proyek dari API
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

    // Fetch data saat komponen pertama kali dimuat
    useEffect(() => {
        fetchData();
    }, []);

    // Ambil handlers dari file terpisah
    const handlers = getHandlers(state, updateState, fetchData, initialForm);

    return {
        ...state,
        handlers
    };
};
