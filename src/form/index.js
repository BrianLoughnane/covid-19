import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class MyForm extends React.Component {
  static propTypes = {
    keys: PropTypes.array.isRequired,
    locationSelectedValues: PropTypes.array.isRequired,
    periodSelectedValue: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      locationSelectedValues: props.locationSelectedValues,
      periodSelectedValue: props.periodSelectedValue,
    };
  }

  makeLocationOptions(keys) {
    return keys.map(key => ({key}));
  }

  makePeriodOption(value) {
    let key = 'All time';
    if (value !== 0) {
      key = `Last ${value} days`;
    }
    return {
      key,
      value,
    };
  }

  render() {
    const periodOptions = [3,7,10,14,21,30,60,0].map(this.makePeriodOption);
    const locationOptions = this.makeLocationOptions(this.props.keys);
    return (
      <div className={'center'}>
        <div className={'period-selector'}>
          <h3>{'Period'}</h3>
          <select
            onChange={(evnt) => this.onPeriodChange(evnt)}
            value={this.state.periodSelectedValue}>
            {periodOptions.map(opt => (
              <option key={opt.key} value={opt.value}>{opt.key}</option>
            ))}
          </select>
        </div>

        <div className={'location-selector'}>
          <CheckSheet
            heading={'Country / State'}
            options={locationOptions}
            onSubmit={(locationSelectedValues) => this.onLocationChange(locationSelectedValues)}
            selectedValues={this.state.locationSelectedValues}
          />
        </div>
      </div>
    );
  }

  onLocationChange(locationSelectedValues) {
    this.setState({locationSelectedValues}, this.onSubmit)
  }

  onPeriodChange(evnt) {
    this.setState({periodSelectedValue: Number(evnt.target.value)}, this.onSubmit);
  }

  onSubmit() {
    this.props.onSubmit({
      period: this.state.periodSelectedValue,
      locations: this.state.locationSelectedValues,
    });
  }
}

class CheckSheet extends React.Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    selectedValues: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    const state = {
      visible: props.visible,
    };
    props.options.forEach(option => state[option.key] = false);
    props.selectedValues.forEach(value => state[value] = true);
    this.setState(state);
  }

  onSubmit(e) {
    e.preventDefault();

    const visible = !this.state.visible;
    if (!visible) {
      const locations = Object.entries(this.state)
        .filter(([name, val]) => val && name !== 'visible')
        .map(([name, val]) => name)
      this.props.onSubmit(locations);
    }

    this.setState({
      visible,
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.checked;

    this.setState({
      [name]: value
    });
  }

  render() {
    const {
      heading,
      options,
    } = this.props;
    const containerClassName = this.state.visible ? '' : 'CheckSheet--hidden';
    return (
      <div>
        <h3>
          {heading}
          <button onClick={this.onSubmit}>
            {this.state.visible ? 'Update' : 'Select Locations'}
          </button>
        </h3>
        <div className={containerClassName}>
          {options.map(option => (
            <label key={option.key}>
              <input
                checked={this.state[option.key]}
                name={option.key}
                onChange={this.handleInputChange}
                type={'checkbox'} />
              {option.key}
            </label>
          ))}
        </div>
      </div>
    );
  }
}

