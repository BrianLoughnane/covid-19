import React from 'react';
import Chart from './line-chart';
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
    const rows = rawData.split('\n');
    const header = rows[0];
    const tsOffset = 4;
    const timestamps = header.split(',').slice(tsOffset);

    const top10 = rows.slice(1, 50).map(str => str.split(','));
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
        <h1 className="App-Header"> COVID-19 Curve by Country / State </h1>
        <div className={'App-Chart-container'}>
          <Chart
            data={data}
            keys={keys}
          />
        </div>
      </div>
    );
  }
}

