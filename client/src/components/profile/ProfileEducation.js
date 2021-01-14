import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, from, to, description },
}) => (
  <div>
    <h3 className='text-secondary'>{school}</h3>
    <p>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>
    <p>
      <strong className='text-secondary2'>Degree: </strong> {degree}
    </p>
    <p>
      <strong className='text-secondary2'>Field of Study: </strong>{' '}
      {fieldofstudy}
    </p>
    <p>
      <strong className='text-secondary2'>Description: </strong> {description}
    </p>
  </div>
);
ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
