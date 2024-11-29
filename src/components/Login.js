import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CenteredLayout from './CenteredLayout';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setUser({ email });
      navigate('/posts');
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <CenteredLayout>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
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
      <button onClick={handleLogin} style={{ width: '100%', marginBottom: '10px' }}>
        Login
      </button>
      <p style={{ textAlign: 'center' }}>
        Don't have an account?{' '}
        <button
          onClick={() => navigate('/register')}
          style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
        >
          Register
        </button>
      </p>
    </CenteredLayout>
  );
};

export default Login;
