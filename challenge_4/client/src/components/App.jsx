import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      grid: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
  }

  render() {
    const { grid } = this.state;
    return (
      <div>
        <table>
          <tbody>
            {grid.map(() => (
              <tr>
                <td>
                  0
                </td>
                <td>
                  0
                </td>
                <td>
                  0
                </td>
                <td>
                  0
                </td>
                <td>
                  0
                </td>
                <td>
                  0
                </td>
                <td>
                  0
                </td>
                <td>
                  0
                </td>
                <td>
                  0
                </td>
                <td>
                  0
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
