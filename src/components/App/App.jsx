import { useState, useEffect } from 'react';

// Components
import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter';
import Notification from 'components/Notification';
import { BsPencilFill } from 'react-icons/bs';
// nanoid
import { nanoid } from 'nanoid';
// styles
import { AddContactsBtn } from '../Button/Button.styled';

//___APP___

const setActualContacts = (key, value) => {
  try {
    const serializedstate = JSON.stringify(value);
    localStorage.setItem(key, serializedstate);
  } catch (err) {
    console.error('Set state error:', err);
  }
};

const getActualContacts = key => {
  try {
    const serializedstate = localStorage.getItem(key);

    return !serializedstate
      ? () => {
          console.log('localStorage is empty');
          return [];
        }
      : JSON.parse(serializedstate);
  } catch (err) {
    console.error('Get state error:', err);
  }
};

const getInitContacts = (key = 'contacts') => {
  if (getActualContacts(key)) {
    return getActualContacts(key);
  } else {
    console.log('no contacts there');
  }
};
export const App = () => {
  // [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '098-396-56-58' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '050-966-23-50' },
  //   { id: 'id-3', name: 'Eden Clements', number: '099-663-10-22' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '099-423-66-19' },
  // ]
  const [contacts, setContacts] = useState(getInitContacts());
  const [filter, setFilter] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setActualContacts('contacts', contacts);
  }, [contacts]);

  const notification = name => {
    alert(`You have already had ${name} as contact!`);
  };

  const changeFilter = e => {
    const value = e.currentTarget.value;
    setFilter(value);
  };
  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  const checkContactsForComplinance = ({ name: newName }) =>
    contacts.find(({ name }) => name === newName);

  const toggleContactBar = () => {
    setIsOpen(!isOpen);
  };
  const createContact = ({ name, number }) => {
    const id = nanoid();
    if (checkContactsForComplinance({ name, number })) {
      return notification(name);
    }

    toggleContactBar();
    setContacts([{ name, number, id }, ...contacts]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  // render
  return (
    <div
      style={{
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#DBD7D7',
      }}
    >
      <div
        style={{
          minWidth: 680,
          borderRadius: 10,
          padding: 30,
          backgroundColor: '#32343B',
        }}
      >
        <div></div>
        <h1>Phonebook</h1>{' '}
        {isOpen || !!contacts.length ? (
          <ContactsForm createContact={createContact} />
        ) : (
          <AddContactsBtn onClick={toggleContactBar}>
            Add your contacts
            <BsPencilFill size={40} />
          </AddContactsBtn>
        )}
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} onChange={changeFilter} />
        </div>
        {!getFiltredContacts().length ? (
          <Notification message="No contacts with the entered name!" />
        ) : (
          <ContactsList
            deleteContact={deleteContact}
            contacts={getFiltredContacts()}
          />
        )}
      </div>
    </div>
  );
};
