import React from 'react';
import Chart from './line-chart';
import './App.css';

const data = [
  {
    name: 'null',
    uv: 0,
    pv: 0,
  },
  {
    name: 'first',
    uv: 1,
    pv: 2,
  },
  {
    name: 'second',
    uv: 3,
    pv: 7,
  },
  {
    name: 'third',
    uv: 4,
    pv: 3,
  },
];

function App() {
  return (
    <div className="App">
      <div className={'App-Chart-container'}>
        <Chart
          data={data}
        />
      </div>
    </div>
  );
}

export default App;
