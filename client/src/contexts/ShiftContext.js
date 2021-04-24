import React, { createContext ,Component } from "react";
import axios from 'axios';
export const ShiftContext = React.createContext();

// Define the base URL
const Axios = axios.create({
    baseURL: 'http://localhost/food/',
});

class ShiftContextProvider extends Component{
    constructor(){
        super();
        this.isLoggedIn();
    }

    // Root State
    state = {
        showLogin:true,
    }

    // Toggle between Login & Signup page

    loginUser = async (user) => {
        // Sending the user Login request
        const login = await Axios.post('login-user.php',{
            email:user.email,
            password:user.password
        });
        return login.data;
    }

    showDateShifts = async (date) =>{
      const shifts = await Axios.get('show-date-shifts.php',{
            date_day:date.getDate(),
            date_month:date.getDate(),
            date_year:date.getFullYear(),
            date_time:date.getUTCHours()
        });

        return shifts.data;
    }


    }

    render(){
        const contextValue = {
            rootState:this.state,
            loginUser:this.loginUser,
            currentShifts:this.currentShifts
        }
        return(
            <ShiftContext.Provider value={contextValue}>
                {this.props.children}
            </ShiftContext.Provider>
        )
    }

}

export default UserContextProvider;
