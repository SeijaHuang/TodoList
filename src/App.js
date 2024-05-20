import { useState } from 'react';
import Task from './components/Task/Task';
import AddNew from './components/AddNew/AddNew';
import {
  Container,
  GlobalStyle,
  ListContainer,
  Title,
  Button,
} from './App.style';

function App() {
  const [Tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);
  function updateTasks(Tasks, completedTasks) {
    setTasks(
      Tasks.map((task) => {
        return task.task === completedTasks.task ? completedTasks : task;
      })
    );
  }

  function toggleShowCompleted() {
    setShowCompleted(!showCompleted);
  }
  return (
    <>
      <GlobalStyle />
      <Container>
        <ListContainer>
          <Title>Todo List</Title>
          <AddNew
            onNewTasks={(taskList) => {
              const addNew = [...Tasks, taskList];
              setTasks(addNew);
            }}
          />
          <Button onClick={toggleShowCompleted}>
            {showCompleted ? 'Hide Completed' : 'Show Completed'}
          </Button>
          {Tasks.map((newTask, index) => {
            if (!showCompleted && newTask.isCompleted) {
              return null;
            }
            return (
              <Task
                key={index}
                newTask={newTask}
                setCompletedTasks={(completedTask) => {
                  setCompletedTasks(completedTask);
                  updateTasks(Tasks, completedTask);
                }}
              ></Task>
            );
          })}
        </ListContainer>
      </Container>
    </>
  );
}

export default App;
