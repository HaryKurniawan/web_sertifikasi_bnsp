import { useState } from 'react';
import '../styles/kontak.css';

function Kontak() {
    const [pesan, setPesan] = useState({ nama: '', email: '', isi: '' });

    const handleChange = (e) => {
        setPesan({ ...pesan, [e.target.name]: e.target.value });
    };

    const kirimWA = (e) => {
        e.preventDefault();
        const text = `Halo HYYVEN!%0A%0ANama: ${pesan.nama}%0AEmail: ${pesan.email}%0A%0APesan:%0A${pesan.isi}`;
        window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
    };

    return (
        <section id="kontak" className="kontak">
            <div className="kontak-kontainer">
                <div className="kontak-grid">

                    <div className="kontak-info">
                        <div className="kontak-header">
                            <h2>Mari Bicara</h2>
                            <p>Punya ide besar? Kami siap membantu mewujudkannya menjadi website yang luar biasa.</p>
                        </div>

                        <div className="kontak-detail">
                            <div className="kontak-item">
                                <span>EMAIL</span>
                                <a href="mailto:hello@hyyven.com">hello@hyyven.com</a>
                            </div>
                            <div className="kontak-item">
                                <span>WHATSAPP</span>
                                <a href="https://wa.me/6281234567890">+62 812 3456 7890</a>
                            </div>
                        </div>
                    </div>

                    <form className="kontak-form" onSubmit={kirimWA}>
                        <div className="form-grup">
                            <input
                                type="text" name="nama" placeholder="Nama Lengkap"
                                value={pesan.nama} onChange={handleChange} required
                            />
                        </div>
                        <div className="form-grup">
                            <input
                                type="email" name="email" placeholder="Alamat Email"
                                value={pesan.email} onChange={handleChange} required
                            />
                        </div>
                        <div className="form-grup">
                            <textarea
                                name="isi" placeholder="Ceritakan proyek Anda..."
                                value={pesan.isi} onChange={handleChange} required
                            />
                        </div>
                        <button type="submit" className="tombol-kirim">
                            Kirim Pesan — WA
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}

export default Kontak;
