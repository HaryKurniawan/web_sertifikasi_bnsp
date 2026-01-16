import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Layanan from '../components/Layanan';
import Portfolio from '../components/Portfolio';
import KalkulatorHarga from '../components/KalkulatorHarga';
import Kontak from '../components/Kontak';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Layanan />
                <Portfolio />
                <KalkulatorHarga />
                <Kontak />
            </main>
            <Footer />
        </>
    );
}

export default HomePage;
