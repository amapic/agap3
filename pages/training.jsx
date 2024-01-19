import React,{ Component } from "react";

export function Aa() {
  return <>AA</>;
}


class Button extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.count}
      </button>
    );
  }
}

export default Button;
