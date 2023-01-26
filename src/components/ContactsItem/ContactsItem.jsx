import { Item, Name, Number, Container } from './ContactsItem.styled';
import PropTypes from 'prop-types';
import { DeleteButton } from 'components/Button/Button.styled';

const ContactsItem = ({ name, number, deleteContact }) => {
  return (
    <Item>
      <Container>
        <Name>{name}: </Name>
        <Number> {number}</Number>
      </Container>

      <DeleteButton type="button" onClick={deleteContact}>
        Delete
      </DeleteButton>
    </Item>
  );
};

ContactsItem.propTypes = {
  deleteContact: PropTypes.func.isRequired,
};
export default ContactsItem;
