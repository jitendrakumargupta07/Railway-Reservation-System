const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const trainRoutes = require('./routes/trains');
const bookingRoutes = require('./routes/bookings');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/trains', trainRoutes);
app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
  res.send('Railway Reservation Backend is running!');
});

module.exports = app;
