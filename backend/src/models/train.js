const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Train = sequelize.define('train', {
  name: { type: DataTypes.STRING, allowNull: false },
  number: { type: DataTypes.STRING, allowNull: false, unique: true },
  from: { type: DataTypes.STRING, allowNull: false },
  to: { type: DataTypes.STRING, allowNull: false },
  depart_time: { type: DataTypes.DATE, allowNull: false },
  arrive_time: { type: DataTypes.DATE, allowNull: false },
  total_seats: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Train;
