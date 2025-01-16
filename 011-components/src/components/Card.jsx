
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  margin: 0 0 8px 0;
`;

const CardContent = styled.p`
  margin: 0;
`;

const Card = ({ title, content }) => {
  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
};

export default Card;