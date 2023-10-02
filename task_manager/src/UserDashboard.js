// UserDashboard.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

function UserDashboard() {
  const userProjects = [
    {
      name: 'Scientifically Speaking podcasts',
      tasks: ['Camera handling', 'Stenographer', 'Editing video', 'Audio editing', 'Graphic designing', 'Social media handling']
    },
    // ... other projects if needed
  ];
  
  return (
    <Container>
      <h2>User Dashboard</h2>
      {userProjects.map((project, index) => (
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

export default UserDashboard;
