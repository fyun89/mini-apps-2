import React, { Component } from 'react';
import Scores from './Scores';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rounds: [
        {
          round: 1,
          first: 0,
          second: 0,
        },
        {
          round: 2,
          first: 0,
          second: 0,
        },
        {
          round: 3,
          first: 0,
          second: 0,
        },
        {
          round: 4,
          first: 0,
          second: 0,
        },
        {
          round: 5,
          first: 0,
          second: 0,
        },
        {
          round: 6,
          first: 0,
          second: 0,
        },
        {
          round: 7,
          first: 0,
          second: 0,
        },
        {
          round: 8,
          first: 0,
          second: 0,
        },
        {
          round: 9,
          first: 0,
          second: 0,
        },
        {
          round: 10,
          first: 0,
          second: 0,
        },
      ],
    };
  }

  render() {
    const { rounds } = this.state;
    return (
      <div className="main">
        <h1>
          Bowling Scores
        </h1>
        <Scores rounds={rounds} />
      </div>
    );
  }
}

export default App;
