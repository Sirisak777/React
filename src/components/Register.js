import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CenteredLayout from './CenteredLayout';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (email && password) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = users.find((user) => user.email === email);

      if (userExists) {
        alert('This email is already registered!');
      } else {
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful!');
        navigate('/login');
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <CenteredLayout>
      <h2 style={{ textAlign: 'center' }}>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', margin: '10px 0', width: '100%' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: 'block', margin: '10px 0', width: '100%' }}
      />
      <button onClick={handleRegister} style={{ width: '100%' }}>
        Register
      </button>
    </CenteredLayout>
  );
};

export default Register;
