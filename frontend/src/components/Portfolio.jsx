import { useState, useEffect } from 'react';
import { getProyek } from '../api/api';
import '../styles/portfolio.css';

// Data fallback jika API tidak tersedia
const dataFallback = [
    {
        id: 1,
        nama: 'Toko Online Fashion',
        deskripsi: 'E-commerce platform untuk brand fashion lokal dengan fitur cart, payment gateway, dan admin dashboard.',
        gambar: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
        kategori: 'E-commerce',
        teknologi: 'Next.js, Prisma, PostgreSQL',
    },
    {
        id: 2,
        nama: 'Company Profile PT Maju Bersama',
        deskripsi: 'Website company profile profesional dengan animasi modern dan konten dinamis.',
        gambar: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
        kategori: 'Company Profile',
        teknologi: 'React.js, Express, MongoDB',
    },
    {
        id: 3,
        nama: 'Sistem Reservasi Restoran',
        deskripsi: 'Aplikasi reservasi online dengan manajemen meja dan integrasi WhatsApp notification.',
        gambar: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
        kategori: 'Web App',
        teknologi: 'Laravel, MySQL, Tailwind',
    },
    {
        id: 4,
        nama: 'Landing Page Startup Tech',
        deskripsi: 'Landing page modern dengan animasi scroll dan form lead generation.',
        gambar: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        kategori: 'Landing Page',
        teknologi: 'React.js, Framer Motion',
    },
    {
        id: 5,
        nama: 'Portal Berita Online',
        deskripsi: 'Platform berita dengan CMS custom, kategori artikel, dan sistem komentar.',
        gambar: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
        kategori: 'Portal',
        teknologi: 'Next.js, Strapi, PostgreSQL',
    },
    {
        id: 6,
        nama: 'Marketplace Jasa Freelancer',
        deskripsi: 'Platform marketplace untuk menghubungkan freelancer dengan klien, dengan fitur chat dan escrow.',
        gambar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
        kategori: 'Marketplace',
        teknologi: 'Laravel, Vue.js, MySQL',
    },
];

function Portfolio() {
    const [proyekList, setProyekList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProyek = async () => {
            try {
                const hasil = await getProyek();

                if (hasil.sukses) {
                    setProyekList(hasil.data);
                } else {
                    setProyekList(dataFallback);
                }
            } catch (error) {
                console.log('Menggunakan data fallback:', error);
                setProyekList(dataFallback);
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
                ) : (
                    <div className="portfolio-grid">
                        {proyekList.map((proyek) => (
                            <div key={proyek.id} className="portfolio-kartu">
                                <div className="portfolio-gambar-kontainer">
                                    <img
                                        src={proyek.gambar}
                                        alt={proyek.nama}
                                        className="portfolio-gambar"
                                    />
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
