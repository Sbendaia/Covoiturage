import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import Post from "./Post";

const Posts = ({ posts, firebase }) => {
  // Build Todos list if todos exist and are loaded
  // const postsList = !isLoaded(posts)
  //   ? "Loading"
  //   : isEmpty(posts)
  //   ? "Todo list is empty"
  //   : posts.map(post => <Post project={post} />);
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

export default compose(
  firebaseConnect([
    "posts" // { path: '/todos' } // object notation
  ]),
  connect(state => ({
    posts: state.firebase.data.posts
    // profile: state.firebase.profile // load profile
  }))
)(Posts);
