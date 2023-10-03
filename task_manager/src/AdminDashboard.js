// AdminDashboard.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

function AdminDashboard() {
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedTask, setSelectedTask] = useState(null);

    const users = [
        {
            username: 'Abhinandan',
            name: 'Abhinandan Angra',
            regNumber: 'MS20042',
            contact: '9876543210',
            appsUsed: 'Adobe Premiere, Photoshop'
        },
        {
            username: 'Nilaj',
            name: 'Nilaj Saha',
            regNumber: 'MS20046',
            contact: '9876543211',
            appsUsed: 'Final Cut, Illustrator'
        },
        {
          username: 'Pallav',
          name: 'Pallav Baraya',
          regNumber: 'MS20219',
          contact: '9876543211',
          appsUsed: 'Audacity, DaVinci'
        }
        // ... Add other users similarly
    ];

    const projects = [
        { name: 'Scientifically Speaking', tasks: ['Camera handling', 'Stenographer', 'Editing video', 'Audio editing', 'Graphic designing', 'Social media handling'] },
        { name: 'Lab tours', tasks: ['Camera handling', 'Stenographer', 'Editing video', 'Audio editing', 'Graphic designing', 'Social media handling'] },
        // ... Add other projects similarly
    ];

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

            {/* Projects and Tasks Section */}
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
                                active={selectedProject && selectedProject.name === project.name}
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
                    {/* You can map through assigned tasks data and display it here. I'm adding dummy data for the illustration. */}
                    <tr>
                        <td>Abhinandan</td>
                        <td>Scientifically Speaking</td>
                        <td>Camera handling</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                    <tr>
                        <td>Nilaj</td>
                        <td>Lab tours</td>
                        <td>Stenographer</td>
                        <td>DD/MM/YYYY</td>
                    </tr>
                </tbody>
            </Table>

            {/* User Profile Section */}
            <Row className="mt-5">
                <Col md={4}>
                    <h3>User Profiles</h3>
                    <ListGroup>
                        {users.map((user, index) => (
                            <ListGroup.Item 
                                key={index} 
                                action 
                                onClick={() => setSelectedUser(user)}
                                active={selectedUser && selectedUser.username === user.username} // Highlight if selected
                            >
                                {user.username}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                
                {/* User Details Column */}
                <Col md={8}>
                    {selectedUser && (
                        <Card>
                            <Card.Header>Profile: {selectedUser.name}</Card.Header>
                            <Card.Body>
                                <p><strong>Registration Number:</strong> {selectedUser.regNumber}</p>
                                <p><strong>Contact:</strong> {selectedUser.contact}</p>
                                <p><strong>Apps Used:</strong> {selectedUser.appsUsed}</p>
                            </Card.Body>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default AdminDashboard;
