import React, {useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';

// Importing the Login & Register Component
import HomeLogin from './HomeLogin';
import Registration from './Registration';

import Accordion from '../subcomponents/Accordion';

const positions = [
  {
    title: 'HR Manager',
    content: 'In charge of being an Hr For people.',
    moreContent: 'Test to see how much I can put in.'
  },
];

const shifts = [
  {
    title: 'Packing Food',
    content: 'React is a front end javascript framework',
    moreContent: '12:00 Am to 1:00 PM'
  },
  {
    title: 'Delivering Food',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'Packing equipment for Volunteers',
    content: 'You use React by creating components'
  }
];

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
                        <Accordion items={positions} />
                  </div>
                  <div className="column">
                    <div className = "ui header">Upcoming Shifts</div>
                      <Accordion items={shifts} />
                  </div>
                </div>
                <div className="ui vertical divider">AND</div>
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
