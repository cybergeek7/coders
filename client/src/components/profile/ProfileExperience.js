import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileExperience = ({
  experience: { company, title, location, from, to, description },
}) => (
  <div>
    <h3 className='text-secondary'>{company}</h3>
    <p>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>
    <p>
      <strong className='text-secondary2'>Position: </strong> {title}
    </p>
    <p>
      <strong className='text-secondary2'>Location: </strong> {location}
    </p>
    <p>
      <strong className='text-secondary2'>Description: </strong> {description}
    </p>
  </div>
);
ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
