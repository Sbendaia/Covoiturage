import React, { Component } from "react";
import { Input, Button, Col, Row } from "antd";
import "antd/dist/antd.css";
import logow from "./logow.png";
import { connect } from "react-redux";
import "./Navbar.css";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Search = Input.Search;
class Navbar extends Component {
  render() {
    const { profile, auth } = this.props;
    const links = auth.uid ? (
      <SignedInLinks profile={profile} />
    ) : (
      <SignedOutLinks />
    );

    return (
      <Row className="navbar">
        <Col span={8}>
          <img src={logow} className="logo" />
        </Col>
        <Col span={8}>
          <Search
            className="search"
            placeholder="Find Your destination "
            onSearch={value => console.log(value)}
          />
          <Button className="postButton" href="/form">
            Post
          </Button>
        </Col>
        <Col span={6}>{links}</Col>
      </Row>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
export default connect(mapStateToProps)(Navbar);
