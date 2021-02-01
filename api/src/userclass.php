<?php

//class to handle users
class user
{
//class properties. These are the properties (variables) used throughout our class

private $id;
      public function setId($id){
         $this->id = $id;
      }
      public function getId(){
         return $this->id;
      }

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
$this->setName($name);
$this->setEmail($email);
$this->setUserType($type);
$this->setPassword($password);

//check if the inserted email already exists in the database
$permit = $conn->prepare("SELECT * FROM users WHERE email = :email");
$permit->bindParam(":email", $this->getEmail());
$permit->execute();
$obj = $permit->fetchObject();

//check if email exists, display error message, otherwise if it does not exist, insert the user's details into our database
if ($email = $obj->email) {
echo "Oops. It looks like you already have an account with us";
}
else {
//prepare statements to insert users to the db.
$reg = $conn->prepare("INSERT INTO users (username, type, email, password)
VALUES (:name, :type, :email, :password)");
//assign properties that will give fields their data
$reg->bindParam(":name", $this->getName());
$reg->bindParam(":type", $this->getUserType());
$reg->bindParam(":email", $this->getEmail());
$reg->bindParam(":password", $this->getPassword());

//execute statements
return $reg->execute();
}

//the execute function returns "boolean true"
//$reg returns the query without the values
//therefore I asume although I haven't tested the following:
/* if($reg->execute()) {
Send the user to login page
}
else {
display some kind of error
}*/

}

//login
//please note the following is still under development
//We only check the email here and the password during instantiation because for some reason, having the password_verify function in this method seems to mess the process
/*function login($email) {
require "config.php";
$this->setEmail($email);

//search for records corresponding to the user's credentials
$permit = $conn->prepare("SELECT * FROM users WHERE email = :email");
//assign  values  to the placeholder above
$permit->bindParam(":email", $this->getEmail());
$permit->execute();

$obj = $permit->fetchObject();
$this->setId = $obj->id;
$this->setName = $obj->username;
$this->setType = $obj->type;
$this->setEmail = $obj->email;
$this->setPassword = $obj->password;
}*/

//end of class
}