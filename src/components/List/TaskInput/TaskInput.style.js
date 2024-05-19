import styled from 'styled-components';

const Container = styled.input`
  background: #f8f9fa;
  min-width: 75%;
  padding: 8px;
  border: none;
  outline: none;
  border-radius: 8px;
  font-weight: 500;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  &::placeholder {
    color: #3a7ca5;
    font-size: 1rem;
  }
`;

export default Container;