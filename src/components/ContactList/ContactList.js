import { deleteContact } from 'redux/contactSlice';
import { selectContacts, selectValueFilter } from 'redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const value = useSelector(selectValueFilter);
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
