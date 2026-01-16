import { Router } from 'express';
import {
    getAllProyek,
    createProyek,
    updateProyek,
    deleteProyek,
} from '../controllers/adminController.js';

const router = Router();

router.get('/proyek', getAllProyek);
router.post('/proyek', createProyek);
router.put('/proyek/:id', updateProyek);
router.delete('/proyek/:id', deleteProyek);

export default router;
