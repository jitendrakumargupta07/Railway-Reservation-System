import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../services/api';

function Booking() {
  const { seatId } = useParams();
  const [seats, setSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const res = await api.get(`/trains/${seatId}/seats`);
        setSeats(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSeats();
  }, [seatId]);

  const handleSelect = (seat) => {
    setSelectedSeat(seat);
  };

  const handleBook = async () => {
    if (!selectedSeat) return;
    try {
      const res = await api.post(`/bookings`, { seatId: selectedSeat.id, userId: 1 }); // replace userId with actual logged-in user
      setMessage(res.data.message);
      setSeats(seats.map(s => s.id === selectedSeat.id ? { ...s, status: 'BOOKED' } : s));
      setSelectedSeat(null);
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.error || 'Booking failed');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-xl mb-4">Select a Seat</h2>
      <div className="grid grid-cols-5 gap-2">
        {seats.map(seat => (
          <div
            key={seat.id}
            onClick={() => handleSelect(seat)}
            className={`p-4 text-center border rounded cursor-pointer 
              ${seat.status === 'BOOKED' ? 'bg-gray-400 cursor-not-allowed' : selectedSeat?.id === seat.id ? 'bg-blue-500 text-white' : 'bg-white'}`}
          >
            {seat.seat_number}
          </div>
        ))}
      </div>
      <button 
        onClick={handleBook} 
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
      >
        Confirm Booking
      </button>
      {message && <p className="mt-2 text-red-600">{message}</p>}
    </div>
  );
}

export default Booking;
