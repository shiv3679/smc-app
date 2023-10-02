// AuthenticationComponent.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function AuthenticationComponent({ onLogin }) {
  const handleLogin = (role) => {
    onLogin(role);
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <h1>Welcome to SMC Task Manager</h1>
      <Button variant="dark" className="m-2" onClick={() => handleLogin('admin')}>Login as Admin</Button>
      <Button variant="dark" className="m-2" onClick={() => handleLogin('user')}>Login as User</Button>
    </Container>
  );
}

export default AuthenticationComponent;
