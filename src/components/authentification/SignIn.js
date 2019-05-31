import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Alert, Row, Col } from "antd";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
// import { Redirect } from "react-router-dom";

import "./SignIn.css";
class NormalLoginForm extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.signIn(this.state);
  };

  render() {
    const { authError } = this.props;
    // if (auth.uid) return <Redirect to="/" />;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Row>
          <Col span={12}>
            <h1 id="titre1">Rejoignez-nous</h1>
            <h3 id="content1">
              loAd culpa est non fugiat reprehenderit in consequat laborum.
              Veniam tempor ipsum officia quis exercitation sunt elit dolor ad
              pariatur ipsum.{" "}
            </h3>
          </Col>
          <Col span={12}>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator("userName", {
                  rules: [
                    { required: true, message: "entez votre identifiant svp!" }
                  ]
                })(
                  <Input
                    name="email"
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Identifiant"
                    onChange={this.handleChange}
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Entrez votre mot de passe svp" }
                  ]
                })(
                  <Input
                    name="password"
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Mot de passe"
                    onChange={this.handleChange}
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: true
                })(<Checkbox>Se souvenir de moi</Checkbox>)}
                <a className="login-form-forgot" href="/signup">
                  Mot de passe oublié ?
                </a>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Se connecter
                </Button>
                Or <a href="/signup">s'inscrire maintenant!</a>
              </Form.Item>
            </Form>
            <div>{authError ? <Alert message={authError} /> : null}</div>
          </Col>{" "}
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedNormalLoginForm);
