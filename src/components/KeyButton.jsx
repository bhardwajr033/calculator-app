import React, { Component } from "react";

class KeyButton extends Component {
  render() {
    const { buttonValue, islong, isRed } = this.props;

    const buttonStyle = {
      width: islong ? "10rem" : "5rem",
      height: "5rem",
      color: isRed ? "white" : "black",
      background: isRed ? "#ffa8B6" : "#9df9ef",
      fontSize: "2rem",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    return <div style={buttonStyle}>{buttonValue}</div>;
  }
}

export default KeyButton;
