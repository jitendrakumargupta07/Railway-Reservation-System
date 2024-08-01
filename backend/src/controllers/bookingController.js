const Booking = require('../models/booking');
const Seat = require('../models/seat');

exports.bookSeat = async (req, res) => {
  const { seatId, userId } = req.body;
  try {
    const seat = await Seat.findByPk(seatId);
    if (!seat) return res.status(404).json({ error: 'Seat not found' });
    if (seat.status !== 'AVAILABLE') return res.status(400).json({ error: 'Seat not available' });

    const booking = await Booking.create({ seatId, userId, status: 'CONFIRMED' });
    seat.status = 'BOOKED';
    await seat.save();

    res.json({ message: 'Seat booked', booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
