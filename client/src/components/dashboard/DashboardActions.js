import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  const TITLE = 'Dashboard / Coders';

  return (
    <Fragment>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div class='dash-buttons'>
        <Link to='/edit-profile' class='btn btn-transparent'>
          <i className='fas fa-user-circle'></i> Edit Profile
        </Link>
        <Link to='/add-experience' class='btn btn-transparent'>
          {' '}
          <i className='fab fa-black-tie'></i> Add Experience
        </Link>
        <Link to='/add-education' class='btn btn-transparent'>
          {' '}
          <i className='fas fa-graduation-cap'></i> Add Education
        </Link>
      </div>
    </Fragment>
  );
};

export default DashboardActions;
