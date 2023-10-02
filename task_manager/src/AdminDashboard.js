// AdminDashboard.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

function AdminDashboard() {
    const projects = [
        { name: 'Scientifically Speaking', tasks: ['camera handling', 'stenographer', 'editing video', 'audio editing', 'graphic designing', 'social media handling'] },
        { name: 'Lab tours', tasks: ['camera handling', 'stenographer', 'editing video', 'audio editing', 'graphic designing', 'social media handling'] },
        { name: 'Intern speaks', tasks: ['camera handling', 'stenographer', 'editing video', 'audio editing', 'graphic designing', 'social media handling'] },
        { name: 'Campus shoots', tasks: ['camera handling', 'stenographer', 'editing video', 'audio editing', 'graphic designing', 'social media handling'] },
        { name: 'Lecture shoots', tasks: ['camera handling', 'stenographer', 'editing video', 'audio editing', 'graphic designing', 'social media handling'] },
      ];
  
  return (
    <Container>
      <h2>Admin Dashboard</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <ListGroup>
            {project.tasks.map((task, idx) => (
              <ListGroup.Item key={idx}>{task}</ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      ))}
    </Container>
  );
}

export default AdminDashboard;
