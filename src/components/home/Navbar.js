import React, { Component } from "react";
import { Icon, Col, Row } from "antd";
import "antd/dist/antd.css";
import logow from "./logow.png";
import { connect } from "react-redux";
import "./Navbar.css";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import * as actions from "../../store/actions/projectActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    redirect: false,
    ville: ""
  };

  render() {
    const { profile, auth } = this.props;
  
    const links = auth.uid ? (
      <SignedInLinks profile={profile} />
    ) : (
      <SignedOutLinks />
    );

    return (
      <Row className="navbar">
        <Col span={6}>
          <img src={logow} className="logo" alt="" />
        </Col>
        <Col span={18}>
          <ul style={{ float: "right" }}>
            <li className="navLinks">
              <Link className="navButton" to="/allpost">
                <Icon type="search" /> {""}
                Rechercher
              </Link>
            </li>
            <li className="navLinks">
              {" "}
              <Link className="navButton" to="/form">
                <Icon type="plus-square" /> Publier
              </Link>
            </li>

            <li className="navLinks">{links}</li>
            <li className="navLinks">
              {" "}
              <Link className="navButton" to="#">
                <Icon type="message" /> {""}
                Nous Contacter
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  
  };
};
Navbar.propTypes = {
  actions: PropTypes.object.isRequired
};
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
