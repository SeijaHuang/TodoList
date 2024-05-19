import Container from './Content.style';

function Content(props) {
  return (
    <>
      <Container>{props.showTasks}</Container>
    </>
  );
}

export default Content;
