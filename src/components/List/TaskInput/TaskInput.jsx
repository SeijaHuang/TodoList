import Container from './TaskInput.style';

function TaskInput({ newTasks, onNewTasks }) {
  return (
    <Container
      placeholder="Add New Todo"
      onChange={(event) => {
        onNewTasks(event.target.value);
      }}
    ></Container>
  );
}

export default TaskInput;
