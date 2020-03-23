import React from 'react';
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import './index.css';

export default class MyForm extends React.Component {
  static defaultProps = {
    initialValues: {
      period: 14,
    },
  }

  validate(values) {
    const errors = {};
    return errors;
  }

  onSubmit(values, formMetaData) {
    console.log(values);
    return values;
  }

  render() {
    const {initialValues} = this.props;
    return (
      <div>
        <Formik
          initialValues={initialValues}
          validate={this.validate}
          onSubmit={this.onSubmit}>
          {(formMetaData) => (
            <Form>
              <div className={'Form-field-container clearfix'}>
                <div className={'left'}>
                  <label htmlFor="period">Period</label>
                </div>
                <div className={'right'}>
                  <Field name="period" as={'select'}>
                    <option value={7}>Last 7 Days</option>
                    <option value={14}>Last 14 Days</option>
                    <option value={30}>Last 30 Days</option>
                  </Field>
                </div>
                <ErrorMessage name="period" component="div" />
              </div>

              <div className={'Form-field-container clearfix'}>
                <div className={'left'}>
                  <label htmlFor="country">Country</label>
                </div>
                <div className={'right'}>
                  <Field name="country" as={'select'}>
                    <option value={'US'}>U.S.A.</option>
                    <option value={'CH'}>China</option>
                  </Field>
                </div>
                <ErrorMessage name="country" component="div" />
              </div>

              <div className={'Form-field-container clearfix'}>
                <div className={'left invisible'}>{'foo'}</div>
                <div className={'right'}>
                  <button type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

