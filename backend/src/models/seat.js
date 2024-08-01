const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Train = require('./train');

const Seat = sequelize.define('seat', {
  seat_number: { type: DataTypes.STRING, allowNull: false },
  class: { type: DataTypes.STRING, allowNull: false, defaultValue: 'GENERAL' },
  status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'AVAILABLE' }
});

Train.hasMany(Seat);
Seat.belongsTo(Train);

module.exports = Seat;
