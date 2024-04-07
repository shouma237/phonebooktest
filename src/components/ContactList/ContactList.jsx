import { ContactListItem } from '../ContactListItem/ContactListItem';
import { Loader } from 'components/Loader/Loader';
import { fetchContacts } from '../../redux/contacts/contactsOperation';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/contactsSelector';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import css from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.contactList}>
      {isLoading && !error && <Loader />}

      {!isLoading && !error && filteredContacts.length === 0 && (
        <p className={css.contactsText}>
          The Phonebook is empty. Please add a contact.
        </p>
      )}

      {!isLoading &&
        !error &&
        filteredContacts.length > 0 &&
        filteredContacts.map(filteredContact => (
          <ContactListItem
            key={filteredContact.id}
            filteredContact={filteredContact}
          />
        ))}
    </ul>
  );
};
