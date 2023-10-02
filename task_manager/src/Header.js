import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Science Media Center - Task Manager</Navbar.Brand>
        <Navbar.Text>
          Developed by SMC IISER Mohali
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Header;
