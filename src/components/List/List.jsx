import { useState } from 'react';
import TaskInput from './TaskInput/TaskInput';
import AddButton from './AddButton/AddButton';
import Container from './List.style';

function List({ newTasks, onNewTasks }) {
  return (
    <Container>
      <TaskInput task={newTasks} onNewTasks={onNewTasks}></TaskInput>
      <AddButton />
    </Container>
  );
}

export default List;
