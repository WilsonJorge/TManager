// models/category.js
const db = require('../db');

class Category {
  constructor(id, categoria, numerocategoria) {
    this.id = id;
    this.categoria = categoria;
    this.numerocategoria = numerocategoria;
  }

  static async getAll() {
    return db.any('SELECT * FROM categoriaTarefa');
  }

  static async getById(id) {
    return db.one('SELECT * FROM categoriaTarefa WHERE id = $1', id);
  }

  static async create(category) {
    return db.one(
      'INSERT INTO categoriaTarefa (categoria, numerocategoria) VALUES ($1, $2) RETURNING id',
      [category.categoria, category.numerocategoria]
    );
  }

  static async update(category) {
    return db.none(
      'UPDATE categoriaTarefa SET categoria = $2, numerocategoria = $3 WHERE id = $1',
      [category.id, category.categoria, category.numerocategoria]
    );
  }

  static async delete(id) {
    return db.none('DELETE FROM categoriaTarefa WHERE id = $1', id);
  }
}

module.exports = Category;

