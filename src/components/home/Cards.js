import React, { Component } from "react";
import { Card, Col, Row } from "antd";

export default class Cards extends Component {
  render() {
    return (
      <div
        style={{
          padding: "30px",
          marginTop: "10px"
        }}
      >
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title={<span style={{ color: "#e6b30e" }}>S'inscrire</span>}
              bordered={true}
              extra={
                <a href="#" style={{ color: "#4682B4" }}>
                  Go
                </a>
              }
            >
              Créer votre compte Dini m3ak
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={<span style={{ color: "#e6b30e" }}>S'identifier </span>}
              bordered={true}
              extra={
                <a href="/form" style={{ color: "#4682B4" }}>
                  Go
                </a>
              }
            >
              S'identifier et poster une annonce
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={<span style={{ color: "#e6b30e" }}>Chercher</span>}
              bordered={true}
              extra={
                <a href="/allpost" style={{ color: "#4682B4" }}>
                  Go
                </a>
              }
            >
              Trouver votre destination facilement avec Dini M3ak
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
