import '../styles/layanan.css';

function Layanan() {
    const daftarLayanan = [
        {
            ikon: '🌐',
            judul: 'Website Company Profile',
            deskripsi: 'Website profesional untuk menampilkan profil perusahaan, visi misi, tim, dan layanan Anda secara menarik.',
        },
        {
            ikon: '🛒',
            judul: 'E-Commerce',
            deskripsi: 'Toko online lengkap dengan keranjang belanja, payment gateway, dan manajemen produk yang mudah.',
        },
        {
            ikon: '📱',
            judul: 'Web Application',
            deskripsi: 'Aplikasi web custom sesuai kebutuhan bisnis Anda, dari sistem manajemen hingga dashboard analytics.',
        },
        {
            ikon: '🎯',
            judul: 'Landing Page',
            deskripsi: 'Halaman landing yang dioptimasi untuk konversi tinggi, cocok untuk campaign marketing Anda.',
        },
        {
            ikon: '🔧',
            judul: 'Maintenance & Support',
            deskripsi: 'Layanan pemeliharaan dan dukungan teknis untuk menjaga website Anda tetap optimal.',
        },
        {
            ikon: '🎨',
            judul: 'UI/UX Design',
            deskripsi: 'Desain antarmuka yang modern, intuitif, dan memberikan pengalaman terbaik bagi pengguna.',
        },
    ];

    return (
        <section id="layanan" className="layanan">
            <div className="layanan-kontainer">
                <div className="layanan-header">
                    <h2>Layanan Kami</h2>
                    <p>
                        Solusi digital lengkap untuk mengembangkan bisnis Anda di era digital
                    </p>
                </div>

                <div className="layanan-grid">
                    {daftarLayanan.map((layanan) => (
                        <div key={layanan.judul} className="layanan-kartu">
                            <div className="layanan-ikon">{layanan.ikon}</div>
                            <h3 className="layanan-judul">{layanan.judul}</h3>
                            <p className="layanan-deskripsi">{layanan.deskripsi}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Layanan;
