// routes.ts

import { Router } from 'express';
import CategoryController from '../controller/CategoryController'; // Importe o controller

const router = Router();

// Defina as rotas para o CategoryController
router.get('/categories', CategoryController.getAll);

export default router;
