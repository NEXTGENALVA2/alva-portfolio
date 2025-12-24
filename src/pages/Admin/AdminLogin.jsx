
import React, { useState } from 'react';

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'admin1290';

const AdminLogin = ({ onLogin }) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.username === ADMIN_USER && form.password === ADMIN_PASS) {
      localStorage.setItem('alva_admin_auth', 'yes');
      onLogin();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div className="admin-dashboard" style={{maxWidth: 350, width: '100%'}}>
        <h1>Admin Login</h1>
        <form className="admin-form" onSubmit={handleSubmit} style={{flexDirection: 'column', gap: 16}}>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            required
            style={{fontSize: '1.1rem'}}
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            style={{fontSize: '1.1rem'}}
          />
          <button type="submit" style={{fontSize: '1.1rem'}}>Login</button>
        </form>
        {error && <div style={{color: '#ff6b6b', marginTop: 10}}>{error}</div>}
      </div>
    </div>
  );
};

export default AdminLogin;
