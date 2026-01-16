import { Router } from 'express';
import {
    getAllProyek,
    createProyek,
    updateProyek,
    deleteProyek,
} from '../controllers/adminController.js';

const router = Router();

// ===============================
// Proyek CRUD
// ===============================
router.get('/proyek', getAllProyek);
router.post('/proyek', createProyek);
router.put('/proyek/:id', updateProyek);
router.delete('/proyek/:id', deleteProyek);

export default router;
