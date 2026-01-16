import express from 'express';
import cors from 'cors';
import publicRoutes from './routes/publicRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// ===============================
// ROUTES
// ===============================

// Public API routes
app.use('/api', publicRoutes);

// Admin API routes
app.use('/api/admin', adminRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ sukses: true, pesan: 'Server berjalan dengan baik!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ sukses: false, pesan: 'Endpoint tidak ditemukan' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ sukses: false, pesan: 'Terjadi kesalahan server' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
    console.log(`📡 Public API: http://localhost:${PORT}/api`);
    console.log(`🔐 Admin API: http://localhost:${PORT}/api/admin`);
});
