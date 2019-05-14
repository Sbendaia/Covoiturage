import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Post from "./Post";


const Posts = props => {
  const { posts } = props;
  console.log(posts);
  const postsList =
    posts &&
    posts.map(post => {
      return <Post post={post} />;
    });
  return (
    <div>
      <h1>Posts</h1>
      <ul>{postsList}</ul>
    </div>
  );
};
const mapStateToProps = state => {
  return { posts: state.firestore.posts };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(Posts);
