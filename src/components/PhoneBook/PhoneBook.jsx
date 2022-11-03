import React, { useMemo } from 'react';
import Filter from 'components/Filter';
import ContactForm from 'components/ContactForm';
import Box from '../Box';
import ContactsTable from 'components/ContactsTable';
import { useTheme } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
//
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

// const INITIAL_STATE = {
//   contacts: [
//     { id: '928fbg1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: '928fbg2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: '928fbg3', name: 'Eden Clements', number: '645-17-79' },
//     { id: '928fbg4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

// const STORAGE_KEY = 'contacts';

export default function PhoneBook() {
  // const [contacts, setContacts] = useLocalStorage(
  //   STORAGE_KEY,
  //   INITIAL_STATE.contacts
  // );
  //const [filter, setFilter] = useState('');

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const theme = useTheme();

  const filteredContacts = useMemo(() => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <>
      <Box as={'h1'} mb={'10px'} color={theme.palette.text.primary}>
        Phonebook
      </Box>
      <ContactForm />
      <Box as={'h2'} mb={'0px'} color={theme.palette.text.primary}>
        Contacts
      </Box>
      <Filter />
      <ContactsTable contacts={filteredContacts} />
      <ToastContainer position="top-right" autoClose={2000} theme="colored" />
    </>
  );
}