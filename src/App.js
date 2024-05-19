import { useState } from 'react';
import Task from './components/Task/Task';
import List from './components/List/List';
import { Container, GlobalStyle, ListContainer, Title } from './App.style';

function App() {
  const [Tasks, setTasks] = useState();
  return (
    <>
      <GlobalStyle />
      <Container>
        <ListContainer>
          <Title>Todo List</Title>
          <List
            newTasks={Tasks}
            onNewTasks={(newTasks) => setTasks(newTasks)}
          />
          <Task showTasks={Tasks} />
          {console.log(typeof Tasks)}
        </ListContainer>
      </Container>
    </>
  );
}

export default App;
