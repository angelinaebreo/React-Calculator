import React, { Component } from "react";
import "./Calculator.css";
import Buttons from "./Buttons";
import Display from "./Display";

export default class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      input: 0,
      prevInput: 0,
      operator: "",
      switchNum: true,
      dot: false,
    };

    this.numbers = "1234567890";
    this.operands = "-+*/";
  }

  handleClick = (e) => {
    let value = e.target.value;
    if (value === "sign") {
      this.handleSign();
    } else if (value === "reset") {
      this.handleClear();
    } else if (value === ".") {
      this.handleDecimal();
    } else if (value === "=") {
      this.handleEqual();
    } else if (value === "backspace") {
      this.handleBackspace();
    } else if (value === "percent") {
      this.handlePercent();
    } else if (this.numbers.includes(value)) {
      this.handleNumber(value);
    } else if (this.operands.includes(value)) {
      this.handleOperator(value);
    }
  };

  handleDecimal = () => {
    if (!this.state.dot || this.state.prevInput === 0) {
      this.setState({
        input: this.state.input.concat("."),
        dot: true,
      });
    } else {
      this.setState({
        prevInput: this.state.prevInput.concat("."),
        dot: true,
      });
    }
  };

  handleNumber = (value) => {
    const { input, prevInput, switchNum } = this.state;
    if (switchNum || parseFloat(input) === 0) {
      this.setState((prevState) => ({
        input: prevState.input + value.toString(),
      }));
    } else {
      this.setState((prevState) => ({
        prevInput: prevState.prevInput + value.toString(),
      }));
    }
  };

  handleOperator = (value) => {
    if (this.state.operator !== "") {
      this.handleEqual();
    }
    this.setState({ operator: value });
    if (this.state.prevInput === 0 && this.state.input !== 0) {
      this.setState({
        switchNum: false,
      });
    }
  };

  handleEqual = () => {
    if (this.state.input !== 0 && this.state.prevInput !== 0) {
      if (this.state.operator === "+") {
        this.setState({
          input:
            parseFloat(this.state.prevInput) + parseFloat(this.state.input),
        });
      } else if (this.state.operator === "*") {
        this.setState({
          input:
            parseFloat(this.state.prevInput) * parseFloat(this.state.input),
        });
      } else if (this.state.operator === "/") {
        this.setState({
          input:
            parseFloat(this.state.input) / parseFloat(this.state.prevInput),
        });
      } else if (this.state.operator === "-") {
        this.setState({
          input:
            parseFloat(this.state.input) - parseFloat(this.state.prevInput),
        });
      }
    }
    if (this.state.operator !== "") {
      this.setState({ prevInput: 0, switchNum: false });
    } else {
      this.setState({ prevInput: 0, operator: "", switchNum: true });
    }
  };

  handleClear = () => {
    this.setState({
      input: 0,
      prevInput: 0,
      operator: "",
      switchNum: true,
      dot: false,
    });
  };

  handleBackspace = () => {
    if (this.state.switchNum || this.state.prevInput === 0) {
      this.setState({ input: this.state.input.toString().slice(0, -1) });
    } else {
      this.setState({
        prevInput: this.state.prevInput.toString().slice(0, -1),
      });
    }
  };

  handleSign = () => {
    if (this.state.input !== 0) {
      if (this.state.switchNum) {
        this.setState((prevState) => ({
          input: prevState.input * -1,
        }));
      } else {
        this.setState((prevState) => ({
          prevInput: prevState.prevInput * -1,
        }));
      }
    }
  };

  handlePercent = () => {
    if (this.state.switchNum || this.state.prevInput === 0) {
      this.setState({ input: parseFloat(this.state.input) / 100 });
    } else {
      this.setState({ prevInput: parseFloat(this.state.prevInput) / 100 });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="calculator">
          <Display input={this.state.input} prevInput={this.state.prevInput} />

          <Buttons handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}
