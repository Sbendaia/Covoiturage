import React, { Component } from "react";
// import "./postingForm.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/projectActions.js";
import PropTypes from "prop-types";
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
    e.preventDefault();
    this.props.actions.postARide(this.state);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <p>
            <label>Ville de départ</label>
            <input id="villeD" onChange={this.onChange} />{" "}
          </p>
          <p>
            <label>ville d'arrivée</label>
            <input id="villeA" onChange={this.onChange} />
          </p>
          <p>
            <label>Date</label>{" "}
            <input type="date" id="date" onChange={this.onChange} />
          </p>
          <p>
            {" "}
            <label>Nombre de siége </label>
            <input id="nbSiege" onChange={this.onChange} />
          </p>
          <p>
            <label>Autoroute</label>
            <select id="autoroute" onChange={this.onChange}>
              <option value={true}>Oui </option>
              <option value={false}>Non </option>
            </select>
          </p>
          <center>
            <button type="submit">Rechercher</button>
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
