<?php
require "config.php";

//post values
$name = htmlspecialchars($_POST['username']);
$email = htmlspecialchars($_POST['email']);
$type = htmlspecialchars($_POST['type']);
$pass1 = htmlspecialchars($_POST['password']);
$pass2 = htmlspecialchars($_POST['passwordCheck']);

//check if the user correctly entered the same password twice
if ($pass1 != $pass2) {
echo "Error: You must enter the same password twice. <a href = 'pseudoregister.php'>Please try again.</a>";
exit();
}
else 
{
//hash the password
$password = password_hash($pass2, PASSWORD_DEFAULT);
}

//check if an account has already been created using that email address
$check = $conn->prepare("SELECT  email FROM users WHERE email = :email");
$check->bindParam(":email", $email);
$check->execute();
$confirm = $check->fetch(PDO::FETCH_LAZY);

//If an account using that email address doesn't exist, then create a new account
if($confirm === FALSE) {
echo "<h1>Account successfully created. Please sign into your new account below</h1>";
$sql = new user();
$sql->register($name, $type, $email, $password);
header ("Location: pseudologin.php");
}
else
{
echo "Sorry. We couldn't register your account at this time. This is likely because you are trying to register using an email someon else is already using. Already have an account? <a href = 'pseudologin.php'>Go Here.</a> <a href = 'pseudoregistration.php'>Create an account</a>";
}
