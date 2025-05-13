
import { Router } from 'express';
import { getClases, getClaseById, createClase, updateClase, deleteClase } from '../controller/claseController';
import { authenticate } from '../middlewear/authMiddleware'; 

const router = Router();


router.get('/clases', authenticate, getClases);
router.get('/clases/:id', authenticate, getClaseById);
router.post('/clases', authenticate, createClase);
router.put('/clases/:id', authenticate, updateClase);
router.delete('/clases/:id', authenticate, deleteClase);

export default router;
