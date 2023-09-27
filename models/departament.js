// models/category.js
const db = require('../db');

class Departament {
  constructor(id, departamento, numeroColaboradores) {
    this.id = id;
    this.departamento = departamento;
    this.numeroColaboradores = numeroColaboradores;
  }

  static async getAll() {
    return db.any('SELECT * FROM departamento');
  }

  static async getById(id) {
    return db.one('SELECT * FROM departamento WHERE id = $1', id);
  }

  static async create(departament) {
    return db.one(
      'INSERT INTO departamento (departamento, numeroColaboradores) VALUES ($1, $2) RETURNING id',
      [departament.departamento, departament.numeroColaboradores]
    );
  }

  static async update(departament) {
    return db.none(
      'UPDATE categoriaTarefa SET categoria = $2, numerocategoria = $3 WHERE id = $1',
      [departament.id, departament.departamento, departament.numeroColaboradores]
    );
  }

  static async delete(id) {
    return db.none('DELETE FROM categoriaTarefa WHERE id = $1', id);
  }
}

module.exports = Departament;

