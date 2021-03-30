import React, {useContext,useState} from 'react';
import {UserContext} from '../../contexts/UserContext';
//<div>{theUser.username}</div>
// Importing the Login & Register Component
import HomeLogin from './HomeLogin';
import Registration from './Registration';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

function TaskRead(){

const {rootState,logoutUser} = useContext(UserContext);
const {isAuth,theUser,showLogin,showShiftSelect} = rootState;
const [date, setDate] = useState(new Date());
// If user Logged in
const handleChange = date => setDate(date);

if(isAuth)
{
    return(


            <DatePicker
                selected={date}
                onChange={handleChange}
            />

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

export default TaskRead;
