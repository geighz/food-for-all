//<div>{theUser.email}</div>
import React, {useContext, useState, useEffect, useRef} from 'react';
import {UserContext} from '../../contexts/UserContext';

// Importing the Login & Register Component
import HomeLogin from './HomeLogin';
import Registration from './Registration';
import DatePicker from 'react-date-picker';
import Accordion from '../subcomponents/Accordion';
import VirtualizedList from '../subcomponents/VirtualizedList';

const requests = [
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
    const [shifts, setShifts] = useState([]);

    const addShifts = () => {
      setShifts(s => [...s, " tacos "]);
    };
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
                <div className="ui grid">
                  <div className="three wide column">
                    <Accordion items={requests} />
                    <button className="addButton" onClick={addShifts}>
                    Add Shift
                    </button>
                  </div>
                  <div className = "six wide column">
                  <VirtualizedList />
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
