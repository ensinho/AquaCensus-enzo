// Definindo o modelo Sequelize de Favorito que mapeia a tabela correspondente no banco de dados
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const Coleta = require('./Coleta');

const Favoritos = sequelize.define('favoritos', {
  id_user_fk: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id_user',
    },
    onDelete: 'CASCADE',
    primaryKey: true,
  },
  id_coleta_fk: {
    type: DataTypes.INTEGER,
    references: {
      model: Coleta,
      key: 'id_coleta',
    },
    onDelete: 'CASCADE',
    primaryKey: true,
  },
}, {
  tableName: 'favoritos', 
  timestamps: false,
});

module.exports = Favoritos;
