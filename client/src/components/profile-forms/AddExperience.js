import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
import { Helmet } from 'react-helmet';

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const TITLE = 'Add Experience / Coders';

  return (
    <Fragment>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className='form-container'>
        <Link className='btn btn-transparent my-1' to='/dashboard'>
          <i className='fas fa-arrow-alt-circle-left'></i> Back To Dashboard
        </Link>
        <h1 className='medium text-primary'>Add Experience</h1>
        <p className='text-secondary'>
          Add any developer/programming positions that you have had in the past
        </p>
        <form
          className='form'
          onSubmit={(e) => {
            e.preventDefault();
            addExperience(formData, history);
          }}
        >
          <div className='form-group'>
            <input
              type='text'
              placeholder='* Job Title'
              name='title'
              value={title}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='* Company'
              name='company'
              value={company}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Location'
              name='location'
              value={location}
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
              Current Job
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
              placeholder='Job Description'
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
