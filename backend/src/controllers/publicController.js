import prisma from '../prisma.js';

// ===============================
// PUBLIC ROUTES
// ===============================

// Get Proyek Portfolio (active only)
export const getProyek = async (req, res) => {
    try {
        const proyek = await prisma.proyek.findMany({
            where: { aktif: true },
            orderBy: { tanggal: 'desc' },
        });
        res.json({ sukses: true, data: proyek });
    } catch (error) {
        console.error('Error mengambil proyek:', error);
        res.status(500).json({ sukses: false, pesan: 'Gagal mengambil data proyek' });
    }
};

export default {
    getProyek,
};
