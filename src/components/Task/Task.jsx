import CompletedButton from './CompletedButton/CompletedButton';
import Content from './Content/Content';
import Container from './Task.style';
function Task({ showTasks }) {
  return (
    <Container>
      <Content showTasks={showTasks} />
      <CompletedButton />
    </Container>
  );
}

export default Task;
