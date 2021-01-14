import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logoIcon from '../../img/logoIcon.png';
import logoName from '../../img/logoName.png';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  const TITLE = 'Home / Coders';

  return (
    <Fragment>
      a
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            {/* <h1 className='x-large'>
              {' '}
              <span>
                <img className='logo-image' src={img}></img>
              </span>{' '}
              Coders
            </h1> */}
            <div className='logo'>
              <img className='logoName' src={logoName}></img>
              <img className='logoIcon' src={logoIcon}></img>
            </div>

            <p className='lead'>
              Create your profile and connect with other developers
            </p>
            <div className='buttons'>
              <Link to='/register' className='btn btn-secondary'>
                Sign Up
              </Link>
              <Link to='/login' className='btn btn-primary'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
