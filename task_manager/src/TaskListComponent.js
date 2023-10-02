import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function TaskListComponent() {
  const tasks = ['camera handling', 'stenographer', 'editing video', 'audio editing', 'graphic designing', 'social media handling']; // Placeholder tasks

  return (
    <div className="m-3">
      <h2>Tasks</h2>
      <ListGroup>
        {tasks.map((task) => (
          <ListGroup.Item key={task}>{task}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default TaskListComponent;
