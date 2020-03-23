import React from 'react';
import PropTypes from 'prop-types';
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import { Multiselect } from 'multiselect-react-dropdown';

import './index.css';

export default class MyForm extends React.Component {
  static propTypes = {
    keys: PropTypes.array.isRequired,
    initialSelectedValues: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedValues: this.makeKeys(props.initialSelectedValues),
    };
  }

  makeKeys(keys) {
    return keys.map(key => ({key}));
  }

  render() {
    console.log(this.state);
    const options = this.makeKeys(this.props.keys);
    return (
      <div className={'center'}>
        <h3>{'Country / State'}</h3>
        <div>
          <Multiselect
            closeIcon={'cancel'}
            displayValue={'key'}
            options={options}
            onSelect={(selectedValues) => this.setState({selectedValues})}
            onRemove={(selectedValues) => this.setState({selectedValues})}
            placeholder={'Country / State'}
            selectedValues={this.state.selectedValues}
          />
        </div>
      </div>
    );
  }
}

//export default class MyForm extends React.Component {
  //static defaultProps = {
    //initialValues: {
      //period: 14,
    //},
  //}

  //validate(values) {
    //const errors = {};
    //return errors;
  //}

  //onSubmit(values, formMetaData) {
    //console.log(values);
    //return values;
  //}

  //render() {
    //const {initialValues} = this.props;
    //return (
      //<div>
        //<Formik
          //initialValues={initialValues}
          //validate={this.validate}
          //onSubmit={this.onSubmit}>
          //{(formMetaData) => (
            //<Form>
              //<div className={'Form-field-container clearfix'}>
                //<div className={'left'}>
                  //<label htmlFor="period">Period</label>
                //</div>
                //<div className={'right'}>
                  //<Field name="period" as={'select'}>
                    //<option value={7}>Last 7 Days</option>
                    //<option value={14}>Last 14 Days</option>
                    //<option value={30}>Last 30 Days</option>
                  //</Field>
                //</div>
                //<ErrorMessage name="period" component="div" />
              //</div>

              //<div className={'Form-field-container clearfix'}>
                //<div className={'left'}>
                  //<label htmlFor="country">Country</label>
                //</div>
                //<div className={'right'}>
                  //<Field name="country" as={'select'}>
                    //<option value={'US'}>U.S.A.</option>
                    //<option value={'CH'}>China</option>
                  //</Field>
                //</div>
                //<ErrorMessage name="country" component="div" />
              //</div>

              //<div className={'Form-field-container clearfix'}>
                //<div className={'left invisible'}>{'foo'}</div>
                //<div className={'right'}>
                  //<button type="submit">
                    //Submit
                  //</button>
                //</div>
              //</div>
            //</Form>
          //)}
        //</Formik>
      //</div>
    //);
  //}
//}

//export default class MyForm extends React.Component {
  //constructor(props) {
    //super(props);
    //this.state = {
      //values: ['coconut']
    //};

    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  //}

  //handleChange(event) {
    //const previouslySelected = this.state.values;
    //const value = event.target.value;

    //let values;
    //if (previouslySelected.indexOf(value) > -1) {
      //values = previouslySelected.filter(val => val !== value);
    //} else {
      //values = previouslySelected.concat([value]);
    //}

    //this.setState({values});
  //}

  //handleSubmit(event) {
    //event.preventDefault();
    //console.log(this.state);
  //}

  //render() {
    //return (
      //<form onSubmit={this.handleSubmit}>
        //<label>
          //Pick your favorite flavor:
          //<select multiple={true} value={this.state.values} onChange={this.handleChange}>
            //<option value="grapefruit">Grapefruit</option>
            //<option value="lime">Lime</option>
            //<option value="coconut">Coconut</option>
            //<option value="mango">Mango</option>
          //</select>
        //</label>
        //<input type="submit" value="Submit" />
      //</form>
    //);
  //}
//}
