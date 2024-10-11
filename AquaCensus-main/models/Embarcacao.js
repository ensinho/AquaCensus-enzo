// Definindo o modelo Sequelize de Embarcação que mapeia a tabela correspondente no banco de dados
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Laboratorio = require('./Laboratorio');

const Embarcacao = sequelize.define('embarcacao', {
  id_barco: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo: DataTypes.STRING(50),
  id_lab: {
    type: DataTypes.INTEGER,
    references: {
      model: Laboratorio,
      key: 'id_lab',
    },
    onDelete: 'CASCADE',
  },
}, {
  tableName: 'embarcacao',
  timestamps: false,
});

Embarcacao.belongsTo(Laboratorio, { foreignKey: 'id_lab' });

module.exports = Embarcacao;
