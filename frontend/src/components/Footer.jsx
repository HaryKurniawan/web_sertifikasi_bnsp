import '../styles/footer.css';

function Footer() {
    const tahunSekarang = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-kontainer">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <div className="footer-logo">HYYVEN</div>
                        <p>Membangun identitas digital yang berkelas dan berdampak tinggi untuk bisnis Anda.</p>
                        <div className="footer-sosmed">
                            <a href="#">IG</a>
                            <a href="#">LI</a>
                            <a href="#">TW</a>
                        </div>
                    </div>

                    {/* Links Section 1 */}
                    <div className="footer-links">
                        <h4>Layanan</h4>
                        <a href="#layanan">Company Profile</a>
                        <a href="#layanan">E-Commerce</a>
                        <a href="#layanan">Web App</a>
                    </div>

                    {/* Links Section 2 */}
                    <div className="footer-links">
                        <h4>Navigasi</h4>
                        <a href="#beranda">Beranda</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#kontak">Hubungi Kami</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {tahunSekarang} HYYVEN. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
