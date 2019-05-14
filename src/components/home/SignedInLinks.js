import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Button, Avatar } from "antd";
const SignedInLinks = props => {
  return (
    <div>
      <Button className="signOutButton " onClick={props.signOut}>
        Sign Out
      </Button>
      <Avatar icon="user" className="avatar" size="large" />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
