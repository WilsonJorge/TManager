// routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const departamentController = require('../controllers/departamentController.js');

// Rota para listar todos os Departamentos
router.get('/departament', departamentController.getAllDepartament);

// Rota para criar um novo Departamento
router.post('/departament', departamentController.createDepartament);

// Rota para atualizar um Departamento específico por ID (usando PUT)
router.put('/departament/:id', departamentController.updateDepartament);

// Rota para excluir um Departamento específico por ID (usando DELETE)
router.delete('/departament/:id', departamentController.deleteDepartament);



module.exports = router;
