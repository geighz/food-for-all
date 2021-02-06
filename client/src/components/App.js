import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from '../context';

import Header from './Header';
import HomeLogin from './pages/HomeLogin';
import HomeSelect from './pages/HomeSelect';
import ShiftConfirm from './pages/ShiftConfirm';
import ShiftSelect from './pages/ShiftSelect';
import TaskCreate from './pages/TaskCreate';
import TaskRead from './pages/TaskRead';
import Registration from './pages/Registration';
//import AllUsers from './components/GetUsers';
//import insertUser from './components/insertUser';
import Actions from '../actions/actions';
class App extends Actions{
  render(){
    const contextValue = {
        insertUser:this.insertUser,
        loginUser:this.loginUser
    }
    return(
      <Provider value={contextValue}>
        <div className = "ui container">
          <BrowserRouter>
            <div>
              <Route path="/" exact component={HomeSelect}/>
              <Route path="/registration" exact component={Registration}/>
              <Route path="/login" exact component={HomeLogin}/>
              <Route path="/shift/confirm" exact component={ShiftConfirm}/>
              <Route path="/shift/select" exact component={ShiftSelect}/>
              <Route path="/task/read" exact component={TaskRead}/>
              <Route path="/task/create" exact component={TaskCreate}/>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
