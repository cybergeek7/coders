import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <div className='profile bg-transparent'>
      <img src={avatar} alt='Profile' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p className='text-secondary'>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='my-1 text-secondary'>
          {location && <span>{location}</span>}
        </p>
        <Link to={`/profile/${_id}`} className='btn btn-transparent'>
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas-fa-check'></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
