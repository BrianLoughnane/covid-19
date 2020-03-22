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

export default class MyLineChart extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    keys: PropTypes.array.isRequired,
    colors: PropTypes.array,
  };

  static defaultProps = {
    colors: [
      '#ff8150',
      '#ffc139',
      '#5dffcf',
      '#3ef1fc',
      '#4ec9ff',
    ],
  };

  constructor() {
    super();
    this.state = {};
  }

  getColors() {
    const colors = cycle(Array.from(this.props.colors))
    const colorsByKey = {};
    this.props.keys.forEach(
      key => colorsByKey[key] = colors.next().value
    );
    return colorsByKey;
  }

  getMaxValue(data) {
    let max = 0;
    data.forEach(datum => {
      Object.entries(datum).forEach(([key, _val]) => {
        if (key === 'timestamp') {
          return;
        }
        const val = Number(_val);
        if (val > max) {
          max = val;
        }
      });
    });
    return max;
  }

  onDotEnter(point) {
    this.setState({
      activePoint: point,
    });
  }

  onDotLeave() {
    this.setState({
      activePoint: null,
    });
  }

  getTooltip() {
    const {activePoint} = this.state;
    if (activePoint) {
      return (
        <Tooltip content={() => (
            <span>
              {activePoint.dataKey}: {activePoint.value}
            </span>
          )
        } />
      );
    }
    return (<Tooltip />);
  }

  render() {
    const {data, keys} = this.props;
    const colorsByKey = this.getColors();
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
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="timestamp" />
        <YAxis domain={[0, this.getMaxValue(data)]}/>
        <Legend />
        {this.getTooltip()}
        {keys.map((key, idx) => (
          <Line
            activeDot={{
              onMouseOver:this.onDotEnter.bind(this),
              onMouseOut:this.onDotLeave.bind(this),
            }}
            type="monotone"
            dataKey={key}
            stroke={colorsByKey[key]}
            key={key} />
         ))}
      </LineChart>
    );
  }
}

