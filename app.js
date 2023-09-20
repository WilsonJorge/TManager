const express = require('express');
const app = express();
const port = process.env.PORT || 3005;

// Configurar o diretório público para servir arquivos estáticos
app.use(express.static('public'));

// Rota para renderizar o template Bootstrap
app.get('/', (req, res) => {
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

  // Rota para a página "task-edit.html"
  app.get('/tasks-edit.html', (req, res) => {
    res.sendFile(__dirname + '/views/tasks-edit.html');
  });

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor Express.js rodando na porta ${port}`);
});