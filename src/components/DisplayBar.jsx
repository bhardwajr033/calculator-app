import React, { Component } from "react";

class DisplayBar extends Component {
  render() {
    const { displayValue } = this.props;

    const displayBarStyle = {
      width: "20rem",
      height: "5rem",
      color: "white",
      background: "#a28089",
      fontSize: "3rem",
      textAlign: "right",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    };

    return (
      <div style={displayBarStyle} className="display-bar">
        {displayValue}
      </div>
    );
  }
}

export default DisplayBar;
