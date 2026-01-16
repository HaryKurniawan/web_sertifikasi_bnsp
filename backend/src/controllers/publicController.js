import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getProyek = async (req, res) => {
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

export default {
    getProyek
};
