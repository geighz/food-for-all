
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/HomeLogin.css';
import { Field, reduxForm } from 'redux-form';
import AnimatedButton from '../subcomponents/AnimatedButton.js';

class HomeLogin extends React.Component{
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
      <input {...input} autoComplete = "off"/>
      {this.renderError(meta)}
      </div>
    );
  }
onSubmit(formValues){
  console.log(formValues);
}
  render(){
    return(
      <div className="ui container">
        <h1 className = "ui center aligned huge header">
          Welcome to the Food For All UK work space.
          <div className="sub header">Please Log in Below.</div>
        </h1>

        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className = "ui form error">
          <Field name="username" component={this.renderInput} label="Enter Username"/>
          <Field name="password" component={this.renderInput} label = "Enter Password"/>
          <button className="ui button primary"> Submit</button>
        </form>
        <h2 className = "ui center aligned big header">
          New Volunteer? Register Here.
          <Link to = "/registration" className="item">
            <AnimatedButton message ="Sign up!"/>
          </Link>
        </h2>
      </div>
      );
    }
  }

  const validate = (formValues) =>{
    const error = {};
    if (!formValues.username) {
      // only ran if the user did not enter a Username.
      error.username = 'Username field is missing.';
    }

    if(!formValues.password){
      error.password = "Password field is missing."
    }

    return error;
  };


export default reduxForm({
  form: 'HomeLogin',
  validate: validate
})(HomeLogin);
