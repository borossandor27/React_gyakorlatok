import styled from 'styled-components';

const ButtonPszeudo = styled.button`
  background-color: ${(props) => (props.primary ? 'green' : 'gray')};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ? 'red' : 'black')};
  }
`;

export default ButtonPszeudo;