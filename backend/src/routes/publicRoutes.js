import { Router } from 'express';
import { getProyek } from '../controllers/publicController.js';

const router = Router();

router.get('/proyek', getProyek);

export default router;
