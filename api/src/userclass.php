<?php

//class to handle users
class user
{

//class properties. These are the properties (variables) used throughout our class
public $name;
      public function setName($name){
         $this->name = $name;
      }
      public function getName(){
         return $this->name;
      }

public $type;
      public function setUserType($type){
         $this->type = $type;
      }
      public function getUserType(){
         return $this->type;
      }

public $email;
      public function setEmail($email){
         $this->email = $email;
      }
      public function getEmail(){
         return $this->email;
      }

private $password;
      public function setPassword($password){
         $this->password = $password;
      }
      public function getPassword(){
         return $this->password;
      }


//function to register users, IE insert the details of new users to our database
function register ($name, $type, $email, $password)
{
  require "config.php";
  //set properties
  $this->setName($name);
  $this->setEmail($email);
  $this->setUserType($type);
  $this->setPassword($password);

  //check if the inserted email already exists in the database
  $emailCheck = $this->getEmail();
  $permit = $conn->prepare("SELECT * FROM users WHERE email = :email");
  $permit->bindParam(":email", $emailCheck);
  $permit->execute();
  $obj = $permit->fetchObject();

  //check if email exists, display error message, otherwise if it does not exist, insert the user's details into our database
  if ($obj) {
  //echo "Oops. It looks like you already have an account with us";
    $returnData = [
                    'success' => 0,
                    'message' => 'Oops. It looks like that email is already in use. Do you already have an account?',
                    'submessage' => 'That email is already in use.'
                ];
    return $returnData;
  }
  else {
    //prepare statements to insert users to the db.
    $reg = $conn->prepare("INSERT INTO users (username, type, email, password)
    VALUES (:name, :type, :email, :password)");

    $reg->bindParam(":name", $name);
    $reg->bindParam(":type", $type);
    $reg->bindParam(":email", $emailCheck);
    $reg->bindParam(":password", $password);

    return $reg->execute();
  }
}
function getUser(){
  if(isset($_SESSION)){
    $this->setName($_SESSION['username']);
    $this->setUserType($_SESSION['type']);
    return 1;
  }
  else{
    $returnData = [
                    'success' => 0,
                    'message' => 'User needs to re-login.'
                ];
    return $returnData;
  }
}
//login method
function login($email, $password) {
  require "config.php";
  $this->setEmail($email);
  $this->setPassword($password);

  //search for the entered email address
  $permit = $conn->prepare("SELECT * FROM users WHERE email = :email");
  $mail = $this->getEmail();
  $permit->bindParam(":email", $mail);
  $permit->execute();
  $obj = $permit->fetchObject();
  //Check if email exists.
  if ($obj) {
  //check if the password entered by the user corresponds to the password in the database
    if (password_verify($this->getPassword(), $obj->password)) {
    //if passwords match, it is safe to log the user in, therefore sessions can be set at this point
      $_SESSION['id'] = $obj->id;
      $_SESSION['username'] = $obj->username;
      $_SESSION['email'] = $obj->email;
      $_SESSION['type'] = $obj->type;

      //Success.
      $sId = $session_id();
      $returnData = [
                  'success' => 1,
                  'message' => 'Successful Login!',
                  'token' => $sId
              ];
            return $returnData;
      }
    else {
      //echo "Error logging you in. Please try again. If you continue experiencing difficulties, please contact webmaster. <a href = 'pseudologin.php'> Sign in</a>";
      //INCORRECT Password
          $returnData = [
                      'success' => 0,
                      'message' => 'Incorrect email or password.'
                  ];
                return $returnData;
    }
  }
    else {
      //INCORRECT Email
      $returnData = [
                      'success' => 0,
                      'message' => 'Incorrect email or password'
                  ];
      return $returnData;
    }
  }
}
