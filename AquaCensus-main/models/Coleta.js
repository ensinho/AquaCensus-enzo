// Definindo o modelo Sequelize de Coleta que mapeia a tabela correspondente no banco de dados
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Embarcacao = require('./Embarcacao');
const Usuario = require('./Usuario');

const Coleta = sequelize.define('coleta', {
  id_coleta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome_cient: DataTypes.STRING(100),
  nome_comum: DataTypes.STRING(100),
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  local: DataTypes.STRING(255),
  comprimento: DataTypes.DECIMAL(10, 2),
  peso: DataTypes.DECIMAL(10, 2),
  foto_coleta_1: DataTypes.BLOB,
  foto_coleta_2: DataTypes.BLOB,
  foto_coleta_3: DataTypes.BLOB,
  id_barco: {
    type: DataTypes.INTEGER,
    references: {
      model: Embarcacao,
      key: 'id_barco',
    },
    onDelete: 'SET NULL',
  },
  id_user: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id_user',
    },
    onDelete: 'CASCADE',
  },
}, {
  tableName: 'coleta',
  timestamps: false,
});

Coleta.belongsTo(Embarcacao, { foreignKey: 'id_barco' });
Coleta.belongsTo(Usuario, { foreignKey: 'id_user' });

module.exports = Coleta;
