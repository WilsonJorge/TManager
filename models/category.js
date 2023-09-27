
const db = require('../db'); // Importe a instância do banco de dados

// Defina o modelo de tarefa
const Category = db.model('category', {
  table: 'categoriaTarefa', // Nome da tabela no banco de dados
  columns: {
    id: { type: 'numeric', notNull: true, primaryKey: true },
    categoria: { type: 'character', notNull: true },
    numerocategoria: {type :'numeric', notNull:true, }
    
  }
});

module.exports = Category;
