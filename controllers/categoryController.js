const Category = require('../models/category');

// Controlador para listar todas as categorias
async function getAllCategories(req, res) {
  try {
    const categories = await Category.getAll();
    res.status(200).json(categories);
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    res.status(500).json({ error: 'Erro interno ao buscar categorias.' });
  }
  
}

// Controlador para buscar uma categoria por ID da Categoria
async function getCategoryById(req, res) {
  const categoryId = req.params.id;

  try {
    const category = await Category.getById(categoryId);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar categoria por ID.' });
  }
}

// Controlador para criar uma nova categoria
async function createCategory(req, res) {
  const { categoria, numerocategoria } = req.body;

  try {
    const newCategory = await Category.create({ categoria, numerocategoria });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar categoria.' });
  }
}

// Controlador para atualizar uma categoria existente
async function updateCategory(req, res) {
  const categoryId = req.params.id;
  const { categoria, numerocategoria } = req.body;

  try {
    const updatedCategory = await Category.update({
      id: categoryId,
      categoria,
      numerocategoria,
    });
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar categoria.' });
  }
}

// Controlador para excluir uma categoria
async function deleteCategory(req, res) {
  const categoryId = req.params.id;

  try {
    await Category.delete(categoryId);
    res.status(204).send(); // 204 significa "No Content" (sem conteúdo)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir categoria.' });
  }
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};


