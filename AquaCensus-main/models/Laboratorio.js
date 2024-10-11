// Definindo o modelo Sequelize de Laboratorio que mapeia a tabela correspondente no banco de dados
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Laboratorio = sequelize.define('laboratorio', {
  id_lab: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  tableName: 'laboratorio',
  timestamps: false,
});

module.exports = Laboratorio;
