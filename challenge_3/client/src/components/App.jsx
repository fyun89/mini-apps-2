import React, { Component } from 'react';
import Scores from './Scores';
import Buttons from './Buttons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentRound: 1,
      turn: 1,
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
    this.handleClickNum = this.handleClickNum.bind(this);
  }

  handleClickNum(e) {
    const { turn } = this.state;
    const { currentRound } = this.state;
    const { rounds } = this.state;
    if (currentRound <= 9) {
      if (turn === 1) {
        const pastRoundInfo = rounds;
        pastRoundInfo[currentRound - 1].first = e;
        console.log('triggered round 1-9 turn 1')
        this.setState({
          rounds: pastRoundInfo,
          turn: turn + 1,
        });
      } else {
        const pastRoundInfo = rounds;
        pastRoundInfo[currentRound - 1].second = e;
        console.log('triggered round 1-9 turn 2')
        this.setState({
          rounds: pastRoundInfo,
          turn: 1,
          currentRound: currentRound + 1,
        });
      }
    } else if (currentRound === 10) {
      if (turn === 1) {
        const pastRoundInfo = rounds;
        pastRoundInfo[currentRound - 1].first = e;
        console.log('triggered round 10 turn 1')
        this.setState({
          rounds: pastRoundInfo,
          turn: turn + 1,
        });
      } else if (turn === 2) {
        const pastRoundInfo = rounds;
        pastRoundInfo[currentRound - 1].second = e;
        console.log('triggered round 10 turn 2')
        this.setState({
          rounds: pastRoundInfo,
          turn: turn + 1,
        });
      } else if (turn === 3) {
        const pastRoundInfo = rounds;
        pastRoundInfo[currentRound - 1].third = e;
        console.log('triggered round 10 turn 3')
        this.setState({
          rounds: pastRoundInfo,
          turn: 1,
          currentRound: currentRound + 1,
        });
      }
    } else if (currentRound > 10) {
      alert('You\'ve reached the end of the game!')
    }
  }

  render() {
    const { rounds } = this.state;
    return (
      <div className="main">
        <h1>
          Bowling Scores
        </h1>
        <Scores rounds={rounds} />
        <Buttons numButtonInput={this.handleClickNum} />
      </div>
    );
  }
}

export default App;
