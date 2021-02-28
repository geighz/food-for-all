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
            <div className="userInfo">
                <div className="_img"><span role="img" aria-label="User Image">👦</span></div>
                <h1>{theUser.name}</h1>
                <div className="_email"><span>{theUser.email}</span></div>
                <div className="_email"><span>{theUser.username}</span></div>
                <button onClick={logoutUser}>Logout</button>
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
