import React, { useState } from 'react';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Login</h2>
      <input 
        placeholder="Email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        className="border p-2 mb-2 w-full"
      />
      <input 
        placeholder="Password" 
        type="password" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        className="border p-2 mb-2 w-full"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button>
      {error && <p className="mt-2 text-red-600">{error}</p>}
    </div>
  );
}

export default Login;
