import React, { Component } from "react";
import { Input, Button, Col, Row } from "antd";
import "antd/dist/antd.css";
import logow from "./logow.png";
import { connect } from "react-redux";
const Search = Input.Search;
class Navbar extends Component {
  render() {
    return (
      <Row style={navStyle}>
        <Col span={8}>
          <img src={logow} style={logoStyle} />
        </Col>
        <Col span={8}>
          <Search
            placeholder="Find Your destination "
            onSearch={value => console.log(value)}
            style={{
              float: "right",
              width: "200",
              margin: "15px",
              height: "30px",
              borderColor: "#e6b30e",
              color: "#e6b30e"
            }}
          />
        </Col>
        <Col span={8}>
          <Button
            href="/form"
            style={{
              float: "right",
              width: "80px",
              marginTop: "15px",
              marginRight: "8px",
              borderColor: "#e6b30e",
              color: "#e6b30e"
            }}
          >
            Post
          </Button>
          <Button
            href="/signin"
            style={{
              float: "right",
              width: "80px",
              marginTop: "15px",
              marginRight: "8px",
              borderColor: "#e6b30e",
              color: "#e6b30e"
            }}
          >
            Login In
          </Button>
          <Button
            href="/signup"
            style={{
              float: "right",
              width: "90px",
              marginTop: "15px",
              marginRight: "8px",
              borderColor: "#e6b30e",
              color: "#e6b30e"
            }}
          >
            Sign Up
          </Button>
        </Col>
      </Row>
    );
  }
}
const navStyle = {
  position: "relative",
  width: "100%",
  height: "70px",
  borderBottom: "inset",
  padding: "0",
  margin: "0",

  borderColor: "#e6b30e",
  backgroundColor: "#4682B4"
};
const logoStyle = {
  position: "relative",
  height: "50px",
  padding: "0",
  marginTop: "10px",
  marginLeft: "20px"
};
const mapStateToProps = state => {
  console.log(state);
  return {};
};
export default connect(mapStateToProps)(Navbar);
