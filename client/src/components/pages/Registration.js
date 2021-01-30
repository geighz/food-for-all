import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import {AppContext} from '../../context';

import DropdownList from 'react-widgets/lib/DropdownList'
import 'react-widgets/dist/css/react-widgets.css';
import axios from 'axios';

const types = [ { type: 'Single Volunteer or Volunteer Group', value: '1' },
{ type: 'Client or Client Group in Need', value: '2' } ]


class Registration extends React.Component {
  static contextType = AppContext;

  renderError({error, touched}){
    if (touched && error){
      return(
        <div className = 'ui error message'>
          <div className = "header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) =>{
    const className = `field ${meta.error && meta.touched ? 'error': ''}`;
    return(
      <div className = {className}>
      <label>{label}</label>
      <input {...input} autoComplete = "off" />
      {this.renderError(meta)}
      </div>
    );
  }
  renderDropdownList = ({ input, data, valueField, textField, label }) =>{
  return(
    <div className = 'field'>
      <label>{label}</label>
      <DropdownList {...input}
        label = {label}
        data= {data}
        valueField={valueField}
        textField={textField}
        onChange={input.onChange} />
      </div>
    );
  }

  onSubmit = (formValues) =>{
    //console.log(formValues);
    console.log(formValues.username)
    console.log(formValues.email)
    console.log(formValues.password)
    console.log(formValues.type.type)

    this.context.insertUser(formValues.username,formValues.email,formValues.password,formValues.type.type);
  }

  render(){
  return (
    <div className="ui container">
      <h1 className = "ui center aligned huge header">
        Glad to have you on board! Time to Register.
        <div className="sub header">Fill out the information below.</div>
      </h1>
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className = "ui form error">
      <Field name="username" component={this.renderInput} label="Create Username"/>
      <Field name="email" component={this.renderInput} label = "Email"/>
      <Field
          name="type"
          component={this.renderDropdownList}
          data={types}
          valueField="value"
          textField="type"
          label = "Type of Member"/>
      <Field name="password" component={this.renderInput} label = "Create Password"/>
      <Field name="passwordCheck" component={this.renderInput} label = "Confirm Password"/>
      <button className="ui button primary">Submit</button>
      </form>
    </div>
  );
  }
};

const validate = (formValues) =>{
  const error = {};
  if (!formValues.username) {
    // only ran if the user did not enter a Username.
    error.username = 'Username field is missing.';
  }
  if(!formValues.password){
    error.password = "Password field is missing.";
  }
  if(!formValues.email){
    error.email = "Email field is missing.";
  }
  if(formValues.password != formValues.passwordCheck){
    error.passwordCheck = "Passwords do not match.";
  }

  return error;
};

//export default Registration;
//Potentially using redux.
//Due to Tawanda's expertise being stronger in Php, I will be using Php as the
//End Point.

export default reduxForm({
  form: 'Registration',
  validate: validate
})(Registration);
