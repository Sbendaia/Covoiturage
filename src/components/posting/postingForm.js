import React, { Component } from "react";
import "./postingForm.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/projectActions.js";
import PropTypes from "prop-types";
import { Input, Select, DatePicker, Button, Form } from "antd";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      villeA: "",
      villeD: "",
      date: "",
      nbSiege: "",
      autoroute: "",
      prix: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onChange = (date, dateString) => {
    const newDate = date.toDate();
    this.setState({
      date: newDate
    });
  };
  handleSelect = value => {
    this.setState({
      autoroute: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.actions.postARide(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signIn" />;
    return (
      <div>
        <h1 className="header">Publier votre annonce</h1>
        <Form className="postingForm">
          <Form.Item label={<span>Ville de Départ&nbsp;</span>}>
            <Input name="villeD" onChange={this.handleChange} allowClear />{" "}
          </Form.Item>
          <Form.Item label={<span>Villde d'arrivée&nbsp;</span>}>
            <Input name="villeA" onChange={this.handleChange} allowClear />
          </Form.Item>
          <Form.Item label={<span>Date&nbsp;</span>}>
            <DatePicker onChange={this.onChange} />
          </Form.Item>
          <Form.Item label={<span> Nombre de siége&nbsp;</span>}>
            <Input name="nbSiege" onChange={this.handleChange} />
          </Form.Item>
          <Form.Item label={<span>autoroute&nbsp;</span>}>
            <Select
              onChange={value => {
                this.handleSelect(value);
              }}
            >
              <Select.Option value="oui">Oui </Select.Option>
              <Select.Option value="non">Non </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label={<span>Prix&nbsp;</span>}>
            <Input name="prix" onChange={this.handleChange} />
          </Form.Item>
          <center>
            <Button
              className="postingButton"
              type="primary"
              onClick={this.onSubmit}
            >
              Publier
            </Button>
          </center>
        </Form>
      </div>
    );
  }
}

Formulaire.propTypes = {
  actions: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Formulaire);
