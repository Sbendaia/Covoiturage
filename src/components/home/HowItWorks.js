import React, { Component } from "react";
import { Steps, Button, message } from "antd";
import "./HowItWorks.css";
const { Step } = Steps;

const steps = [
  {
    title: "S'inscrire",
    content: "First-content"
  },
  {
    title: "Chercher une annonces",
    content: "Second-content"
  },
  {
    title: "Appeler ",
    content: "Last-content"
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
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  }
}
