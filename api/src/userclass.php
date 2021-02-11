<?php

//class to handle users
class user
{

//class properties. These are the properties (variables) used throughout our class
private $name;
      public function setName($name){
         $this->name = $name;
      }
      public function getName(){
         return $this->name;
      }

private $type;
      public function setUserType($type){
         $this->type = $type;
      }
      public function getUserType(){
         return $this->type;
      }

private $email;
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
echo "Oops. It looks like you already have an account with us";
}
else {
//prepare statements to insert users to the db.
$reg = $conn->prepare("INSERT INTO users (username, type, email, password)
VALUES (:name, :type, :email, :password)");
//assign properties that will give fields their data
//$name1 = $this->getName();
//$type1 = $this->getUserType();
//$pass1 = $this->getPassword();

$reg->bindParam(":name", $name);
$reg->bindParam(":type", $type);
$reg->bindParam(":email", $emailCheck);
$reg->bindParam(":password", $password);

//execute statements
//return $reg->execute();

$reg->execute();
}

//the $reg->execute function returns "boolean true"
//$reg returns the query without the values
//therefore I asume although I haven't tested the following:
/* if($reg->execute()) {
Send the user to login page
}
else {
display some kind of error
}*/
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

if ($obj) {
//check if the password entered by the user corresponds to the password in the database
if (password_verify($this->getPassword(), $obj->password)) {
//if passwords match, it is safe to log the user in, therefore sessions can be set at this point
$_SESSION['id'] = $obj->id;
$_SESSION['username'] = $obj->username;
$_SESSION['email'] = $obj->email;
$_SESSION['type'] = $obj->type;
}
else {
echo "Error logging you in. Please try again. If you continue experiencing difficulties, please contact webmaster. <a href = 'pseudologin.php'> Sign in</a>";
}
else {
echo "Error. Contact webmaster";
}
}

//end of class
}
