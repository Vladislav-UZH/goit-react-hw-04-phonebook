import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  font-size: 20px;

  align-items: baseline;
  gap: 5px;
`;
const Item = styled.li`
  min-width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
const Name = styled.span`
  font-style: italic;
  /* color: #e2580a; */
`;
const Number = styled.span`
  font-weight: 500;
`;

export { Item, Name, Number, Container };
