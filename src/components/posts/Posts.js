import React from "react";
import Post from "./Post";
const Posts = () => {
  fetch(
    "https://us-central1-carpoolingproject-b98da.cloudfunctions.net/postsAPI"
  )
    .then(results => {
      return results.json();
    })
    .then(data => {
      data.map(post => {
        console.log(post);
      });
    });

  return <div />;
};

export default Posts;
