import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => (
  <Fragment>
    {/* @todo: Check if the user has a profile */}
    <Link to={`/profile/${user}`}>
      <div class='comment-item post p-1 my-1'>
        <div>
          <img class='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </div>
        <div>
          <p class='text-primary my-1'>{text}</p>
          <p class='text-secondary'>Posted on {formatDate(date)}</p>
          {!auth.loading && user === auth.user._id && (
            <i
              onClick={(e) => deleteComment(postId, _id)}
              type='button'
              className='delete-comment fas fa-trash fa-lg'
            ></i>
          )}
        </div>
      </div>
    </Link>
  </Fragment>
);

CommentItem.propTypes = {
  postId: PropTypes.number.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
