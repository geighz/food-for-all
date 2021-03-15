/*import React from 'react';
import Axios from 'axios';
class Actions extends React.Component{
    state = {
        users:[]
    }

    // FETCH USERS FROM DATABASE
    fetchUsers = () => {
        Axios.get('http://localhost/php-react/all-users.php')
        .then(({data}) => {
            if(data.success === 1){
                this.setState({
                    users:data.users.reverse()
                });
            }
        })
        .catch(error => {
            console.log(error);
        })
    }


     // ON EDIT MODE
     editMode = (id) => {
        let users = this.state.users.map(user => {
            if(user.id === id){
                user.isEditing = true;
                return user;
            }
            user.isEditing = false;
            return user;
        });

        this.setState({
            users
        });
    }

    //CANCEL EDIT MODE
    cancelEdit = (id) => {
        let users = this.state.users.map(user => {
            if(user.id === id){
                user.isEditing = false;
                return user;
            }
            return user

        });
        this.setState({
            users
        });
    }

    // UPDATE USER
    handleUpdate = (id,user_name,user_email) => {
        Axios.post('http://localhost/php-react/update-user.php',
        {
            id:id,
            user_name:user_name,
            user_email:user_email
        })
        .then(({data}) => {
            if(data.success === 1){
                let users = this.state.users.map(user => {
                    if(user.id === id){
                        user.user_name = user_name;
                        user.user_email = user_email;
                        user.isEditing = false;
                        return user;
                    }
                    return user;
                });
                this.setState({
                    users
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }


    // DELETE USER
    handleDelete = (id) => {
        let deleteUser = this.state.users.filter(user => {
            return user.id !== id;
        });

        Axios.post('http://localhost/php-react/delete-user.php',{
            id:id
        })
        .then(({data}) => {
            if(data.success === 1){
                this.setState({
                    users:deleteUser
                });
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }
    //Login user
    loginUser = (user_email,user_password) => {
          Axios.post('http://localhost/food/login-user.php',{
              user_email:user_email,
              user_password:user_password
          })
          .then(function ({data}) {
              if(data.success === 1){
                  this.setState({
                      users:[
                          {"id":data.id,
                            "user_email":user_email,
                            "user_password":user_password
                            },
                          ...this.state.users
                      ]
                  });
              }
              else{
                  alert(data.msg);
              }
          }.bind(this))
          .catch(function (error) {
              console.log(error);
          });
      }
*/
    // INSERT USER Test
/*
    insertUser = (user_name,user_email,user_password,user_type,password_check) => {
      Axios.post('http://localhost/food/insert-userTest.php',{
              user_name:user_name,
              user_email:user_email
          })
          .then(function ({data}) {
              if(data.success === 1){
                  this.setState({
                      users:[
                          {"id":data.id,"user_name":user_name,"user_email":user_email},
                          ...this.state.users
                      ]
                  });
              }
              else{
                  alert(data.msg);
              }
          }.bind(this))
          .catch(function (error) {
              console.log(error);
          });
      }
  }
*/
  /*
    insertUser = async (user_name,user_email,user_password,user_type,password_check) => {
          const register = await Axios.post('http://localhost/food/insert-user2.php',{
              user_name:user_name,
              user_email:user_email,
              user_password:user_password,
              user_type:user_type,
              password_check:password_check
          })

          return register.data;
      }
    */

    /*
    .then(function ({data}) => {
        if(data.success === 1){
            this.setState({
                users:[
                    {"id":data.id,
                      "user_name":user_name,
                      "user_email":user_email,
                      "user_password":user_password,
                      "user_type":user_type,
                      "password_check":password_check},
                    ...this.state.users
                ]
            });
        }
        else{
            alert(data.msg);
        }
    }.bind(this))
    .catch(function (error) {
        console.log(error);
    });
    */

/*

  export default Actions;
*/
