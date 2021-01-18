import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <div className='comment-form form-container'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
        className='form my-1'
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Comment on this post'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <button className='btn btn-transparent my-1'>
          Submit <i class='far fa-paper-plane'></i>
        </button>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
