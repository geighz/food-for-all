//<button onClick={logoutUser}>Logout</button>
//{theUser.username}
import React, {useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';
import { useRoutes, A } from "hookrouter";


// Importing the Login & Register Component
import HomeSelect from './HomeSelect';
import HomeLogin from './HomeLogin';
import Registration from './Registration';
import ShiftSelect from './ShiftSelect';
import TaskRead from './TaskRead'

function Header(){

    const {rootState,logoutUser} = useContext(UserContext);
    const {isAuth,theUser,showLogin} = rootState;
    const routes = {
      "/ShiftSelect": () => <ShiftSelect />,
      "/TaskRead":() => <TaskRead />,
      "/HomeSelect":() => <HomeSelect />
    };

    const routeResult = useRoutes(routes);
    // If user Logged in
    if(isAuth)
    {
        return(
            <div className="ui container">
                <div className = "ui inverted menu">
                  <A className = "item" href ="/HomeSelect">
                    Home
                  </A>
                  <A className = "item" href="/ShiftSelect" >
                    Shifts
                  </A>
                  <A className = "item" href = "/TaskRead">
                    Positions
                  </A>
                  <a className="item right" onClick={logoutUser}>
                    Logout
                  </a>
                </div>
              {routeResult || <HomeSelect/>}
            </div>
        )
    }
    // Showing Login Or Register Page According to the condition
    else if(showLogin){
        return <HomeLogin/>;
    }
    else{
        return <Registration/>;
    }

}

export default Header;
