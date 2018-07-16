import React, { Component } from 'react';

class Scores extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    const {numButtonInput} = this.props;
    console.log(Number(e.target.textContent));
    numButtonInput(Number(e.target.textContent));
  }

  render() {
    return (
      <div className="buttons">
        <div className="buttonContainer">
          <div onClick={this.handleClick} className="grid-item btn1">1</div>
          <div onClick={this.handleClick} className="grid-item btn2">2</div>
          <div onClick={this.handleClick} className="grid-item btn3">3</div>
          <div onClick={this.handleClick} className="grid-item btn4">4</div>
          <div onClick={this.handleClick} className="grid-item btn5">5</div>
          <div onClick={this.handleClick} className="grid-item btn6">6</div>
          <div onClick={this.handleClick} className="grid-item btn7">7</div>
          <div onClick={this.handleClick} className="grid-item btn8">8</div>
          <div onClick={this.handleClick} className="grid-item btn9">9</div>
          <div onClick={this.handleClick} className="grid-item btnClr">Clr</div>
          <div onClick={this.handleClick} className="grid-item btn10">10</div>
          <div onClick={this.handleClick} className="grid-item btnEnt">Ent</div>
        </div>
      </div>
    );
  }
}


export default Scores;
