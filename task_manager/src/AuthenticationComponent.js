// AuthenticationComponent.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AuthenticationComponent({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loginRole, setLoginRole] = useState(''); // 'admin' or 'user'

  const handleLogin = () => {
    if (loginRole === 'admin' && username === 'admin' && password === 'adminpassword') {
      onLogin('admin');
    } else if (loginRole === 'user' && username && password) {
      onLogin('user');
    } else {
      // Handle error (e.g., display an error message)
      console.error('Invalid credentials');
    }
  };

  const handleLoginAs = (role) => {
    setLoginRole(role);
    setShowLoginForm(true);
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <h1>Welcome to SMC Task Manager</h1>
      {!showLoginForm ? (
        <>
          <Button variant="dark" className="m-2" onClick={() => handleLoginAs('admin')}>Login as Admin</Button>
          <Button variant="dark" className="m-2" onClick={() => handleLoginAs('user')}>Login as Member</Button>
        </>
      ) : (
        <Form className="w-25">
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type={isPasswordVisible ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Form.Text className="text-muted cursor-pointer" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
              {isPasswordVisible ? 'Hide Password' : 'Show Password'}
            </Form.Text>
          </Form.Group>

          <Button variant="dark" className="m-2" onClick={handleLogin}>Login</Button>
        </Form>
      )}
    </Container>
  );
}

export default AuthenticationComponent;
