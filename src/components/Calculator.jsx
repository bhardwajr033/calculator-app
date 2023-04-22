import React, { Component } from "react";

import DisplayBar from "./DisplayBar";
import KeyButton from "./KeyButton";
import "./Calculator.css";

class Calculator extends Component {
  state = {
    displayValue : "0"
  };

  render() {
    return (
      <section className="calulator-body">
        <DisplayBar displayValue={this.state.displayValue}/>
        <div className="row first">
          <KeyButton buttonValue="clear" islong={true} />
          <KeyButton buttonValue="=" isRed={true} />
          <KeyButton buttonValue="+" isRed={true} />
        </div>
        <div className="row second">
          <KeyButton buttonValue="7" />
          <KeyButton buttonValue="8" />
          <KeyButton buttonValue="9" />
          <KeyButton buttonValue="-" isRed={true} />
        </div>
        <div className="row third">
          <KeyButton buttonValue="4" />
          <KeyButton buttonValue="5" />
          <KeyButton buttonValue="6" />
          <KeyButton buttonValue="*" isRed={true} />
        </div>
        <div className="row fourth">
          <KeyButton buttonValue="1" />
          <KeyButton buttonValue="2" />
          <KeyButton buttonValue="3" />
          <KeyButton buttonValue="/" isRed={true} />
        </div>
      </section>
    );
  }
}

export default Calculator;
