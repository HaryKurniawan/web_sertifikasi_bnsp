import { useState } from 'react';
import '../styles/navbar.css';

function Navbar() {
    const [menuAktif, setMenuAktif] = useState(false);

    const daftarMenu = [
        { nama: 'Beranda', href: '#beranda' },
        { nama: 'Layanan', href: '#layanan' },
        { nama: 'Portfolio', href: '#portfolio' },
        { nama: 'Harga', href: '#harga' },
        { nama: 'Kontak', href: '#kontak' },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-kontainer">
                <a href="#beranda" className="navbar-logo">
                    HYYVEN
                </a>

                <button
                    className="navbar-toggle"
                    onClick={() => setMenuAktif(!menuAktif)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`navbar-menu ${menuAktif ? 'aktif' : ''}`}>
                    {daftarMenu.map((item) => (
                        <li key={item.nama}>
                            <a
                                href={item.href}
                                className="navbar-link"
                                onClick={() => setMenuAktif(false)}
                            >
                                {item.nama}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#kontak" className="navbar-cta">
                            Hubungi Kami
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
