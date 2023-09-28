
const Departament = require('../models/departament');

// Controlador para listar todos Departamentos
async function getAllDepartament(req, res) {
  try {
    const departaments = await Departament.getAll();
    res.status(200).json(departaments);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar Departamentos.' });
  }
}

// Controlador para buscar um departamento por ID
async function getDepartamentId(req, res) {
  const departamentId = req.params.id;

  try {
    const departament = await Departament.getById(departamentId);
    res.status(200).json(departament);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar Departamento por ID.' });
  }
}

// Controlador para criar um novo Departamento
async function createDepartament(req, res) {
  const { departamento, numeroColaboradores } = req.body;

  try {
    const newDepartament = await Category.create({ departamento, numeroColaboradores });
    res.status(201).json(newDepartament);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar Departamento.' });
  }
}

// Controlador para atualizar um Departamento existente
async function updateDepartament(req, res) {
  const departamentId = req.params.id;
  const { departamento, numeroColaboradores } = req.body;

  try {
    const updatedDepartament = await Departament.update({
      id: departamentId,
      departamento,
      numeroColaboradores,
    });
    res.status(200).json(updatedDepartament);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar Departamento.' });
  }
}

// Controlador para excluir um Departamento
async function deleteDepartament(req, res) {
  const departamentId = req.params.id;

  try {
    await Departament.delete(departamentId);
    res.status(204).send(); // 204 significa "No Content" (sem conteúdo)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir departamento.' });
  }
}

module.exports = {
  getAllDepartament,
  getDepartamentId,
  createDepartament,
  updateDepartament,
  deleteDepartament,
};

