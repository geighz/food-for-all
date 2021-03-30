//<div>{theUser.email}</div>
// Thu Mar 04 2021 14:19:50 GMT-0600 (Central Standard Time)
import React, {useContext, useState, useEffect, useRef} from 'react';
import {UserContext} from '../../contexts/UserContext';

// Importing the Login & Register Component
import HomeLogin from './HomeLogin';
import Registration from './Registration';
import DatePicker from 'react-datepicker';
import Accordion from '../subcomponents/Accordion';
import VirtualizedList from '../subcomponents/VirtualizedList';
import SimpleCard from '../subcomponents/SimpleCard';
//CSS
import "react-datepicker/dist/react-datepicker.css";

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
    //ShiftContext goes here.
    const [date, setDate] = useState(new Date());



    const [shifts, setShifts] = useState([]);

    const addShifts = () => {
      setShifts(s => [...s, " tacos "]);
    };

    const handleChange = date =>{
      console.log(date);
      var keys = Object.keys(date);
      console.log(typeof(date));
      console.log(keys);
      setDate(date);
      console.log(date.getDate())
     };

    // If user Logged in
    if(isAuth)
    {

        return(

            <div className="ui container">
                <div className="ui small header"> Date Selected: </div>
                <DatePicker
                    selected={date}
                    onChange={handleChange}
                />
                <div class="ui placeholder segment">

                  <div className="ui grid">
                    <div className="three wide column">
                      <div className="ui small header"> Pending Approval Shifts for Today: </div>
                        <Accordion items={requests} />
                    </div>
                    <div className = "six wide column">
                      <div className="ui small header">
                      Available shifts for: {date.getMonth() + 1}/
                      {date.getDate()}/
                      {date.getFullYear()}</div>
                      <VirtualizedList />
                    </div>
                    <div className ="two wide column">
                      <div className="ui small header"> Selected Shift: </div>
                      <SimpleCard />
                    </div>
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
