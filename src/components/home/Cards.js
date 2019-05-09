import React, { Component } from "react";
import { Card, Col, Row } from "antd";

export default class Cards extends Component {
  render() {
    return (
      <div style={{ background: "white", padding: "30px", marginTop: "10px" }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title={<span style={{ color: "#e6b30e" }}>Find a ride</span>}
              bordered={true}
              extra={
                <a href="#" style={{ color: "#4682B4" }}>
                  Go
                </a>
              }
            >
              Easy way to find rides ,with good prices hhhhhhhhhhhhh ..... bla
              bla bla
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={<span style={{ color: "#e6b30e" }}>Post a ride</span>}
              bordered={true}
              extra={
                <a href="#" style={{ color: "#4682B4" }}>
                  Go
                </a>
              }
            >
              Save your rides , and share with them with others ...bla bla bla
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={
                <span style={{ color: "#e6b30e" }}>Try our suggetions</span>
              }
              bordered={true}
              extra={
                <a href="#" style={{ color: "#4682B4" }}>
                  Go
                </a>
              }
            >
              Our team is going to suggest you some good rides with perfect
              prices ..... bla bla bla bla
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
