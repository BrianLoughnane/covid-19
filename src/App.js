import React from 'react';
import Papa from 'papaparse';
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
      locations: [
        'Italy',
        'Spain',
        'France - France',
        'US - New York',
      ],
      period: 30,
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.getData(this.state);
  }

  getData(configuration, top10) {
    window.fetch(dataUrl)
      .then(response => response.text())
      .then(body => this.parseRawData(body, configuration, top10))
  }

  parseRawData(rawData, configuration, top10) {
    const rows = Papa.parse(rawData).data
    const header = rows[0];
    const dataRows = rows.slice(1)
      .sort((a,b) => Number(a[header.length-1]) - Number(b[header.length-1]))
      .slice(-30)

    const tsOffset = 4;
    let offset = tsOffset;
    if (configuration.period !== 0) {
      offset = header.length - configuration.period;
    }
    const timestamps = header.slice(offset);

    let keys = new Set();
    const locations = new Set(configuration.locations);
    const data = timestamps.map((timestamp, idx) => {
      const datum = {
        timestamp,
      };
      dataRows.forEach(row => {
        const name = makeName(row);
        keys.add(name);
        if (locations.has(name)) {
          datum[name] = row[offset + idx];
        }
      });
      return datum;
    });
    keys = Array.from(keys);
    this.setState({
      ...configuration,
      data,
      keys,
    });
  }

  onSubmit(configuration) {
    this.getData(configuration);
  }

  render() {
    const {
      data,
      keys,
      locations,
      period,
    } = this.state;
    return (
      <div className="App">
        <h1 className="App-Header">COVID-19 Deaths</h1>
        <div className={'App-Form'}>
          <Form
            periodSelectedValue={period}
            locationSelectedValues={locations}
            keys={keys}
            onSubmit={this.onSubmit} />
        </div>
        <div className={'App-Chart-container'}>
          <div>
            <Chart
              data={data}
              keys={locations} />
          </div>
        </div>
      </div>
    );
  }
}

