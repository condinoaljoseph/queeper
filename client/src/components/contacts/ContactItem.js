import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = e => {
    e.preventDefault();
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className='card yellow lighten-3'>
      <div className='card-content brown-text darken-4'>
        <span className='card-title'>
          {name}{' '}
          <span
            style={{ float: 'right' }}
            className={'new badge' + (type === 'professional' ? '' : ' blue')}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </span>
        <ul className='list'>
          {email && (
            <li>
              <i className='material-icons'>mail</i> <span>{email}</span>
            </li>
          )}
          {phone && (
            <li>
              <i className='material-icons'>phone</i> <span>{phone}</span>
            </li>
          )}
        </ul>
      </div>

      <div className='card-action'>
        <a className='grey-text' href='#!' onClick={() => setCurrent(contact)}>
          Edit
        </a>
        <a className='grey-text' href='#!' onClick={onDelete}>
          Delete
        </a>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
