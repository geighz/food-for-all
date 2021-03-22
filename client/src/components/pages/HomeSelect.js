import React, {useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';

// Importing the Login & Register Component
import HomeLogin from './HomeLogin';
import Registration from './Registration';

import Accordion from '../subcomponents/Accordion';

function HomeSelect(){

    const {rootState,logoutUser} = useContext(UserContext);
    const {isAuth,theUser,showLogin,showShiftSelect} = rootState;

    // If user Logged in
    if(isAuth)
    {
        return(
          <div className = "ui container">
            <div className = "ui centered header">{theUser.username}&#39;s Food For All-UK Dashboard</div>
              <div className="ui segment">
                <div className="ui two column very relaxed grid">
                  <div className="column">
                    <div className = "ui header">Current Positions</div>
                        <p>AccordionLeft1</p>
                        <p>AccordionLeft2</p>
                  </div>
                  <div className="column">
                    <div className = "ui header">Upcoming Shifts</div>
                    <p>AccordionRight1</p>
                    <p>AccordionRight2</p>
                  </div>
                </div>
                <div className="ui vertical divider">And</div>
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
