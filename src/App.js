import { useState } from 'react';
import Task from './components/Task/Task';
import AddNew from './components/AddNew/AddNew';
import { Container, GlobalStyle, ListContainer, Title } from './App.style';

function App() {
  const [Tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  function updateTasks(Tasks, completedTasks) {
    setTasks(
      Tasks.map((task) => {
        return task.task === completedTasks.task ? completedTasks : task;
      })
    );
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
          {Tasks.map((newTask, index) => {
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
          {console.log('task', Tasks)} {console.log('complete', completedTasks)}
        </ListContainer>
      </Container>
    </>
  );
}

export default App;
