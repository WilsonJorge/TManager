// Importe o Express
const express = require('express');

// Crie um roteador Express
const router = express.Router();

// Importe os controladores
const departamentController = require('../controllers/departamentController');

// Rota para listar todas as categorias
router.get('/', departamentController.getAllDepartament);

// Rota para buscar um departamento por ID
router.get('/:id', departamentController.getDepartamentId);

// Rota para criar um novo departamento
router.post('/', departamentController.createDepartament);

// Rota para atualizar um departamento existente por ID
router.put('/:id', departamentController.updateDepartament);

// Rota para excluir um departamento por ID
router.delete('/:id', departamentController.deleteDepartament);


// Exporte o roteador
module.exports = router;

