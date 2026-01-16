import React from 'react';

function PortfolioTable({ proyekList, handleEdit, handleDelete }) {
    return (
        <div className="admin-card">
            <h2>Daftar Portfolio ({proyekList.length})</h2>
            {proyekList.length === 0 ? (
                <div className="empty-state">
                    <p>Belum ada proyek. Tambahkan proyek pertama Anda!</p>
                </div>
            ) : (
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Gambar</th>
                            <th>Nama</th>
                            <th>Kategori</th>
                            <th>Teknologi</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {proyekList.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <img
                                        src={item.gambar}
                                        alt={item.nama}
                                        className="table-img"
                                    />
                                </td>
                                <td>{item.nama}</td>
                                <td>{item.kategori}</td>
                                <td className="table-truncate">
                                    {item.teknologi}
                                </td>
                                <td>
                                    <div className="table-actions">
                                        <button className="btn btn-secondary btn-sm" onClick={() => handleEdit(item)}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>
                                            Hapus
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default PortfolioTable;
