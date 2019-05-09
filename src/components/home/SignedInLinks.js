import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Button } from "antd";
const SignedInLinks = props => {
  return (
    <div>
      <Button className="btn2" onClick={props.signOut}>
        Sign Out
      </Button>
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
