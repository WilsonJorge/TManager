// Importe o Express
const express = require('express');

// Crie um roteador Express
const router = express.Router();

// Importe os controladores
const categoryController = require('../controllers/categoryController');

// Rota para listar todas as categorias
router.get('/', categoryController.getAllCategories);

// Rota para buscar uma categoria por ID
router.get('/:id', categoryController.getCategoryById);

// Rota para criar uma nova categoria
router.post('/', categoryController.createCategory);

// Rota para atualizar uma categoria existente por ID
router.put('/:id', categoryController.updateCategory);




// Exporte o roteador
module.exports = router;

