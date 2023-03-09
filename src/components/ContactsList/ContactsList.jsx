import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlise';

import { Item } from './ContactsList.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const normolizedFilter = useSelector(getFilter).toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normolizedFilter)
  );

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        const handeleDelete = () => dispatch(deleteContact(id));

        return (
          <Item key={id}>
            {name}: {number}
            <button type="button" onClick={handeleDelete}>
              delete
            </button>
          </Item>
        );
      })}
    </ul>
  );
};
