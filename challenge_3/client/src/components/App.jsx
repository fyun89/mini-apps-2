import React, { Component } from 'react';
import Scores from './Scores';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <h1>
          Bowling Scores
        </h1>
        <Scores />
      </div>
    );
  }
}

export default App;
