import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

class BtcChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDate = this.handleDate.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  handleDate() {
    const { last30Days } = this.props;
    const pastDates = Object.keys(last30Days);
    return pastDates;
  }

  handleData() {
    const { last30Days } = this.props;
    const dates = this.handleDate();
    const data = [];
    dates.forEach((elem) => {
      data.push(last30Days[elem]);
    });
    return data;
  }

  render() {
    return (
      <div>
        <Line data={
          {
            labels: this.handleDate(),
            datasets: [{
              label: 'Last 31 Days BTC Records',
              data: this.handleData(),
              backgroundColor: 'rgb(198, 253, 255, 0.5)',
            }],
          }
        }
        />
        <a href="https://www.coindesk.com/price/">
          Powered by CoinDesk
        </a>
      </div>
    );
  }
}

BtcChart.propTypes = {
  last30Days: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default BtcChart;
