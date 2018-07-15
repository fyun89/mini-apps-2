import React, { Component } from 'react';

class Scores extends Component {
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
    const generateKey = (pre) => {
      return `${pre}_${new Date().getTime()}`;
    };
    return (
      <div className="scoreboard">
        {rounds.map((elem, i) => (
          <div className="row" key={generateKey(i)}>
            <li id="1" className="rounds">
              <ul className="outer">
                <p className="firstScore">
                  {elem.first || 0}
                </p>
                <ul className="inner">
                  <p className="secondScore">
                    {elem.second || 0}
                  </p>
                </ul>
                <p className="roundTotal">
                  { elem.first + elem.second }
                </p>
              </ul>
            </li>
          </div>
        ))}
      </div>
    );
  }
}

export default Scores;
