import React, { createContext ,Component } from "react";
import axios from 'axios';
export const UserContext = React.createContext();

// Define the base URL
const Axios = axios.create({
    baseURL: 'http://localhost/food/',
});

class UserContextProvider extends Component{
    constructor(){
        super();
        this.isLoggedIn();
    }

    // Root State
    state = {
        showLogin:true,
        isAuth:false,
        theUser:null,
    }

    // Toggle between Login & Signup page
    toggleNav = () => {
        const showLogin = !this.state.showLogin;
        this.setState({
            ...this.state,
            showLogin
        })
    }

    // On Click the Log out button
    logoutUser = () => {
        localStorage.removeItem('loginToken');
        this.setState({
            ...this.state,
            isAuth:false
        })
    }

    registerUser = async (user) => {

        // Sending the user registration request
        const register = await Axios.post('insert-user2.php',{
            user_name:user.username,
            user_email:user.email,
            user_password:user.password,
            user_type:user.usertype,
            password_check:user.passwordcheck
        });

        return register.data;
    }


    loginUser = async (user) => {

        // Sending the user Login request
        console.log(user.email);
        console.log(user.password);
        const login = await Axios.post('login-user.php',{
            email:user.email,
            password:user.password
        });
        console.log(login.data);
        console.log(typeof(login.data));
        return login.data;
    }

    // Checking user logged in or not
    isLoggedIn = async () => {
        const loginToken = localStorage.getItem('loginToken');

        // If inside the local-storage has the JWT token
        if(loginToken){

            //Adding JWT token to axios default header
            Axios.defaults.headers.common['Authorization'] = 'bearer '+loginToken;

            // Fetching the user information
            const {data} = await Axios.get('user-info.php');


            // If user information is successfully received
            if(data.success && data.user){
                this.setState({
                    ...this.state,
                    isAuth:true,
                    theUser:data.user
                });
            }

        }
    }

    render(){
        const contextValue = {
            rootState:this.state,
            toggleNav:this.toggleNav,
            isLoggedIn:this.isLoggedIn,
            registerUser:this.registerUser,
            loginUser:this.loginUser,
            logoutUser:this.logoutUser
        }
        return(
            <UserContext.Provider value={contextValue}>
                {this.props.children}
            </UserContext.Provider>
        )
    }

}

export default UserContextProvider;
