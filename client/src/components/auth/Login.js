import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password
      });
    }
  };

  return (
    <center>
      <div className='z-depth-2 white row mycard'>
        <h6 className='brown-text'>Please login into your account</h6>
        <form onSubmit={onSubmit}>
          <div className='row'>
            <div className='input-field col-s12'>
              <input
                type='email'
                name='email'
                value={email}
                onChange={onChange}
                required
              />
              <label htmlFor='email'>Email</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col-s12'>
              <input
                type='password'
                name='password'
                value={password}
                onChange={onChange}
                required
              />
              <label htmlFor='password'>Password</label>
            </div>
            <label style={{ float: 'right' }}>
              <a className='brown-text darken-4' href='#!'>
                <b>Forgot Password?</b>
              </a>
            </label>
          </div>
          <input
            type='submit'
            value='Login'
            className='col s12 btn btn-large waves-effect brown darken-2 myBtn'
          />
        </form>
      </div>
      <Link to='/register' className='brown-text darken-4'>
        Create an account
      </Link>
    </center>
  );
};

export default Login;
