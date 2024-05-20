import { useState } from 'react';
import { Container, Content, Button } from './AddNew.style';

function AddNew({ onNewTasks }) {
  const [taskList, setTaskList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  function addNewTask() {
    if (inputValue.trim() !== '') {
      let currentTime = new Date().getTime();
      let newTask = { id: currentTime, task: inputValue, isCompleted: false };
      let newTaskList = [...taskList, newTask];
      setTaskList(newTaskList);
      onNewTasks(newTask);
      setInputValue('');
    }
  }

  return (
    <Container>
      <Content
        placeholder="Add New Todo"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      ></Content>
      <Button
        onClick={() => {
          addNewTask();
        }}
      >
        Add
      </Button>
    </Container>
  );
}

export default AddNew;
