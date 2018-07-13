import React, { Component } from 'react';
import axios from 'axios';
import BtcChart from './BtcChart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
    this.generateDate = this.generateDate.bind(this);
  }

  componentDidMount() {
    const currentThis = this;

    axios.get('https://api.coindesk.com/v1/bpi/historical/close.json') // last 31 days' worth data
      .then((res) => {
        console.log(res);
        currentThis.setState({ data: res.data.bpi });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  generateDate() {
    this.date = new Date();
    const month = this.date.getMonth() + 1;
    const day = this.date.getDay();
    const year = this.date.getFullYear();
    const today = `${year}-${month}-${day}`;
    return today;
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        {
          !data ? (
            <div>
            Loading
            </div>
          )
            : (
              <div>
                <BtcChart last30Days={data} />
              </div>
            )
        }
      </div>
    );
  }
}

export default App;
