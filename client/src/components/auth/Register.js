import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import setAlert from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
      // const newUser = {
      //   name,
      //   email,
      //   password,
      // };

      // try {
      //   const config = {
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //   };

      //   const body = JSON.stringify(newUser);

      //   const res = await axios.post('/api/users', body, config);
      //   console.log(res.data);
      // } catch (err) {
      //   console.error(err.response.data);
      // }
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  const TITLE = 'Register / Coders';

  return (
    <Fragment>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className='form-container'>
        <h1 className='large text-primary'>Sign Up</h1>
        <form className='form' onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={onChange}
            />
            <small className='form-text'>
              This site uses Gravatar. If you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              value={password2}
              onChange={onChange}
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Register' />
        </form>
        <p className='my-1 form-text'>
          Already have an account?{' '}
          <Link to='/login' className='text-secondary3'>
            Sign In
          </Link>
        </p>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
