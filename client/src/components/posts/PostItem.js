import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import formatDate from '../../utils/formatDate';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  post: { _id, text, name, avatar, user, likes, comments, date },
  auth,
  addLike,
  removeLike,
  deletePost,
  showActions,
}) => {
  return (
    <div className='post bg-primary p-1 my-2'>
      <div>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={avatar} alt='' />
          <h4 className='text-secondary3'>{name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1 text-primary'>{text}</p>
        <p className='text-secondary'>Posted on {formatDate(date)}</p>

        {showActions && (
          <Fragment>
            <div className='reactions'>
              <div className='like'>
                <i
                  onClick={() => addLike(_id)}
                  className='fas fa-thumbs-up fa-lg'
                ></i>
                {likes.length > 0 && (
                  <span className='likes-count'> {likes.length}</span>
                )}
              </div>

              <div className='dislike'>
                <i
                  onClick={() => removeLike(_id)}
                  className='fas fa-thumbs-down fa-lg'
                ></i>
              </div>

              <div className='comments'>
                <Link to={`/posts/${_id}`}>
                  <i class='far fa-comment fa-lg'></i>{' '}
                  {comments.length > 0 && (
                    <span className='comments-count'>{comments.length}</span>
                  )}
                </Link>
              </div>
              {/* Only shows delete button if the user owns the post */}
              {!auth.loading && user === auth.user._id && (
                <div className='delete-post'>
                  <i
                    onClick={() => deletePost(_id)}
                    className='fas fa-trash fa-lg'
                  ></i>
                </div>
              )}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
