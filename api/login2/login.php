<?php
require_once "config.php";


//get user input and clear html tags
$email = htmlspecialchars($_POST['username']);
$password = htmlspecialchars($_POST['password']);

//check if the user exists in our database
$sql = new user();
$sql->login($email);

//check if the user entered the correct password. Send the user to the home page if they did, otherwise throw back the login form at them with an error message.
if (password_verify($password, $sql->password))  {
header ("Location: home");
}
else {
echo "Error logging you in. Please try again. If you continue experiencing difficulties, please contact webmaster. <a href = 'pseudologin.php'> Sign in</a>";
}
