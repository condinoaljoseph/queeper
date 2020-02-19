import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='row'>
      <div className='col s6'>
        <ContactForm />
      </div>
      <div className='col s6'>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
