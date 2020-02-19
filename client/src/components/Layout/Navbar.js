import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li>
        <Link to='/'>{user && user.name}</Link>
      </li>
      <li>
        <a href='#!' onClick={onLogout}>
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guessLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <nav className='brown darken-2'>
      <div className='nav-wrapper'>
        <div className='container'>
          <Link to='/' className='brand-logo'>
            <i className='material-icons'>{icon}</i>
            <span>{title}</span>
          </Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            {isAuthenticated ? authLinks : guessLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'qeeper',
  icon: 'fingerprint'
};

export default Navbar;
