import React from 'react';
import PropTypes from 'prop-types';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {cycle} from '../utils';

const colors = cycle([
  '#ff8150',
  '#ffc139',
  '#5dffcf',
  '#3ef1fc',
  '#4ec9ff',
]);

export default class MyLineChart extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    keys: PropTypes.array.isRequired,
  };

  render() {
    const {data, keys} = this.props;
    return (
      <LineChart
        width={800}
        height={800}
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 10,
          bottom: 5 
        }}>
        <XAxis dataKey="timestamp" />
        <YAxis domain={[0, 10000]}/>
        <Legend />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        {keys.map((key, idx) => (
          <Line
            type="monotone"
            dataKey={key}
            stroke={colors.next().value}
            key={key} />
         ))}
      </LineChart>
    );
  }
}

