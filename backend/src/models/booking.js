const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');
const Seat = require('./seat');

const Booking = sequelize.define('booking', {
  status: { type: DataTypes.STRING, defaultValue: 'CONFIRMED' }
});

User.hasMany(Booking);
Booking.belongsTo(User);

Seat.hasOne(Booking);
Booking.belongsTo(Seat);

module.exports = Booking;
