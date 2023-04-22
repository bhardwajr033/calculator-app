import React, { Component } from "react";

class KeyButton extends Component {
  render() {
    const { buttonValue, islong, isRed } = this.props;

    const buttonStyle = {
      width: islong ? "10rem" : "5rem",
      height: "5rem",
      color: isRed ? "white" : "black",
      background: isRed ? "#ffa8B6" : "#9df9ef",
      fontSize: isRed ? "4rem" :"2rem",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.48)"
    };

    return <div style={buttonStyle} onClick={this.props.handleClick}>{buttonValue}</div>;
  }
}

export default KeyButton;
