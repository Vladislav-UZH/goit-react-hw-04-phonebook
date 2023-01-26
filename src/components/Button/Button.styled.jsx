import styled from '@emotion/styled';
const animationFunc = `cubic-bezier(.17,.67,.28,.85) 300ms`;
const defaultStyles = `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px; 

  border: none;
  border-radius: 10px;

  font-weight: 600;

  background-color: #e2580a;
  color: inherit;

  transition: background-color ${animationFunc}, outline ${animationFunc},
    color ${animationFunc};

  :hover,
  :focus {
    outline: 1px solid #e2580a;
    background-color: transparent;
    color: #e2580a;
  }
`;

const AddContactsBtn = styled.button`
  ${defaultStyles}
  /* paddings */
  padding: 12px;
  /* size */
  width: 160px;
  height: 60px;
  /* fonts */
  font-size: 20px;
`;

const DeleteButton = styled.button`
  ${defaultStyles}
  margin-left: auto;
  padding: 5px 20px;
`;
const CreateContactBtn = styled.button`
  ${defaultStyles}
  font-size: 22px;
  width: 150px;
  height: 50px;
`;

// const Icon = styled.svg``;
export { AddContactsBtn, DeleteButton, CreateContactBtn };
