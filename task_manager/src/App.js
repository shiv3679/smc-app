import React, { useState } from 'react';
import './App.css';
import Header from './Header'; // Keep the header
import AuthenticationComponent from './AuthenticationComponent';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import Container from 'react-bootstrap/Container';

function App() {
  const [userRole, setUserRole] = useState(null); // 'admin' or 'user'

  return (
    <div className="App">
      {!userRole && <Header />} {/* Render Header only if there is no userRole */}
      <Container fluid>
        {!userRole ? (
          <AuthenticationComponent onLogin={setUserRole} />
        ) : userRole === 'admin' ? (
          <AdminDashboard />
        ) : (
          <UserDashboard />
        )}
      </Container>
    </div>
  );
}

export default App;
