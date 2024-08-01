import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

function SearchResults() {
  const [trains, setTrains] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const from = query.get('from');
  const to = query.get('to');

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const res = await api.get(`/trains/search?from=${from}&to=${to}`);
        setTrains(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTrains();
  }, [from, to]);

  const handleBook = (trainId) => {
    navigate(`/booking/${trainId}`);
  };

  return (
    <div className="p-8">
      <h2 className="text-xl mb-4">Trains from {from} to {to}</h2>
      {trains.length === 0 && <p>No trains found.</p>}
      <ul>
        {trains.map(train => (
          <li key={train.id} className="border p-4 mb-2 flex justify-between items-center">
            <div>
              <p><strong>{train.name}</strong> ({train.number})</p>
              <p>Departure: {new Date(train.depart_time).toLocaleString()}</p>
              <p>Arrival: {new Date(train.arrive_time).toLocaleString()}</p>
            </div>
            <button 
              onClick={() => handleBook(train.id)} 
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Book
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
