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


    }

    render(){
        const contextValue = {
            rootState:this.state,
            loginUser:this.loginUser
        }
        return(
            <ShiftContext.Provider value={contextValue}>
                {this.props.children}
            </ShiftContext.Provider>
        )
    }

}

export default UserContextProvider;
