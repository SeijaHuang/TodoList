import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  @media (max-width: 1800px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Button = styled.button`
  align-items: center;
  background: #FFFFFF;
  border: 0 solid #E2E8F0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  color: #1A202C;
  display: inline-flex;
  font-size: 0.8rem;
  font-weight: 700;
  height: 20px;
  justify-content: center;
  overflow-wrap: break-word;
  padding: 17px;
  text-decoration: none;
  width: auto;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  @media (max-width:1800px){
    margin:1rem 1rem 0;
  }
}`;

const Content = styled.div`
  background: #f8f9fa;
  min-width: 75%;
  padding: 8px;
  border-radius: 8px;
  font-weight: 500;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (max-width: 1800px) {
    width: 100%;
  }
`;

export { Container, Button, Content };
