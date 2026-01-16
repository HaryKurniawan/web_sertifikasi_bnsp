import React from 'react';
import { formatRupiah } from '../../services/format';

function PriceSummary({ selections, total }) {
    const { framework, type, category } = selections;

    return (
        <div className="kalkulator-ringkasan">
            <h3 className="kalkulator-ringkasan-judul">Ringkasan Pesanan</h3>

            <div className="kalkulator-ringkasan-item">
                <span className="kalkulator-ringkasan-label">Framework</span>
                <span className={`kalkulator-ringkasan-nilai ${!framework ? 'kosong' : ''}`}>
                    {framework ? `${framework.name} - ${formatRupiah(framework.price)}` : 'Belum dipilih'}
                </span>
            </div>

            <div className="kalkulator-ringkasan-item">
                <span className="kalkulator-ringkasan-label">Tipe Website</span>
                <span className={`kalkulator-ringkasan-nilai ${!type ? 'kosong' : ''}`}>
                    {type ? `${type.name} - ${formatRupiah(type.price)}` : 'Belum dipilih'}
                </span>
            </div>

            <div className="kalkulator-ringkasan-item">
                <span className="kalkulator-ringkasan-label">Kategori</span>
                <span className={`kalkulator-ringkasan-nilai ${!category ? 'kosong' : ''}`}>
                    {category ? `${category.name} - ${formatRupiah(category.price)}` : 'Belum dipilih'}
                </span>
            </div>

            <div className="kalkulator-ringkasan-total">
                <span className="kalkulator-ringkasan-total-label">Total Estimasi</span>
                <span className="kalkulator-ringkasan-total-nilai">{formatRupiah(total)}</span>
            </div>

            <div className="kalkulator-catatan">
                Catatan: Harga di atas adalah estimasi awal. Harga final dapat disesuaikan berdasarkan kompleksitas dan fitur tambahan yang dibutuhkan.
            </div>

            <div className="kalkulator-aksi">
                <a href="#kontak" className="kalkulator-tombol">
                    Konsultasi Gratis
                </a>
            </div>
        </div>
    );
}

export default PriceSummary;
