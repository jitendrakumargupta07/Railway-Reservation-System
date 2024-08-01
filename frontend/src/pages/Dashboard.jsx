import React, { useEffect, useState } from 'react';
import { api } from '../services/api';

function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await api.get('/bookings'); // Create backend route for fetching user bookings
        setBookings(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-xl mb-4">My Bookings</h2>
      {bookings.length === 0 && <p>No bookings yet.</p>}
      <ul>
        {bookings.map(b => (
          <li key={b.id} className="border p-2 mb-2">
            Seat: {b.seat.seat_number} | Status: {b.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
