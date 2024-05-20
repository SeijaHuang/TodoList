import { useState } from 'react';
import { Container, Content, Button } from './Task.style';

function Task({ newTask, setCompletedTasks }) {
  function updateComplete() {
    const updatedTasks = { ...newTask, isCompleted: true };
    setCompletedTasks(updatedTasks);
  }
  return (
    <Container>
      <Content
        style={{
          textDecoration: newTask.isCompleted ? 'line-through' : 'none',
          color: newTask.isCompleted ? 'grey' : 'black',
        }}
      >
        {newTask.task}
      </Content>
      <Button onClick={() => updateComplete()}>Completed</Button>
      <Button>Delete</Button>
    </Container>
  );
}

export default Task;
