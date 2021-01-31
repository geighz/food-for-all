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
$this->setName($name);
$this->setEmail($email);
$this->setUserType($type);
$this->setPassword($password);

//prepare statements to insert users to the db.
$reg = $conn->prepare("INSERT INTO users (username, type, email, password)
VALUES (:name, :type, :email, :password)");
//
//assign properties that will give fields their data
$reg->bindParam(":name", $this->getName());
$reg->bindParam(":type", $this->getUserType());
$reg->bindParam(":email", $this->getEmail());
$reg->bindParam(":password", $this->getPassword());

//execute statements
return $reg->execute();

}

//method to delete users
function delete($user)
{
require "config.php";

//prepare. We use the email field, since it is the most unique field particular to each user that is already in our session
$del = $conn->prepare("DELETE FROM users WHERE email = :email");

//assign a value to :email
$del->bindParam(":email", $user);
$del->execute();
}

//login
function login($email) {
require "config.php";

//search for records corresponding to the user's credentials
$permit = $conn->prepare("SELECT * FROM users WHERE email = :email OR username = :email");

//assign  values  to the placeholder above
$permit->bindParam(":email", $email);

//execute
$permit->execute();

//Fetch password from database to be compared with a user's entered password. Also assign session variables at this point
$obj = $permit->fetchObject();
$_SESSION['id'] = $obj->id;
$_SESSION['username'] = $obj->username;
$_SESSION['mail'] = $obj->email;
$_SESSION['type'] = $obj->type;
$this->password = $obj->password;
}

//reset password
public function reset($email, $password) {
require "config.php";

$update = $conn->prepare("UPDATE users SET password = :password WHERE email = :email");

$update->bindParam(":email", $email);
$update->bindParam(":password", $password);

$update->execute();
}
}
