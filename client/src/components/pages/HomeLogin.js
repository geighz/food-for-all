/*
<form onSubmit={this.props.handleSubmit(this.onSubmit)} className = "ui form error">
  <Field name="email" component={this.renderInput} label="Enter Email"/>
  <Field name="password" component={this.renderInput} label = "Enter Password"/>
  <button className="ui button primary">Submit</button>
</form>

<A href="/registration">
  <AnimatedButton message ="Sign up!"/>
</A>

*/
import React, {useContext, useState} from 'react';
//import {AppContext} from '../../context';
//import { Field, reduxForm } from 'redux-form';
import {useRoutes, A} from 'hookrouter';
import HomeSelect from './HomeSelect';
import Registration from './Registration';
import '../../css/HomeLogin.css';
import AnimatedButton from '../subcomponents/AnimatedButton.js';
import {UserContext} from '../../contexts/UserContext';

const routes = {
  "/": () => <HomeSelect />,
  "/registration": () => <Registration />,
  "/login": () => <HomeLogin />
};

function HomeLogin (){

const {toggleNav,loginUser,isLoggedIn} = useContext(UserContext);

    const initialState = {
        userInfo:{
            email:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
    }

    const [state,setState] = useState(initialState);


const submitForm = async (event) => {
        event.preventDefault();
        const data = await loginUser(state.userInfo);
        if(data.success && data.token){
            setState({
                ...initialState,
            });
            localStorage.setItem('loginToken', data.token);
            await isLoggedIn();
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // On change input value (email & password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }
    // Show Message on Error or Success
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }


    return(
      <div className="ui container">
        <h1 className = "ui center aligned huge header">
          Welcome to the Food For All-UK Work Space.
          <div className="sub header">Please Log in Below.</div>
        </h1>
        <div class="ui placeholder segment">
          <div class="ui column very relaxed stackable grid">
            <div class="middle aligned column">
              <form  className = "ui form" onSubmit={submitForm} noValidate>
                <div className="field">
                    <label>Email: </label>
                    <div className="ui left icon input">
                    <input name="email" type="email" required placeholder="Enter your email" value={state.userInfo.email} onChange={onChangeValue} />
                    <i class="user icon"></i>
                    </div>
                </div>
                <div className="field">
                      <label>Password:</label>
                      <div className="ui left icon input">
                        <input name="password" type="password" required placeholder="Enter your password" value={state.userInfo.password} onChange={onChangeValue} />
                        <i class="lock icon"></i>
                      </div>
                </div>
                {errorMsg}
                {successMsg}
                <div className="form-control">
                    <button className="ui button primary" type="submit">Login</button>
                </div>
            </form>
          </div>
          </div>
          </div>
        <h2 className = "ui center aligned big header">
          New Volunteer? Register Here.

          <div className="middle aligned column">
                <button className="ui button" onClick={toggleNav}>
                  <AnimatedButton
                    message = "Sign Up !"
                    direction = "right"/>
                </button>
            </div>
          </h2>
      </div>
      );
  }

export default HomeLogin;
