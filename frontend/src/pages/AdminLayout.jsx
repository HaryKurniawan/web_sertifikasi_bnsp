// Outlet dari react-router-dom: tempat render komponen anak (nested routes)
import { Outlet } from 'react-router-dom';
import '../styles/AdminLayout.css';
import '../styles/AdminSidebar.css';

function AdminLayout() {
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

            {/* Area konten utama: menampilkan halaman sesuai route */}
            <main className="admin-main">
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
