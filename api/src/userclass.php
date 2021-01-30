<?php

//class to handle users
class user
{
//class properties. These are the properties (variables) used throughout our class
public $name;
public $type;
public $email;
public $password;

//function to register users, IE insert the details of new users to our database
function register ($name, $type, $email, $password)
{
require "config.php";

//prepare statements to insert users to the db.
$reg = $conn->prepare("INSERT INTO users (username, type, email, password)
VALUES (:name, :type, :email, :password)");

//assign properties that will give fields their data
$reg->bindParam(":name", $name);
$reg->bindParam(":type", $type);
$reg->bindParam(":email", $email);
$reg->bindParam(":password", $password);

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
