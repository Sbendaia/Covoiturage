import React, { Component } from "react";
// import "./postingForm.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/projectActions.js";
import PropTypes from "prop-types";
import { Input, Select, DatePicker, Button } from "antd";
import { bindActionCreators } from "redux";

class Formulaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      villeA: "",
      villeD: "",
      date: "",
      nbSiege: "",
      autoroute: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    // e.preventDefault();
    this.props.actions.postARide(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <form>
          <p>
            <label>Ville de départ</label>
            <Input id="villeD" onChange={this.onChange} allowClear />{" "}
          </p>
          <p>
            <label>ville d'arrivée</label>
            <Input id="villeA" onChange={this.onChange} allowClear />
          </p>
          <p>
            <label>Date</label>{" "}
            <DatePicker id="date" onChange={this.onChange} />
          </p>
          <p>
            {" "}
            <label>Nombre de siége </label>
            <Input id="nbSiege" onChange={this.onChange} />
          </p>
          <p>
            <label>Autoroute</label>
            <Select id="autoroute" onChange={this.onChange}>
              <option value={true}>Oui </option>
              <option value={false}>Non </option>
            </Select>
          </p>
          <center>
            <Button onClick={this.onSubmit}>Rechercher</Button>
          </center>
        </form>
      </div>
    );
  }
}

Formulaire.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(
  null,
  mapDispatchToProps
)(Formulaire);
