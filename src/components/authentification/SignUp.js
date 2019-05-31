import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import "./SignUp.css";
import { signUp } from "../../store/actions/authActions";

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
    console.log(this.state.firstName);
    this.props.signUp(this.state);
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    // const { auth } = this.props;
    // if (auth.uid) return <Redirect to="/" />;
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="signout-form">
          <Form.Item {...formItemLayout} label="E-mail">
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true,
                  message: "Please input your E-mail!"
                }
              ]
            })(<Input name="email" onChange={this.handleChange} />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Mot de passe">
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please input your password!"
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(
              <Input
                type="password"
                name="password"
                onChange={this.handleChange}
              />
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Confirmer Mot de passe">
            {getFieldDecorator("confirm", {
              rules: [
                {
                  required: true,
                  message: "Please confirm your password!"
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label={<span>Prénom&nbsp;</span>}>
            {getFieldDecorator("firstName", {
              rules: [
                {
                  required: true,
                  message: "Please input your first name!",
                  whitespace: true
                }
              ]
            })(<Input name="firstName" onChange={this.handleChange} />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label={<span>Nom&nbsp;</span>}>
            {getFieldDecorator("lastName", {
              rules: [
                {
                  required: true,
                  message: "Please input your last Name!",
                  whitespace: true
                }
              ]
            })(<Input name="lastName" onChange={this.handleChange} />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Numéro de téléphone">
            {getFieldDecorator("phone", {
              rules: [
                { required: true, message: "Please input your phone number!" }
              ]
            })(
              <Input
                style={{ width: "100%" }}
                name="phone"
                onChange={this.handleChange}
              />
            )}
          </Form.Item>

          {/* <Form.Item
            {...formItemLayout}
            label="Captcha"
            extra="We must make sure that your are a human."
          >
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator("captcha", {
                  rules: [
                    {
                      required: true,
                      message: "Please input the captcha you got!"
                    }
                  ]
                })(<Input />)}
              </Col>
              <Col span={12}>
                <Button>Get captcha</Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator("agreement", {
              valuePropName: "checked"
            })(
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            )}
          </Form.Item> */}
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              S'inscrire
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedRegistrationForm);
