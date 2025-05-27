import { Router } from 'express';
import { obtenerClima } from '../controllers/climaController';

const router = Router();

router.get('/:ciudad', obtenerClima);

export default router;
