import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <div className="buttons">
        <button
          className="button-percent"
          value="percent"
          onClick={this.props.handleClick}
        >
          %
        </button>
        <button value="backspace" onClick={this.props.handleClick}>
          CE
        </button>

        <button
          className="button-sign"
          value="sign"
          onClick={this.props.handleClick}
        >
          +/-
        </button>
        <button
          className="button-clear"
          value="reset"
          onClick={this.props.handleClick}
        >
          C
        </button>

        <button value="1" onClick={this.props.handleClick}>
          1
        </button>
        <button value="2" onClick={this.props.handleClick}>
          2
        </button>
        <button value="3" onClick={this.props.handleClick}>
          3
        </button>
        <button value="+" onClick={this.props.handleClick}>
          +
        </button>

        <button value="4" onClick={this.props.handleClick}>
          4
        </button>
        <button value="5" onClick={this.props.handleClick}>
          5
        </button>
        <button value="6" onClick={this.props.handleClick}>
          6
        </button>
        <button value="-" onClick={this.props.handleClick}>
          -
        </button>

        <button value="7" onClick={this.props.handleClick}>
          7
        </button>
        <button value="8" onClick={this.props.handleClick}>
          8
        </button>
        <button value="9" onClick={this.props.handleClick}>
          9
        </button>
        <button value="*" onClick={this.props.handleClick}>
          ×
        </button>

        <button value="." onClick={this.props.handleClick}>
          .
        </button>
        <button value="0" onClick={this.props.handleClick}>
          0
        </button>
        <button value="=" onClick={this.props.handleClick}>
          =
        </button>
        <button value="/" onClick={this.props.handleClick}>
          ÷
        </button>
      </div>
    );
  }
}
