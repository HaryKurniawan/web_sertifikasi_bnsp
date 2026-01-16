import { useState, useEffect } from 'react';
import { getProyek } from '../api/api';
import '../styles/portfolio.css';

function Portfolio() {
    // State: daftar proyek dan status loading
    const [proyekList, setProyekList] = useState([]);
    const [loading, setLoading] = useState(true);

    // Ambil data proyek dari API saat komponen dimuat
    useEffect(() => {
        const fetchProyek = async () => {
            try {
                const hasil = await getProyek();
                if (hasil.sukses) {
                    setProyekList(hasil.data);
                }
            } catch (error) {
                console.error('Error fetching proyek:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProyek();
    }, []);

    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio-kontainer">
                <div className="portfolio-header">
                    <h2>Portfolio Kami</h2>
                    <p>
                        Proyek-proyek yang telah kami kerjakan untuk klien dari berbagai industri
                    </p>
                </div>

                {loading ? (
                    <div className="portfolio-loading">
                        <p>Memuat proyek...</p>
                    </div>
                ) : proyekList.length === 0 ? (
                    <div className="portfolio-loading">
                        <p>Belum ada proyek</p>
                    </div>
                ) : (
                    <div className="portfolio-grid">
                        {proyekList.map((proyek) => (
                            <div key={proyek.id} className="portfolio-kartu">

                                <div className="portfolio-gambar-kontainer">
                                    <img src={proyek.gambar} alt={proyek.nama} className="portfolio-gambar" />
                                    <div className="portfolio-overlay">
                                        <span className="portfolio-kategori">{proyek.kategori}</span>
                                    </div>
                                </div>

                                <div className="portfolio-konten">
                                    <h3 className="portfolio-judul">{proyek.nama}</h3>
                                    <p className="portfolio-deskripsi">{proyek.deskripsi}</p>

                                    <div className="portfolio-teknologi">
                                        {proyek.teknologi.split(', ').map((tech) => (
                                            <span key={tech} className="portfolio-tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Portfolio;
