const db = require('../db'); // Importe a instância do banco de dados

// Defina o modelo de tarefa
const Departament = db.model('departament', {
  table: 'departamento', // Nome da tabela no banco de dados
  columns: {
    id: { type: 'numeric', notNull: true, primaryKey: true },
    departamento: { type: 'character', notNull: true },
    numeroColaboradores: {type :'numeric', notNull:true, }
    
  }
});

module.exports = Departament;