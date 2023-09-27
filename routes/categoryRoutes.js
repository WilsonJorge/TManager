// routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController.js');

// Rota para listar todas as categorias
router.get('/category', categoryController.getAllCategory);

// Rota para criar uma nova categoria
router.post('/category', categoryController.createCategory);

// Rota para atualizar uma tarefa específica por ID (usando PUT)
router.put('/category/:id', categoryController.updateCategory);

// Rota para excluir uma tarefa específica por ID (usando DELETE)
router.delete('/category/:id', categoryController.deleteCategory);



module.exports = router;
