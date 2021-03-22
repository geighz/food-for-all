//<div>{theUser.email}</div>
import React, {useContext, useState} from 'react';
import {UserContext} from '../../contexts/UserContext';

// Importing the Login & Register Component
import HomeLogin from './HomeLogin';
import Registration from './Registration';
import DatePicker from 'react-date-picker';

function ShiftSelect(){

    const {rootState,logoutUser} = useContext(UserContext);
    const {isAuth,theUser,showLogin,showShiftSelect} = rootState;
    const [value, onChange] = useState(new Date());

    // If user Logged in
    if(isAuth)
    {
        return(
            <div className="ui container">
                <div className="ui small header"> Date Selected </div>
                <DatePicker
                  onChange={onChange}
                  value={value}
                />
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
