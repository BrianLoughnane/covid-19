import React from 'react';
import Chart from './line-chart';
import Form from './form';
import './App.css';

const dataUrl = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv"

function makeName(row) {
  const state = row[0];
  const country = row[1];

  if (country && state) {
    return `${country} - ${state}`
  } else if (country) {
    return country;
  } else if (state) {
    return state;
  }
  return '???';
}
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      keys: [],
    }
  }

  componentWillMount() {
    this.getData();
  }

  getData() {
    window.fetch(dataUrl)
      .then(response => response.text())
      .then(body => this.parseRawData(body))
  }

  parseRawData(rawData) {
    const rows = rawData.split('\n').map(str => str.split(','));
    const header = rows[0];
    const tsOffset = 4;
    const timestamps = header.slice(tsOffset);

    const len = rows[0].length;
    const sorted = rows
      .filter(row => row[len-1])
      .sort((a,b) => {
        const first = Number(a[len-1]);
        const second = Number(b[len-1]);
        return first - second;
      });
    const top10 = sorted.slice(-10);

    const keys = top10.map(row => makeName(row));

    const dataRows = timestamps.map((timestamp, idx) => {
      const ret = {
        timestamp,
      };
      top10.forEach(row => {
        ret[makeName(row)] = row[idx + tsOffset];
      });
      return ret;
    })
    const data = dataRows;
    this.setState({
      data,
      keys,
    });
  }

  render() {
    const {data, keys} = this.state;
    return (
      <div className="App">
        <h1 className="App-Header">
          COVID-19 Deaths by Country / State
        </h1>
        <div className={'App-Form'}>
          <Form />
        </div>
        <div className={'App-Chart-container'}>
          <div>
            <Chart
              data={data}
              keys={keys}
            />
          </div>
        </div>
      </div>
    );
  }
}

