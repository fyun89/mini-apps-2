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

Scores.propTypes = {
  rounds: PropTypes.arrayOf(PropTypes.shape({
    round: PropTypes.number,
    first: PropTypes.number,
    second: PropTypes.number,
  })).isRequired,
};

export default Scores;
