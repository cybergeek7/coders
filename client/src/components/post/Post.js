import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import PostItem from '../posts/PostItem';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { Helmet } from 'react-helmet';

const Post = ({ getPost, post: { post }, match }) => {
  useEffect(() => {
    getPost(match.params.postId);
  }, [getPost, match.params.postId]);

  const TITLE = 'Discussion / Coders';

  return post === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <div className='post-discussion'>
        <Link to='/posts' className='btn btn-transparent'>
          <i className='fas fa-arrow-alt-circle-left'></i> Back To Posts
        </Link>

        <PostItem post={post} showActions={false} />
        <CommentForm postId={post._id} />
        <div className='comments'>
          {post.comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              postId={post._id}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
