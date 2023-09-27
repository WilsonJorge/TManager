
const Category = require('../models/category'); // Importe o modelo de tarefa

// Controlador para listar todas as tarefas
async function getAllCategory(req, res) {
  try {
    const categoryTask = await Category.select('*');
    res.status(200).json(categoryTask);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar as categorias.' });
  }
}

// Controlador para criar uma nova Categoria
async function createCategory(req, res) {
  const { categoria, numerocategoria  } = req.body;

  try {
    const category = await Category.insert({ categoria, numerocategoria });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar Categoria de Tarefa tarefa.' });
  }
}

// Controlador para atualizar uma Categoria
async function updateCategory(req, res) {
    const categoryId = req.params.id; // Captura o ID da categoria a ser atualizada
    const { categoria, numerocategoria } = req.body;
  
    try {
      const updatedCategory = await Category.update(
        { categoria, numerocategoria },
        { id: categoryId }
      );
  
      if (updatedCategory) {
        res.status(200).json(updatedCategory);
      } else {
        res.status(404).json({ error: 'Categoria da Tarefa nao encontrado não encontrada.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar Categoria de Tarefa.' });
    }
  }

  // Controlador para excluir uma Categoria
async function deleteCategory(req, res) {
    const categoryId = req.params.id; // Captura o ID da categoria a ser excluída
  
    try {
      const deletedCategory = await Category.remove({ id: categoryId });
  
      if (deletedCategory) {
        res.status(204).end(); // Sem conteúdo (Categoria excluída com sucesso)
      } else {
        res.status(404).json({ error: 'Categoria não encontrada.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir Categoria de Tarefa.' });
    }
  }
  


module.exports = {
    getAllCategory,
    createCategory,
    updateCategory,
    deleteCategory
  
};
