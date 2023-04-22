import React, { Component } from "react";

import DisplayBar from "./DisplayBar";
import KeyButton from "./KeyButton";
import "./Calculator.css";

class Calculator extends Component {
  state = {
    displayValue: "0",
  };

  calculate(expression) {
    for (let index = 0; index < expression.length; index++) {
      if (expression.charAt(index) === "×") {
        expression = setCharAt(expression, index, "*");
      } else if (expression.charAt(index) === "÷") {
        expression = setCharAt(expression, index, "/");
      }
    }

    function setCharAt(str, index, chr) {
      if (index > str.length - 1) return str;
      return str.substring(0, index) + chr + str.substring(index + 1);
    }
    try {
      let result = eval(expression).toFixed(2).toString();
      if (result.split(".")[1] === "00") {
        result = result.split(".")[0];
      }
      this.setState({ displayValue: result });
    } catch (err) {
      this.setState({ displayValue: "Error" });
    }
  }

  handleClick = (event) => {
    const clickedValue = event.target.textContent;
    if (clickedValue === "=") {
      this.calculate(this.state.displayValue);
    } else if (clickedValue === "C") {
      this.setState({ displayValue: "0" });
    } else {
      let lastDisplayValue = this.state.displayValue;
      if (lastDisplayValue === "0" || lastDisplayValue === "Error") {
        lastDisplayValue = "";
      }
      this.setState({ displayValue: lastDisplayValue + clickedValue });
    }
  };

  render() {
    return (
      <section className="calulator-body">
        <DisplayBar displayValue={this.state.displayValue} />
        <div className="row first">
          <KeyButton
            handleClick={this.handleClick}
            buttonValue="C"
          />
          <KeyButton
            handleClick={this.handleClick}
            buttonValue="0"
          />
          <KeyButton
            handleClick={this.handleClick}
            buttonValue="="
            isRed={true}
          />
          <KeyButton
            handleClick={this.handleClick}
            buttonValue="+"
            isRed={true}
          />
        </div>
        <div className="row second">
          <KeyButton handleClick={this.handleClick} buttonValue="7" />
          <KeyButton handleClick={this.handleClick} buttonValue="8" />
          <KeyButton handleClick={this.handleClick} buttonValue="9" />
          <KeyButton
            handleClick={this.handleClick}
            buttonValue="-"
            isRed={true}
          />
        </div>
        <div className="row third">
          <KeyButton handleClick={this.handleClick} buttonValue="4" />
          <KeyButton handleClick={this.handleClick} buttonValue="5" />
          <KeyButton handleClick={this.handleClick} buttonValue="6" />
          <KeyButton
            handleClick={this.handleClick}
            buttonValue="×"
            isRed={true}
          />
        </div>
        <div className="row fourth">
          <KeyButton handleClick={this.handleClick} buttonValue="1" />
          <KeyButton handleClick={this.handleClick} buttonValue="2" />
          <KeyButton handleClick={this.handleClick} buttonValue="3" />
          <KeyButton
            handleClick={this.handleClick}
            buttonValue="÷"
            isRed={true}
          />
        </div>
      </section>
    );
  }
}

export default Calculator;
