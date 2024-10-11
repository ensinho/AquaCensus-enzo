require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./config/database');
const path = require('path');
const cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html')); // Enviar arquivo HTML index
});

// Middleware para JSON
app.use(express.json());

// Configurando diretório de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Importando rotas
const laboratorioRoutes = require('./routes/laboratorio');
const embarcacaoRoutes = require('./routes/embarcacao');
const usuarioRoutes = require('./routes/usuario');
const coletaRoutes = require('./routes/coleta');
const favoritoRoutes = require('./routes/favorito');

// Definindo rotas para as páginas estáticas
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, 'views', 'index.html'))}); // Página de Login
app.get('/home', (req, res) => {res.sendFile(path.join(__dirname, 'views', 'home.html'))}); // Página Principal
app.get('/cadastro', (req, res) => {res.sendFile(path.join(__dirname, 'views', 'cadastro.html'))}); // Página de Cadastro
app.get('/favoritos', (req, res) => {res.sendFile(path.join(__dirname, 'views', 'favoritos.html'))}); // Página de Favoritos
app.get('/cadastrar-especie', (req, res) => {res.sendFile(path.join(__dirname, 'views', 'cadastrar-especie.html'))}); // Página de Cadastrar Coleta

// Usando as rotas
app.use('/laboratorios', laboratorioRoutes);
app.use('/embarcacoes', embarcacaoRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/coletas', coletaRoutes);
app.use('/favoritos', favoritoRoutes);

// Sincronizar o banco de dados
sequelize.sync({ force: false })
  .then(() => {
    console.log('Banco de dados sincronizado');
  })
  .catch(err => {
    console.error('Erro ao sincronizar banco de dados:', err);
  });

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
