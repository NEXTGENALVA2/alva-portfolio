import React from 'react';
import './AdminDashboard.css';
import AdminLogin from './AdminLogin';
import ProjectManager from './ProjectManager';
import { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('alva_admin_auth') === 'yes') {
      setAuth(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('alva_admin_auth');
    setAuth(false);
  };

  if (!auth) {
    return <AdminLogin onLogin={() => setAuth(true)} />;
  }

  return (
    <div className="admin-dashboard" style={{maxWidth: '95vw', width: '100%', margin: '0 auto', padding: '16px'}}>
      <div style={{display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h1 style={{margin: 0, fontSize: '2rem'}}>Admin Dashboard</h1>
          <button 
            onClick={handleLogout}
            style={{
              background: '#ff6b6b',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 18px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>
      </div>
      <ProjectManager />
    </div>
  );
};

export default AdminDashboard;
