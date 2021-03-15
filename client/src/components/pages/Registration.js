/*
<form onSubmit={submitForm} noValidate>
<label>Create Username</label>
<input name="username" required type="text" value={state.userInfo.user_name} placeholder ="Create Username"/>
<label>Create Email</label>
<input name="email" required type="email" value={state.userInfo.user_email} placeholder = "Email"/>
<label>Select Type</label>
<select onChange={onChangeValue} value={state.userInfo.user_type} placeholder = "Type of Member">
     <option value="Single Volunteer or Volunteer Group">Single Volunteer or Volunteer Group</option>
     <option value="Client or Client Group in Need">Client or Client Group In Need</option>
</select>
<label>Create Password</label>
<input name="password" required type="password" value={state.userInfo.user_password} placeholder = "Create Password"/>
<label>Confirm Password</label>
<input name="passwordCheck" required type="password" value={state.userInfo.password_check} placeholder = "Confirm Password"/>
  {errorMsg}
  {successMsg}
<button className="ui button primary">Submit</button>
</form>
*/


import React, {useContext,useState} from 'react';
import axios from 'axios';

import {UserContext} from '../../contexts/UserContext';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';
import AnimatedButton from '../subcomponents/AnimatedButton.js';

const types = [ { type: 'Single Volunteer or Volunteer Group', value: '1' },
{ type: 'Client or Client Group in Need', value: '2' } ]

function Registration(){
    const {toggleNav,registerUser} = useContext(UserContext);
    const initialState = {
        userInfo:{
            username:'',
            email:'',
            password:'',
            usertype:'Single Volunteer or Volunteer Group',
            passwordcheck:'',
        },
        errorMsg:'',
        successMsg:'',
    }
    const [state,setState] = useState(initialState);

    // On Submit the Registration Form
    const submitForm = async (event) => {
        event.preventDefault();

        const data = await registerUser(state.userInfo);

        if(data.success){
            console.log("Success, lets see the message");
            console.log(data.message);
            setState({
                ...initialState,
                successMsg:data.message,
            });
        }
        else{
          console.log("Lets see the failure");
          console.log(data.message);
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // On change the Input Value (name, email, password...)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });

    }



    // Show Message on Success or Error
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="ui negative message">
          <div className="header">{state.errorMsg}</div>
          Make sure to check all fields throughly.
        </div>;
    }
    if(state.successMsg){
        successMsg = <div className="ui info message">
          <div className="header">{state.successMsg}</div>
          You may now login with the email you have chosen.
        </div>;
    }

    return(
        <div className="ui container">
          <h1 className = "ui center aligned huge header">
            Glad to have you on board! Time to Register.
            <div className="sub header">Please fill out the information below.</div>
          </h1>
          <div class="ui placeholder segment">
            <div class="ui column very relaxed stackable grid">
              <div class="middle aligned column">
                  <form className= "ui form"onSubmit={submitForm} noValidate>
                      <div className="field">
                          <label>Create Username</label>
                          <input name="username" required type="text" value={state.userInfo.username} onChange={onChangeValue} placeholder ="Create Username"/>
                      </div>
                      <div className="field">
                          <label>Email Address</label>
                          <input name="email" required type="email" value={state.userInfo.email} onChange={onChangeValue} placeholder="Enter your email"/>
                      </div>
                      <div className="field">
                        <label>Type of Member</label>
                      <select name="usertype" type="select" value={state.userInfo.usertype} onChange={onChangeValue} placeholder = "Type of Member">
                           <option value="Single Volunteer or Volunteer Group">Single Volunteer or Volunteer Group</option>
                           <option value="Client or Client Group in Need">Client or Client Group In Need</option>
                      </select>
                      </div>
                      <div className="field">
                          <label>Create Password</label>
                          <input name="password" required type="password" value={state.userInfo.password} onChange={onChangeValue} placeholder="Enter your password"/>
                      </div>
                      <div className="field">
                      <label>Confirm Password</label>
                      <input name="passwordcheck" required type="password" value={state.userInfo.passwordcheck} onChange={onChangeValue} placeholder = "Confirm Password"/>
                      </div>
                      {errorMsg}
                      {successMsg}
                      <div className="form-control">
                          <button className="ui button primary" type="submit">Sign Up</button>
                      </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="_navBtn">
                <button className="ui button" onClick={toggleNav}>
                  <AnimatedButton
                    message = "Back to Login"
                    direction = "left"/>
              </button>
            </div>
      </div>
    );
}

export default Registration;
