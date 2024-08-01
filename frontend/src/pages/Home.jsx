import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!from || !to) return alert('Please enter both From and To stations');
    navigate(`/search?from=${from}&to=${to}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Railway Reservation System</h1>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="border p-3 w-full mb-4 rounded"
        />
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border p-3 w-full mb-4 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-3 w-full rounded hover:bg-blue-600"
        >
          Search Trains
        </button>
      </div>
    </div>
  );
}

export default Home;
