import heroImage from '../assets/hero-image.png';
import '../styles/hero.css';

function Hero() {


    return (
        <section id="beranda" className="hero">
            <div className="hero-kontainer">
                <div className="hero-konten">

                    <h1 className="hero-judul">
                        Wujudkan Ide Anda Menjadi{' '}
                        <span>Website Modern</span>
                    </h1>

                    <p className="hero-deskripsi">
                        Kami membantu bisnis Anda berkembang dengan website yang cepat,
                        responsif, dan menarik. Dari company profile hingga e-commerce,
                        kami siap mewujudkan visi digital Anda.
                    </p>

                    <div className="hero-tombol-grup">
                        <a href="#harga" className="hero-tombol-primer">
                            Lihat Harga
                            <span>→</span>
                        </a>
                        <a href="#portfolio" className="hero-tombol-sekunder">
                            Lihat Portfolio
                        </a>
                    </div>

                </div>

                <div className="hero-visual">
                    <div className="hero-gambar-kontainer">
                        <img
                            src={heroImage}
                            alt="Web Development"
                            className="hero-gambar"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
