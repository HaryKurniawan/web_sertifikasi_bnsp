import { usePortfolio } from '../hooks/usePortfolio';
import PortfolioForm from '../components/admin/PortfolioForm';
import PortfolioTable from '../components/admin/PortfolioTable';
import '../styles/AdminLayout.css';
import '../styles/AdminSidebar.css';

function AdminPage() {
    const {
        proyekList,
        loading,
        editing,
        form,
        message,
        handlers
    } = usePortfolio();

    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                <div className="admin-logo">
                    <h2>HYYVEN</h2>
                    <span>Admin Panel</span>
                </div>
                <nav className="admin-nav">
                </nav>
                <div className="admin-footer">
                    <a href="/" className="back-to-site">
                        <span>←</span> Kembali ke Website
                    </a>
                </div>
            </aside>

            <main className="admin-main">
                <div className="admin-page">
                    <h1>Kelola Portfolio</h1>
                    <p>Tambah, edit, atau hapus proyek portfolio</p>

                    {loading ? (
                        <div className="loading">Memuat data...</div>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}

export default AdminPage;
