import React, { Component } from "react";
import { Form, Input, Button, Col, Row, Icon, notification } from "antd";
import "./ContactUs.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/projectActions.js";
import { bindActionCreators } from "redux";
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      email: "",
      phone: "",
      msg: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    const openNotificationWithIcon = type => {
      notification[type]({
        message: "Envoyé",
        description:
          "Merci de nous avoir  contacter !  nous vous répondons dans les plus brefs délais."
      });
    };
    e.preventDefault();
    console.log("fghjkl");
    this.props.actions.contactUs(this.state);
    openNotificationWithIcon("success");
  };
  render() {
    return (
      <div className="container">
        <Row>
          <Col span={12} className="infos">
            <div style={{ marginBottom: "20px", width: "300px" }}>
              <h1>Nous Contacter</h1>
              Nous accueillerons volontiers toute suggestion, question ou idée
              que vous pourriez soumettre.
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Icon
                type="calendar"
                style={{ fontSize: "30px", padding: "5px" }}
              />
              De lundi à vendredi 9:00/18:00
            </div>
            <div style={{ marginBottom: "20px" }}>
              <Icon type="mail" style={{ fontSize: "30px", padding: "5px" }} />
              test@gmail.com
            </div>
            <div>
              <Icon type="phone" style={{ fontSize: "30px", padding: "5px" }} />
              +212600000000
            </div>
          </Col>

          <Col span={12} className="contactForm">
            <Form onSubmit={this.handleSubmit}>
              <Form.Item label="Nom Complet" style={{ marginBottom: "8px" }}>
                <Input name="nom" onChange={this.handleChange} />
              </Form.Item>
              <Form.Item
                label="Adresse électronique "
                style={{ marginBottom: "8px" }}
              >
                <Input name="email" onChange={this.handleChange} />
              </Form.Item>
              <Form.Item
                label="Numéro de téléphone"
                style={{ marginBottom: "8px" }}
              >
                <Input name="phone" onChange={this.handleChange} />
              </Form.Item>
              <Form.Item label="Message" style={{ marginBottom: "8px" }}>
                <Input.TextArea
                  rows={4}
                  name="msg"
                  onChange={this.handleChange}
                />
              </Form.Item>
              <Button className="contactButton" onClick={this.onSubmit}>
                Envoyer{" "}
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(
  null,
  mapDispatchToProps
)(ContactUs);
