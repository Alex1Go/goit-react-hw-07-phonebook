import css from './ContactList.module.css';
import { selectVisibleContacts } from 'redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
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
