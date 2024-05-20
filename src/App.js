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
        return task.id === completedTasks.id ? completedTasks : task;
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
          {Tasks.map((task) => {
            if (!showCompleted && task.isCompleted) {
              return null;
            }
            return (
              <Task
                key={task.id}
                newTask={task}
                setCompletedTasks={(completedTask) => {
                  setCompletedTasks(completedTask);
                  updateTasks(Tasks, completedTask);
                }}
              ></Task>
            );
          })}
        </ListContainer>
        {console.log(Tasks, completedTasks)}
      </Container>
    </>
  );
}

export default App;
