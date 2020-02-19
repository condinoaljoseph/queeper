import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  return (
    <center>
      <div className='z-depth-1 white row mycard'>
        <h6 className='brown-text lighten-2'>Please register to use the app</h6>
        <form onSubmit={onSubmit}>
          <div className='row'>
            <div className='input-field col-s12'>
              <input
                type='text'
                name='name'
                value={name}
                onChange={onChange}
                required
              />
              <label htmlFor='name'>Name</label>
            </div>
          </div>
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
                minLength='6'
              />
              <label htmlFor='password'>Password</label>
            </div>
          </div>
          <div className='row'>
            <div className='input-field col-s12'>
              <input
                type='password'
                name='password2'
                value={password2}
                onChange={onChange}
                required
                minLength='6'
              />
              <label htmlFor='password2'>Confirm Password</label>
            </div>
          </div>
          <input
            type='submit'
            value='Register'
            className='col s12 btn btn-large waves-effect brown darken-2 myBtn'
          />
        </form>
      </div>
    </center>
  );
};

export default Register;
