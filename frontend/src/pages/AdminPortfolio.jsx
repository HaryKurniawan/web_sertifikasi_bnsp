import { usePortfolio } from '../hooks/usePortfolio';
import PortfolioForm from '../components/admin/PortfolioForm';
import PortfolioTable from '../components/admin/PortfolioTable';

function AdminPortfolio() {
    const {
        proyekList,
        loading,
        editing,
        form,
        message,
        handlers
    } = usePortfolio();

    if (loading) {
        return (
            <div className="admin-page">
                <h1>Kelola Portfolio</h1>
                <div className="loading">Memuat data...</div>
            </div>
        );
    }

    return (
        <div className="admin-page">
            <h1>Kelola Portfolio</h1>
            <p>Tambah, edit, atau hapus proyek portfolio</p>

            {message && (
                <div className={`alert alert-${message.type}`}>
                    {message.text}
                </div>
            )}

            <PortfolioForm
                form={form}
                editing={editing}
                {...handlers}
            />

            <PortfolioTable
                proyekList={proyekList}
                {...handlers}
            />
        </div>
    );
}

export default AdminPortfolio;
