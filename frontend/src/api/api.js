import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});


// Public
export const getProyek = async () => {
    const res = await api.get('/proyek');
    return res.data;
};

// Admin
export const getAdminProyek = async () => {
    const res = await api.get('/admin/proyek');
    return res.data;
};

export const createProyek = async (data) => {
    const res = await api.post('/admin/proyek', data);
    return res.data;
};

export const updateProyek = async (id, data) => {
    const res = await api.put(`/admin/proyek/${id}`, data);
    return res.data;
};

export const deleteProyek = async (id) => {
    const res = await api.delete(`/admin/proyek/${id}`);
    return res.data;
};

export default api;
