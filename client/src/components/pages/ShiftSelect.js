//<div>{theUser.email}</div>
import React, {useContext, useState} from 'react';
import {UserContext} from '../../contexts/UserContext';

// Importing the Login & Register Component
import HomeLogin from './HomeLogin';
import Registration from './Registration';
import DatePicker from 'react-date-picker';
import Accordion from '../subcomponents/Accordion';

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

function ShiftSelect(){

    const {rootState,logoutUser} = useContext(UserContext);
    const {isAuth,theUser,showLogin,showShiftSelect} = rootState;
    const [value, onChange] = useState(new Date());

    // If user Logged in
    if(isAuth)
    {
        return(
            <div className="ui container">
                <div className="ui small header"> Date Selected: </div>
                <DatePicker
                  onChange={onChange}
                  value={value}
                />
                <div className="ui small header"> Requested unconfirmed Shifts: </div>
                <div class="ui grid">
                  <div class="four wide column">
                    <Accordion items={shifts} />
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

export default ShiftSelect;
