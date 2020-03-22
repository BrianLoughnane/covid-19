import React from 'react';
import PropTypes from 'prop-types';
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
} from 'recharts';

export default class MyLineChart extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    const {data} = this.props;
    return (
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 20,
          left: 10,
          bottom: 5 
        }}>
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#ff7300"
          yAxisId={0} />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#387908"
          yAxisId={1} />
      </LineChart>
    );
  }
}

