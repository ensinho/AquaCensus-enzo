// Definindo os métodos que serão usados para manipular os dados na tabela usuário
const Usuario = require('../models/Usuario');
const sequelize = require('../config/database'); //lembrete importante
const bcrypt = require('bcrypt');

exports.getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' + error});
  }
};

exports.createUsuario = async (req, res) => {
  try {
    const { nome, email, senha, descricao, cargo, status, is_Admin, foto_perfil, id_lab } = req.body;
    const novoUsuario = await Usuario.create({ nome, email, senha, descricao, cargo, status, is_Admin, foto_perfil, id_lab });
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' + error});
  }
};

exports.loginUsuario = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ where: { email } });
    
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Verificar a senha utilizando bcrypt.compare()
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
    
    if (!senhaCorreta) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    // Login bem-sucedido, retornar dados do usuário
    res.status(200).json({
      message: 'Login realizado com sucesso!',
      user: {
        id: usuario.id_user,
        nome: usuario.nome,
        email: usuario.email,
        cargo: usuario.cargo,
        foto: usuario.foto_perfil,
        is_admin: usuario.is_admin,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao realizar login: ' + error });
  }
};