import React, { Component } from "react";
import firebase from "../../config/config";
// import { Comment, Tooltip, Avatar, Timeline, Tag, Modal, Button } from "antd";
// import moment from "moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
class Search extends Component {
  componentDidMount = () => {
    console.log(this.props.ville);
    const db = firebase.firestore();
    db.collection("posts")
      .where("villeA", "==", this.props.ville)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(doc.id, " => ", doc.data());
        });
      });
  };

  render() {
    return <div />;
  }
}
Search.propTypes = {
  ville: PropTypes.string.isRequired
};
const mapStateToProps = state => ({
  ville: state.project.ville
});
export default connect(mapStateToProps)(Search);
