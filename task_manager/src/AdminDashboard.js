// AdminDashboard.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function AdminDashboard() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  const projects = [
    { name: 'Scientifically Speaking', tasks: ['Camera handling', 'Stenographer', 'Editing video', 'Audio editing', 'Graphic designing', 'Social media handling'] },
    { name: 'Lab tours', tasks: ['Camera handling', 'Stenographer', 'Editing video', 'Audio editing', 'Graphic designing', 'Social media handling'] },
    { name: 'Intern speaks', tasks: ['Camera handling', 'Stenographer', 'Editing video', 'Audio editing', 'Graphic designing', 'Social media handling'] },
    { name: 'Campus shoots', tasks: ['Camera handling', 'Stenographer', 'Editing video', 'Audio editing', 'Graphic designing', 'Social media handling'] },
    { name: 'Lecture shoots', tasks: ['Camera handling', 'Stenographer', 'Editing video', 'Audio editing', 'Graphic designing', 'Social media handling'] },
  ];

  const users = ['User1', 'User2', 'User3'];

  return (
    <Container fluid>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">Science Media Center - Task Manager</Navbar.Brand>
          <Nav className="me-auto"></Nav>
          <Navbar.Brand>Admin Dashboard</Navbar.Brand> {/* Centered Admin Dashboard */}
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
          <Button variant="dark" className="m-2">Create New Project</Button>
        </Col>
        
        {/* Tasks Column */}
        <Col md={6}>
          {selectedProject && (
            <>
              <h3>Tasks for {selectedProject.name}</h3>
              <ListGroup>
                {selectedProject.tasks.map((task, idx) => (
                  <ListGroup.Item key={idx} action onClick={() => setSelectedTask(task)}>
                    {task}
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <Button variant="dark" className="m-2">Create New Task</Button>
            </>
          )}
        </Col>
      </Row>
      
      {/* Assign Task */}
      {selectedTask && (
        <Form className="mt-3">
          <Form.Group controlId="assignTask">
            <Form.Label>Assign {selectedTask} to:</Form.Label>
            <Form.Control as="select">
              {users.map((user, idx) => (
                <option key={idx}>{user}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Button variant="dark" type="submit" className="m-2">Assign Task</Button>
        </Form>
      )}

      {/* Current Assignments */}
      <h3 className="mt-3">Current Assignments</h3>
      <Table striped bordered hover variant="dark" className="mt-1">
        <thead>
          <tr>
            <th>User</th>
            <th>Project</th>
            <th>Task</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through assigned tasks data and display it here */}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminDashboard;
