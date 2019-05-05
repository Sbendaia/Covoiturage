import React, { Component } from "react";
import { Input, Icon, Button, DatePicker, Radio, Col, Row } from "antd";
import "antd/dist/antd.css";
import logow from "./logow.png";
const Search = Input.Search;
export default class Navbar extends Component {
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
            style={{
              float: "right",
              width: "90px",
              marginTop: "15px",
              marginRight: "8px",
              borderColor: "#e6b30e",
              color: "#e6b30e"
            }}
          >
            Sign In
          </Button>
        </Col>
      </Row>
    );
  }
}
const navStyle = {
  position: "fixed",
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
