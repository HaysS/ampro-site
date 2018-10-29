import React, { Component } from "react";
import classNames from "classnames";
import "./FancyButton.css";

class FancyButton extends Component {
  render() {
    const { onClick, text } = this.props;

    const classes = classNames("fancy-button", this.props.className);

    const showText = function() {return text ? text : () => { return " " }}
    return (
      <div className={classes} href="#menu" onClick={onClick ? onClick : () => { return null }}>
        <span className="word">{showText()}</span>
      </div>
    );
  }
}

export default FancyButton;
