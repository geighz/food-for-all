import React from 'react';
import {useRoutes, A} from 'hookrouter';
//import { BrowserRouter, Route } from 'react-router-dom';
//import {Provider} from '../context';
import UserContextProvider from '../contexts/UserContext';
import Header from './pages/Header';
import HomeLogin from './pages/HomeLogin';
import HomeSelect from './pages/HomeSelect';
//import ShiftConfirm from './pages/ShiftConfirm';
//import TaskCreate from './pages/TaskCreate';
//import TaskRead from './pages/TaskRead';
import Registration from './pages/Registration';

//import Actions from '../actions/actions';
/*

*/
/*
"/shift/confirm": () => <ShiftConfirm />,
"/shift/select": () => <ShiftSelect />,
"/task/read": () => <TaskRead />,
"/task/create": () => <ShiftConfirm />
*/
function App(){
  //const routeResult = useRoutes(routes);
    return(
      <UserContextProvider>
        <Header />
      </UserContextProvider>
    );
}

export default App;
