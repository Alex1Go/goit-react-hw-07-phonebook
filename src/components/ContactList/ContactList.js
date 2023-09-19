import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/contactSlice';
import { getContacts, getValueFilter } from 'redux/selector';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const value = useSelector(getValueFilter);
  const dispatch = useDispatch();

  const realItemContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(value.toLowerCase().trim())
  );
  return (
    <ul className={css.list}>
      {realItemContacts.map(({ id, name, number }) => (
        <li className={css.itrm} key={id}>
          <p className={css.name}>
            {name}: {number}
          </p>
          <button
            className={css.button}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
