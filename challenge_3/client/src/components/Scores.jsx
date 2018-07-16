import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Scores extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { rounds } = this.props;
    const generateKey = pre => `${pre}_${new Date().getTime()}`;
    return (
      <div className="scoreboard">
        {rounds.map((elem, i) => (
          i < 9
            ? (
              <div className="row" key={generateKey(i)}>
                <li className="rounds">
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
            )
            : (
              <li key={generateKey(i)} className="lastRound">
                <ul className="lastOuter">
                  <ul className="lastInner1">
                    <p className="lastFirstScore">
                      {elem.first || 0}
                    </p>
                  </ul>
                  <ul className="lastInner2">
                    <p className="lastSecondScore">
                      {elem.second || 0}
                    </p>
                  </ul>
                  <ul className="lastInner3">
                    <p className="lastThirdScore">
                      {elem.third || 0}
                    </p>
                  </ul>
                  <p className="lastRoundTotal">
                    { elem.first + elem.second + elem.third }
                  </p>
                </ul>
              </li>
            )
        ))}
      </div>
    );
  }
}

Scores.propTypes = {
  rounds: PropTypes.arrayOf(PropTypes.shape({
    round: PropTypes.number,
    first: PropTypes.number,
    second: PropTypes.number,
  })).isRequired,
};

export default Scores;
