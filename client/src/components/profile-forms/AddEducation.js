import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';
import { Helmet } from 'react-helmet';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const TITLE = 'Add Education / Coders';

  return (
    <Fragment>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className='form-container'>
        <Link className='btn btn-transparent my-1' to='/dashboard'>
          <i className='fas fa-arrow-alt-circle-left'></i> Back To Dashboard
        </Link>
        <h1 className='medium text-primary'>Add Education</h1>
        <p className='text-secondary'>
          Add a school or bootcamp you have attended
        </p>
        <form
          className='form'
          onSubmit={(e) => {
            e.preventDefault();
            addEducation(formData, history);
          }}
        >
          <div className='form-group'>
            <input
              type='text'
              placeholder='* Shcool or Bootcamp'
              name='school'
              value={school}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='* Degree or Certificate'
              name='degree'
              value={degree}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Field of Study'
              name='fieldofstudy'
              value={fieldofstudy}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <h4 className='form-text'>From Date</h4>
            <input type='month' name='from' value={from} onChange={onChange} />
          </div>
          <div className='form-group'>
            <p className='form-text'>
              <input
                type='checkbox'
                name='current'
                value={current}
                onChange={() => setFormData({ ...formData, current: !current })}
              />{' '}
              Current School
            </p>
          </div>
          <div className='form-group'>
            <h4 className='form-text'>To Date</h4>
            <input
              type='month'
              name='to'
              value={to}
              onChange={onChange}
              disabled={current}
            />
          </div>
          <div className='form-group'>
            <textarea
              name='description'
              cols='30'
              rows='5'
              placeholder='Program Description'
              value={description}
              onChange={onChange}
            ></textarea>
          </div>
          <input type='submit' className='btn btn-primary my-1' />
        </form>
      </div>
    </Fragment>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
