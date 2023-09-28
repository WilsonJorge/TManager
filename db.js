const pgp = require('pg-promise')();
const connectionString = 'postgres://postgres:root@localhost:5432/Tmaneger';
const db = pgp(connectionString);

async function testDatabaseConnection() {
  try {
    await db.connect();
    console.log('Conexão com o banco de dados PostgreSQL estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados PostgreSQL:', error);
  } finally {
    // Certifique-se de que a conexão seja sempre liberada, independentemente de ter sido bem-sucedida ou não.
    // db.end();
  }
}

module.exports = {
  db,
  testDatabaseConnection,
};


