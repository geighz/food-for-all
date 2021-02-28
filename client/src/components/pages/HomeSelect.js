//<button onClick={logoutUser}>Logout</button>
//{theUser.username}
import React, {useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';

// Importing the Login & Register Component
import HomeLogin from './HomeLogin';
import Registration from './Registration';

function HomeSelect(){

    const {rootState,logoutUser} = useContext(UserContext);
    const {isAuth,theUser,showLogin} = rootState;

    // If user Logged in
    if(isAuth)
    {
        return(
            <div className="ui container">
                <div className = "ui secondary pointing menu">
                  <a class="item">
                    Home
                  </a>
                  <a class="item">
                    Shifts
                  </a>
                  <a class="item">
                    Positions
                  </a>
                </div>
                <div className = "ui centered header">{theUser.username}</div>
                <div class="ui segment">
                <div class="ui two column very relaxed grid">
                  <div class="column">
                    <div className = "ui header">Left Header</div>
                    <p>Left1</p>
                    <p>Left2</p>
                  </div>
                  <div class="column">
                    <div className = "ui header">Right Header</div>
                    <p>Right1</p>
                    <p>Right2</p>
                  </div>
                </div>
                <div class="ui vertical divider">
                </div>
              </div>
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

export default HomeSelect;
