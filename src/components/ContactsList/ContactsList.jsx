import ContactsItem from 'components/ContactsItem';
import { List } from './ContactsList.styled';

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          deleteContact={() => deleteContact(id)}
        />
      ))}
    </List>
  );
};

export default ContactsList;
