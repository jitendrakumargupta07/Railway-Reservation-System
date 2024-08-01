import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/booking/:seatId" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* 404 fallback */}
        <Route path="*" element={<h2 className="text-center mt-10 text-red-600">Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
