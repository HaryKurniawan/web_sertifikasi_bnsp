import React from 'react';
import { formatRupiah } from '../../services/format';

function PriceCard({ item, isSelected, onSelect }) {
    return (
        <div
            className={`kalkulator-kartu ${isSelected ? 'terpilih' : ''}`}
            onClick={() => onSelect(item)}
        >
            <div className="kalkulator-kartu-ikon">
                {item.icon || '💻'}
            </div>
            <div className="kalkulator-kartu-nama">{item.name}</div>
            <div className="kalkulator-kartu-harga">{formatRupiah(item.price)}</div>
        </div>
    );
}

export default PriceCard;
