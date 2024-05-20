import { useState } from 'react';
import { Container, Content, Button } from './Task.style';

function Task({ newTask, onCompletedTasks, onDeletedTasks }) {
  function updateComplete() {
    const updatedTasks = { ...newTask, isCompleted: true };
    onCompletedTasks(updatedTasks);
  }
  return (
    <Container>
      <Content
        style={{
          textDecoration: newTask.isCompleted ? 'line-through' : 'none',
          color: newTask.isCompleted ? '#D9DCD6' : '#16425B',
        }}
      >
        {newTask.task}
      </Content>
      <Button onClick={() => updateComplete()}>Completed</Button>
      <Button
        onClick={() => {
          onDeletedTasks(newTask);
        }}
      >
        Delete
      </Button>
    </Container>
  );
}

export default Task;
