import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function UserDashboard() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { name: 'Scientifically Speaking', tasks: ['Camera handling', 'Stenographer', 'Editing video', 'Audio editing', 'Graphic designing', 'Social media handling'] },
    { name: 'Lab tours', tasks: ['Camera handling', 'Stenographer', 'Editing video', 'Audio editing', 'Graphic designing', 'Social media handling'] }
  ];

  return (
    <Container fluid>
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Science Media Center - Task Manager</Navbar.Brand>
        <Nav className="me-auto"></Nav>
        <Navbar.Brand>User Dashboard</Navbar.Brand> {/* Centered Admin Dashboard */}
        <Nav className="ms-auto">
          <Navbar.Text>Developed by SMC IISER Mohali</Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
      
      <Row className="mt-3">
        {/* Projects Column */}
        <Col md={6}>
          <h3>Projects</h3>
          <ListGroup>
            {projects.map((project, index) => (
              <ListGroup.Item 
                key={index} 
                action 
                onClick={() => setSelectedProject(project)}
                active={selectedProject && selectedProject.name === project.name} // Highlight if selected
              >
                {project.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        
        {/* Tasks Column */}
        <Col md={6}>
          {selectedProject && (
            <>
              <h3>Tasks for {selectedProject.name}</h3>
              <ListGroup>
                {selectedProject.tasks.map((task, idx) => (
                  <ListGroup.Item key={idx}>
                    {task}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          )}
        </Col>
      </Row>
      
      {/* Current Assignments */}
      <h3 className="mt-3">Current Assignments</h3>
      <Table striped bordered hover variant="dark" className="mt-1">
        <thead>
          <tr>
            <th>Project</th>
            <th>Task</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {/* You can map through assigned tasks data and display it here. I'm adding dummy data for the illustration. */}
          <tr>
            <td>Scientifically Speaking</td>
            <td>Camera handling</td>
            <td>DD/MM/YYYY</td>
          </tr>
          <tr>
            <td>Lab tours</td>
            <td>Stenographer</td>
            <td>DD/MM/YYYY</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default UserDashboard;
