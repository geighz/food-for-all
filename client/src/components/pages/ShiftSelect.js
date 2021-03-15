import React, {useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';

// Importing the Login & Register Component
import HomeLogin from './HomeLogin';
import Registration from './Registration';

function ShiftSelect(){

    const {rootState,logoutUser} = useContext(UserContext);
    const {isAuth,theUser,showLogin,showShiftSelect} = rootState;

    // If user Logged in
    if(isAuth)
    {
        return(
            <div className="ui container">
                <div>{theUser.email}</div>
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
