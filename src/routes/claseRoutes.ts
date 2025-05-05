// /routes/claseRoutes.ts
import { Router } from 'express';
import { getClases, getClaseById, createClase, updateClase, deleteClase } from '../controller/claseController';

const router = Router();

router.get('/clases', getClases);
router.get('/clases/:id', getClaseById);
router.post('/clases', createClase);
router.put('/clases/:id', updateClase);
router.delete('/clases/:id', deleteClase);

export default router;
