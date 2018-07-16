import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Scores extends Component {
  constructor() {
    super();
    this.state = {
      grandTotal: 0,
    };
    //this.handleCalculate = this.handleCalculate.bind(this)
  }

  componentDidUpdate() {
    let value = 0;
    let { grandTotal } = this.state
    console.log('componentdidupdate')
    document.querySelectorAll('.roundTotal').forEach((elem) => {
      value += Number(elem.innerHTML);
    });
    document.querySelectorAll('.lastRoundTotal').forEach((elem) => {
      value += Number(elem.innerHTML);
    });
    //return value;
    if (grandTotal !== value) {
      this.setState({ grandTotal: value });
    }
  }

  render() {
    const { rounds } = this.props;
    const { grandTotal } = this.state;
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
                    <p className="roundTotal" id="roundTotal">
                      { elem.first + elem.second === 20
                        ? elem.first + elem.second + 10
                        : elem.first + elem.second
                      }
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
                  <p className="lastRoundTotal" id="lastRoundTotal">
                    { (elem.first || elem.second) === 10
                      ? elem.first + elem.second + elem.third
                      : elem.first + elem.second
                    }
                  </p>
                </ul>
              </li>
            )
        ))}
        <div className="grandTotalContainer">
          <p className="grandTotalText">
            Score
          </p>
          <div className="grandTotalScore">
            <p className="grandTotalScoreText">
              { grandTotal }
            </p>
          </div>
        </div>
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
