
const express = require('express');
const app = express();
const port = process.env.PORT || 3005;

// Configurar o diretório público para servir arquivos estáticos
app.use(express.static('public'));

// app.get('*', (req, res) => {
//   res.sendFile(__dirname + '/views/' + req.url + '.html');
// });


// Rota para renderizar o template Bootstrap
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });

  // Rota para renderizar o template Bootstrap
app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

  // Rota para a página "task-create.html"
  app.get('/task-create.html', (req, res) => {
    res.sendFile(__dirname + '/views/task-create.html');
  });

  // Rota para a página "task-list.html"
  app.get('/tasks-list.html', (req, res) => {
    res.sendFile(__dirname + '/views/tasks-list.html');
  });

   // Rota para a página "task-edit.html"
   app.get('/tasks-edit.html', (req, res) => {
    res.sendFile(__dirname + '/views/tasks-edit.html');
  });

  // Rota para a página "projects.html"
  app.get('/projects.html', (req, res) => {
    res.sendFile(__dirname + '/views/projects.html');
  });

  // Rota para a página "projects-list.html"
  app.get('/projects-list.html', (req, res) => {
    res.sendFile(__dirname + '/views/projects-list.html');
  });

  // Rota para a página "project-new.html"
  app.get('/project-new.html', (req, res) => {
    res.sendFile(__dirname + '/views/project-new.html');
  });

  // Rota para a página "clients.html"
  app.get('/clients.html', (req, res) => {
    res.sendFile(__dirname + '/views/clients.html');
  });

  // Rota para a página "client-create.html"
  app.get('/client-create.html', (req, res) => {
    res.sendFile(__dirname + '/views/client-create.html');
  });

  // Rota para a página "category-list.html"
  app.get('/register-category.html', (req, res) => {
    res.sendFile(__dirname + '/views/register-category.html');
  });

  // Rota para a página "register-departament.html"
  app.get('/register-departament.html', (req, res) => {
    res.sendFile(__dirname + '/views/register-departament.html');
  });

  // Rota para a página "list-category.html"
  app.get('/list-departament.html', (req, res) => {
    res.sendFile(__dirname + '/views/list-departament.html');
  });

  // Rota para a página "list-departament.html"
  app.get('/list-category.html', (req, res) => {
    res.sendFile(__dirname + '/views/list-category.html');
  });

  // Rota para a página "edit-category.html"
  app.get('/edit-category.html', (req, res) => {
    res.sendFile(__dirname + '/views/edit-category.html');
  });

  // Rota para a página ""edit-departament.html"
  app.get('/edit-departament.htmll', (req, res) => {
    res.sendFile(__dirname + '/views/edit-departament.html');
  });

  //CONEXAO DE BASE DE DADOS
    const { testDatabaseConnection } = require('./db');
  // Chame a função para testar a conexão
  testDatabaseConnection();

//Rota para o  Controller Categoria das Tarefas
const categoryRoutes = require('./routes/categoryRoutes');

//Rota para o controlador Departamento
const departamentRoutes = require('./routes/departamentRoutes');

app.use('/category', categoryRoutes);
app.use('/departament', departamentRoutes);
app.use((req, res, next) => {
  res.status(404).send('Página não encontrada');
});
// Use outros caminhos e rotas, se aplicável

app.use(express.json()); // 
app.use(express.urlencoded({ extended: true })); // Para análise de dados de formu

// Importe outras rotas, se aplicável

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor Express.js rodando na porta ${port}`);
});