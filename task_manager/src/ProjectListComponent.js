import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function ProjectListComponent() {
  const projects = [
    { name: 'Scientifically Speaking', tasks: ['camera handling', 'stenographer', 'editing video', 'audio editing', 'graphic designing', 'social media handling'] },
    { name: 'Lab tours', tasks: ['camera handling', 'stenographer', 'editing video', 'audio editing', 'graphic designing', 'social media handling'] },
    { name: 'Intern speaks', tasks: ['camera handling', 'stenographer', 'editing video', 'audio editing', 'graphic designing', 'social media handling'] },
    { name: 'Campus shoots', tasks: ['camera handling', 'stenographer', 'editing video', 'audio editing', 'graphic designing', 'social media handling'] },
    { name: 'Lecture shoots', tasks: ['camera handling', 'stenographer', 'editing video', 'audio editing', 'graphic designing', 'social media handling'] },
  ];

  return (
    <div className="m-3">
      <h2>Projects</h2>
      <ListGroup>
        {projects.map((project) => (
          <ListGroup.Item key={project.name}>{project.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default ProjectListComponent;
