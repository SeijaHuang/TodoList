import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const Content = styled.input`
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

const Button = styled.button`
  align-items: center;
  background: #ffffff;
  border: 0 solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  color: #1a202c;
  display: inline-flex;
  font-size: 0.8rem;
  font-weight: 700;
  height: 20px;
  justify-content: center;
  overflow-wrap: break-word;
  padding: 17px 37px;
  text-decoration: none;
  width: auto;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

export { Container, Content, Button };
