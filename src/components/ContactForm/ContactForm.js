import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { selectContacts } from 'redux/selector';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (isExist) {
      alert(`${values.name} is already in contacts.`);
    } else {
      dispatch(addContact({ ...values }));
    }
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label className={css.label}>
            Name
            <Field
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              placeholder="Jane Snow"
            />
          </label>
          <label className={css.label}>
            Number
            <Field
              className={css.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              placeholder="XXX-XX-XX-XXX"
            />
          </label>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};
