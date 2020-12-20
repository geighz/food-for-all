import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import DropdownList from 'react-widgets/lib/DropdownList'
import 'react-widgets/dist/css/react-widgets.css';

const types = [ { type: 'Single Volunteer or Volunteer Group', value: '1' },
{ type: 'Hub', value: '2' } ]


class Registration extends React.Component {

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

  onSubmit(formValues){
    console.log(formValues);
  }

constructor(props) {  
    super(props)  
    this.state = {  
        username: '',  
        email: '',  
        type: '',  
        password: '',  
        passwordCheck: ''  
    }  
}  

  render(){
  return (
    <div className="ui container">
      <h1 className = "ui center aligned huge header">
        Glad to have you on board! Time to Register.
        <div className="sub header">Fill out the information below.</div>
      </h1>
<form action="register.php" onSubmit={this.handleSubmit.bind(this)} method="POST">
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

export default reduxForm({
  form: 'Registration',
  validate: validate
})(Registration);
