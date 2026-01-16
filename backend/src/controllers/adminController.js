import prisma from '../prisma.js';

// ===============================
// PROYEK CRUD
// ===============================

export const getAllProyek = async (req, res) => {
    try {
        const proyek = await prisma.proyek.findMany({
            orderBy: { tanggal: 'desc' },
        });
        res.json({ sukses: true, data: proyek });
    } catch (error) {
        console.error('Error mengambil proyek:', error);
        res.status(500).json({ sukses: false, pesan: 'Gagal mengambil data proyek' });
    }
};

export const createProyek = async (req, res) => {
    try {
        const data = req.body;
        const proyek = await prisma.proyek.create({ data });
        res.json({ sukses: true, data: proyek, pesan: 'Proyek berhasil ditambahkan' });
    } catch (error) {
        console.error('Error create proyek:', error);
        res.status(500).json({ sukses: false, pesan: 'Gagal menambahkan proyek' });
    }
};

export const updateProyek = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const proyek = await prisma.proyek.update({
            where: { id: parseInt(id) },
            data,
        });
        res.json({ sukses: true, data: proyek, pesan: 'Proyek berhasil diperbarui' });
    } catch (error) {
        console.error('Error update proyek:', error);
        res.status(500).json({ sukses: false, pesan: 'Gagal memperbarui proyek' });
    }
};

export const deleteProyek = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.proyek.delete({ where: { id: parseInt(id) } });
        res.json({ sukses: true, pesan: 'Proyek berhasil dihapus' });
    } catch (error) {
        console.error('Error delete proyek:', error);
        res.status(500).json({ sukses: false, pesan: 'Gagal menghapus proyek' });
    }
};

export default {
    getAllProyek,
    createProyek,
    updateProyek,
    deleteProyek,
};
