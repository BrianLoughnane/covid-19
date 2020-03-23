import React from 'react';
import PropTypes from 'prop-types';
import {Multiselect } from 'multiselect-react-dropdown';

import './index.css';

export default class MyForm extends React.Component {
  static propTypes = {
    keys: PropTypes.array.isRequired,
    initialSelectedValues: PropTypes.array.isRequired,
    initialPeriodValue: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      locationSelectedValues: this.makeLocationOptions(props.initialSelectedValues),
      periodSelectedValue: this.makePeriodOption(props.initialPeriodValue),
    };
  }

  makeLocationOptions(keys) {
    return keys.map(key => ({key}));
  }

  makePeriodOption(num) {
    return {
      key: `Last ${num} days`,
      value: num,
    };
  }

  render() {
    const periodOptions = [3,7,10,14,21,30].map(this.makePeriodOption);
    const locationOptions = this.makeLocationOptions(this.props.keys);
    return (
      <div className={'center'}>
        <h3>{'Period'}</h3>
        <div className={`period-selector ${this.state.periodSelectedValue ? 'hide-placeholder' : ''}`}>
          <Multiselect
            closeIcon={'cancel'}
            displayValue={'key'}
            options={periodOptions}
            onSelect={(periodSelectedValue) => this.setState({periodSelectedValue})}
            onRemove={(periodSelectedValue) => this.setState({periodSelectedValue})}
            placeholder={'Period'}
            selectedValues={[this.state.periodSelectedValue]}
            singleSelect={true}
          />
        </div>

        <h3>{'Country / State'}</h3>
        <div className={'location-selector'}>
          <Multiselect
            closeIcon={'cancel'}
            displayValue={'key'}
            options={locationOptions}
            onSelect={(locationSelectedValues) => this.setState({locationSelectedValues})}
            onRemove={(locationSelectedValues) => this.setState({locationSelectedValues})}
            placeholder={'Country / State'}
            selectedValues={this.state.locationSelectedValues}
          />
        </div>
      </div>
    );
  }
}

