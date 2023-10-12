// routes.ts

import { Router } from 'express';
import DepartamentController from '../controller/DepartamentController'; // Importe o controller

const router = Router();

// Defina as rotas para o CategoryController
router.get('/departament', DepartamentController.getAll);
router.post('/departament', DepartamentController.createDepartament);

export default router;
