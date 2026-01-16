import express from 'express';
import cors from 'cors';
import publicRoutes from './routes/publicRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', publicRoutes);
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server on http://localhost:${PORT}`);
});
