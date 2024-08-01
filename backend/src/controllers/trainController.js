const Train = require('../models/train');
const Seat = require('../models/seat');

exports.searchTrains = async (req, res) => {
  const { from, to } = req.query;
  try {
    const trains = await Train.findAll({ where: { from, to } });
    res.json(trains);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSeats = async (req, res) => {
  const { trainId } = req.params;
  try {
    const seats = await Seat.findAll({ where: { trainId } });
    res.json(seats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
