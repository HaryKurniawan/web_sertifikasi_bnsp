import { createProyek, updateProyek, deleteProyek } from '../api/api';

// Factory function: menghasilkan semua handler untuk CRUD proyek
export const getHandlers = (state, updateState, fetchData, initialForm) => {
    return {
        // Menangani perubahan input form
        handleChange: (e) => {
            const { name, value } = e.target;
            updateState({
                form: { ...state.form, [name]: value }
            });
        },

        // Mengirim data form (create / update)
        handleSubmit: async (e) => {
            e.preventDefault();
            updateState({ message: null });

            try {
                const res = state.editing
                    ? await updateProyek(state.editing, state.form)
                    : await createProyek(state.form);

                if (res.sukses) {
                    updateState({
                        message: {
                            type: 'success',
                            text: state.editing ? 'Proyek berhasil diperbarui!' : 'Proyek berhasil ditambahkan!'
                        },
                        form: initialForm,
                        editing: null
                    });
                    fetchData();
                } else {
                    updateState({ message: { type: 'error', text: res.pesan || 'Gagal menyimpan' } });
                }
            } catch (error) {
                updateState({ message: { type: 'error', text: 'Terjadi kesalahan' } });
            }
        },

        // Mengisi form dengan data proyek yang akan diedit
        handleEdit: (item) => {
            updateState({
                editing: item.id,
                form: {
                    nama: item.nama,
                    deskripsi: item.deskripsi,
                    gambar: item.gambar,
                    kategori: item.kategori,
                    teknologi: item.teknologi,
                    link: item.link || '',
                }
            });
        },

        // Menghapus proyek berdasarkan ID
        handleDelete: async (id) => {
            if (!confirm('Yakin ingin menghapus proyek ini?')) return;

            try {
                const res = await deleteProyek(id);
                if (res.sukses) {
                    updateState({ message: { type: 'success', text: 'Proyek berhasil dihapus!' } });
                    fetchData();
                }
            } catch (error) {
                updateState({ message: { type: 'error', text: 'Gagal menghapus' } });
            }
        },

        // Membatalkan mode edit dan reset form
        handleCancel: () => {
            updateState({ editing: null, form: initialForm });
        }
    };
};
