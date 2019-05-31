import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { Button, Avatar, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
const SignedInLinks = props => {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link target="_blank" rel="noopener noreferrer" to="/mesAnnonces">
          Mes annonces
        </Link>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="#">
          Profile
        </a>
      </Menu.Item>
      <Menu.Item>
        <Button className="signOutButton " onClick={props.signOut}>
          Sign Out
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu} className="navButton">
        <Avatar icon="user" size="large" />
      </Dropdown>
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
