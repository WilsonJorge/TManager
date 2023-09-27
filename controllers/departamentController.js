
const Departament = require('../models/departament'); // Importe o modelo de tarefa

// Controlador para listar todos os Departamentos
async function getAllDepartament(req, res) {
  try {
    const departamentList = await Departament.select('*');
    res.status(200).json(departamentList);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar os Departamentos.' });
  }
}

// Controlador para criar um novo Departamento
async function createDepartament(req, res) {
  const { departamento, numeroColaboradores } = req.body;

  try {
    const departament = await Departament.insert({ departamento, numeroColaboradores });
    res.status(201).json(departament);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar um Departamento.' });
  }
}

// Controlador para atualizar um Departamento
async function updateDepartament(req, res) {
    const departamentId = req.params.id; // Captura o ID do Departamento a ser atualizada
    const { departamento, numeroColaboradores } = req.body;
  
    try {
      const updatedDepartament = await Departament.update(
        { departamento, numeroColaboradores },
        { id: departamentId }
      );
  
      if (updatedDepartament) {
        res.status(200).json(updatedDepartament);
      } else {
        res.status(404).json({ error: 'Departamento nao encontrado.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar Departamento.' });
    }
  }

  // Controlador para excluir um Departamento
async function deleteDepartament(req, res) {
    const departamentId = req.params.id; // Captura o ID da categoria a ser excluída
  
    try {
      const deletedDepartament = await Departament.remove({ id: departamentId });
  
      if (deletedDepartament) {
        res.status(204).end(); // Sem conteúdo (Categoria excluída com sucesso)
      } else {
        res.status(404).json({ error: 'Departamento não encontrada.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro ao excluir Departamento.' });
    }
  }
  

module.exports = {
    getAllDepartament,
    createDepartament,
    updateDepartament,
    deleteDepartament
  
};
