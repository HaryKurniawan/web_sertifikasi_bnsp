import { useState } from 'react';
import { FRAMEWORKS, TYPES, CATEGORIES } from '../constants/pricing';
import '../styles/kalkulator.css';

// Fungsi format sederhana
const formatHarga = (angka) => {
    return 'Rp ' + angka.toLocaleString('id-ID');
};

function KalkulatorHarga() {
    const [pilihan, setPilihan] = useState({
        framework: null,
        tipe: null,
        kategori: null,
    });

    const gantiPilihan = (kunci, data) => {
        setPilihan(prev => ({ ...prev, [kunci]: data }));
    };

    const total =
        (pilihan.framework?.price || 0) +
        (pilihan.tipe?.price || 0) +
        (pilihan.kategori?.price || 0);

    return (
        <section id="harga" className="kalkulator">
            <div className="kalkulator-kontainer">
                <div className="kalkulator-header">
                    <h2>Kalkulator Harga</h2>
                    <p>Pilih kebutuhan Anda untuk estimasi harga website.</p>
                </div>

                {/* Langkah 1: Framework */}
                <div className="kalkulator-kategori">
                    <h3>Langkah 1: Pilih Framework</h3>
                    <div className="kalkulator-opsi-grid">
                        {FRAMEWORKS.map((f) => (
                            <div
                                key={f.id}
                                className={`kalkulator-kartu ${pilihan.framework?.id === f.id ? 'terpilih' : ''}`}
                                onClick={() => gantiPilihan('framework', f)}
                            >
                                <div className="kalkulator-kartu-ikon">{f.icon}</div>
                                <div className="kalkulator-kartu-nama">{f.name}</div>
                                <div className="kalkulator-kartu-harga">{formatHarga(f.price)}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Langkah 2: Tipe */}
                <div className="kalkulator-kategori">
                    <h3>Langkah 2: Tipe Website</h3>
                    <div className="kalkulator-opsi-grid">
                        {TYPES.map((t) => (
                            <div
                                key={t.id}
                                className={`kalkulator-kartu ${pilihan.tipe?.id === t.id ? 'terpilih' : ''}`}
                                onClick={() => gantiPilihan('tipe', t)}
                            >
                                <div className="kalkulator-kartu-ikon">{t.icon}</div>
                                <div className="kalkulator-kartu-nama">{t.name}</div>
                                <div className="kalkulator-kartu-harga">{formatHarga(t.price)}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Langkah 3: Kategori */}
                <div className="kalkulator-kategori">
                    <h3>Langkah 3: Kategori Website</h3>
                    <div className="kalkulator-opsi-grid">
                        {CATEGORIES.map((c) => (
                            <div
                                key={c.id}
                                className={`kalkulator-kartu ${pilihan.kategori?.id === c.id ? 'terpilih' : ''}`}
                                onClick={() => gantiPilihan('kategori', c)}
                            >
                                <div className="kalkulator-kartu-ikon">{c.icon}</div>
                                <div className="kalkulator-kartu-nama">{c.name}</div>
                                <div className="kalkulator-kartu-harga">{formatHarga(c.price)}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ringkasan */}
                <div className="kalkulator-ringkasan">
                    <h3 className="kalkulator-ringkasan-judul">Ringkasan Pilihan</h3>

                    <div className="kalkulator-ringkasan-item">
                        <span className="kalkulator-ringkasan-label">Framework</span>
                        <span className={`kalkulator-ringkasan-nilai ${!pilihan.framework ? 'kosong' : ''}`}>
                            {pilihan.framework ? `${pilihan.framework.name} — ${formatHarga(pilihan.framework.price)}` : 'Belum dipilih'}
                        </span>
                    </div>

                    <div className="kalkulator-ringkasan-item">
                        <span className="kalkulator-ringkasan-label">Tipe Website</span>
                        <span className={`kalkulator-ringkasan-nilai ${!pilihan.tipe ? 'kosong' : ''}`}>
                            {pilihan.tipe ? `${pilihan.tipe.name} — ${formatHarga(pilihan.tipe.price)}` : 'Belum dipilih'}
                        </span>
                    </div>

                    <div className="kalkulator-ringkasan-item">
                        <span className="kalkulator-ringkasan-label">Kategori</span>
                        <span className={`kalkulator-ringkasan-nilai ${!pilihan.kategori ? 'kosong' : ''}`}>
                            {pilihan.kategori ? `${pilihan.kategori.name} — ${formatHarga(pilihan.kategori.price)}` : 'Belum dipilih'}
                        </span>
                    </div>

                    <div className="kalkulator-ringkasan-total">
                        <span className="kalkulator-ringkasan-total-label">Total Estimasi</span>
                        <span className="kalkulator-ringkasan-total-nilai">{formatHarga(total)}</span>
                    </div>

                    <div className="kalkulator-aksi">
                        <a href="#kontak" className="kalkulator-tombol">Konsultasi Gratis</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default KalkulatorHarga;
