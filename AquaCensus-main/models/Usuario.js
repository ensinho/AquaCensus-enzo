// Definindo o modelo Sequelize de Usuario que mapeia a tabela correspondente no banco de dados
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Laboratorio = require('./Laboratorio');
const bcrypt = require('bcrypt');

const Usuario = sequelize.define('usuario', {
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  descricao: DataTypes.TEXT,
  cargo: DataTypes.STRING(30),
  status: DataTypes.BOOLEAN,
  is_admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  foto_perfil: DataTypes.BLOB,
  id_lab: {
    type: DataTypes.INTEGER,
    references: {
      model: Laboratorio,
      key: 'id_lab',
    },
    onDelete: 'SET NULL',
  },
}, {
  tableName: 'usuario', 
  timestamps: false,
});

Usuario.belongsTo(Laboratorio, { foreignKey: 'id_lab' });

Usuario.beforeCreate(async (usuario, options) => {
  usuario.senha = await bcrypt.hash(usuario.senha, 10);
});


module.exports = Usuario;
