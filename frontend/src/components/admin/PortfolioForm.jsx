import React from 'react';
import FormField from './FormField';

function PortfolioForm({ form, editing, handleChange, handleSubmit, handleCancel }) {
    return (
        <div className="admin-card">
            <h2>{editing ? 'Edit Proyek' : 'Tambah Proyek Baru'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <FormField
                        label="Nama Proyek"
                        id="nama"
                        name="nama"
                        value={form.nama}
                        onChange={handleChange}
                        placeholder="Toko Online Fashion"
                        required
                    />
                    <FormField
                        label="Kategori"
                        id="kategori"
                        name="kategori"
                        value={form.kategori}
                        onChange={handleChange}
                        placeholder="E-commerce"
                        required
                    />
                </div>

                <FormField
                    label="Deskripsi"
                    id="deskripsi"
                    name="deskripsi"
                    value={form.deskripsi}
                    onChange={handleChange}
                    placeholder="Deskripsi singkat proyek..."
                    required
                    isTextarea
                />

                <div className="form-row">
                    <FormField
                        label="URL Gambar"
                        id="gambar"
                        name="gambar"
                        value={form.gambar}
                        onChange={handleChange}
                        placeholder="https://example.com/image.jpg"
                        required
                    />
                    <FormField
                        label="Teknologi"
                        id="teknologi"
                        name="teknologi"
                        value={form.teknologi}
                        onChange={handleChange}
                        placeholder="React.js, Node.js, PostgreSQL"
                        required
                    />
                </div>

                <FormField
                    label="Link Proyek (opsional)"
                    id="link"
                    name="link"
                    value={form.link}
                    onChange={handleChange}
                    placeholder="https://example.com"
                />

                <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                        {editing ? 'Update Proyek' : 'Tambah Proyek'}
                    </button>
                    {editing && (
                        <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                            Batal
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default PortfolioForm;
