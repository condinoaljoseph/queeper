import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({ name: '', email: '', phone: '', type: 'personal' });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      {/* <h5>{current ? 'Update Contact' : 'Add Contact'}</h5> */}
      <div className='input-field'>
        <input
          type='text'
          placeholder=''
          name='name'
          value={name}
          onChange={onChange}
        />
        <label htmlFor='name'>Name</label>
      </div>
      <div className='input-field'>
        <input
          className='input-field'
          type='email'
          placeholder=''
          name='email'
          value={email}
          onChange={onChange}
        />
        <label htmlFor='email'>Email</label>
      </div>
      <div className='input-field'>
        <input
          className='input-field'
          type='text'
          placeholder=''
          name='phone'
          value={phone}
          onChange={onChange}
        />
        <label htmlFor='phone'>Phone</label>
      </div>
      <p>
        <label>
          <input
            className='with-gap'
            type='radio'
            name='type'
            value='personal'
            checked={type === 'personal'}
            onChange={onChange}
          />{' '}
          <span>Personal</span>
        </label>
      </p>
      <p>
        <label>
          <input
            className='with-gap'
            type='radio'
            name='type'
            value='professional'
            checked={type === 'professional'}
            onChange={onChange}
          />{' '}
          <span>Professional</span>
        </label>
      </p>
      <div className='row'>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='col s12 btn btn-large waves-effect brown darken-2 myBtn'
        />
        {current && (
          <button
            className='col s12 btn btn-large waves-effect grey lighten-1 myBtn'
            onClick={clearAll}
            style={{ marginTop: '1rem' }}
          >
            Clear
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
