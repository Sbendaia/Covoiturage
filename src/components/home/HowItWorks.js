import React, { Component } from "react";
import { Steps, Button, message, Icon } from "antd";
import "./HowItWorks.css";
const { Step } = Steps;
// const icon1=<Icon type="phone"/>;
// const icon2=

const steps = [
  {
    title: "S'inscrire",
    content:
      "Créer votre Compte Dini m3ak et bénéficier de la possibilité de publier votre propre annonces , Ne perdez jamais votre chance de gagner plus d'argent !! "
  },
  {
    title: "Chercher une annonces",
    content:
      "Chercher des annonces et voyager confortablement et avec des bons prix avec Dini m3ak "
  },
  {
    title: "Appeler ",
    content: "Vous étes intéressés par une annonce ? appelez la personne  "
  }
];

export default class HowItWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div style={{ width: "90%", marginLeft: "40px" }}>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div
          className="steps-content"
          style={{
            backgroundColor: "#4682B4",
            color: "white",
            fontSize: "30px"
          }}
        >
          {steps[current].content}
        </div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Suivant
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Terminé
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Précédent
            </Button>
          )}
        </div>
      </div>
    );
  }
}
