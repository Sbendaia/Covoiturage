import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="footerStyle">
        <Row>
          <Col span={8} style={{ textAlign: "center" }}>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Nous contacter</h3>
          </Col>
          <Col span={8} style={{ textAlign: "center" }}>
            <h3>Legal</h3>
            <p>
              Copyright{" "}
              <Icon
                type="copyright"
                style={{ fontSize: "10px", color: "white" }}
              />{" "}
              2018-2019
              <br />
              All right reserved.
            </p>
          </Col>
          <Col span={8} style={{ textAlign: "center" }}>
            <h3>Suivez-nous</h3>
            <div>
              <Icon
                type="facebook"
                style={{ fontSize: "30px", color: "white", padding: "3px" }}
              />
              <Icon
                type="instagram"
                style={{ fontSize: "30px", color: "white", padding: "3px" }}
              />
              <Icon
                type="twitter"
                style={{ fontSize: "30px", color: "white", padding: "3px" }}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
