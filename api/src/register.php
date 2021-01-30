<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require "config.php";



echo file_get_contents('php://input');
echo json_decode(file_get_contents('php://input'), true);
$data = json_decode(file_get_contents("php://input"));
//post values
echo gettype($data);
echo $data['user_name'];
echo $data->user_name;
echo "Right here is data:";
echo $data;
//$username = htmlspecialchars($_POST['user_name']);

$username = mysqli_real_escape_string($conn, trim($data->user_name));
echo $username;
//$email = htmlspecialchars($_POST['user_email']);
$email = $data->user_email;
echo $email;
//$type = htmlspecialchars($_POST['user_type']);
$type = $data->user_type;
echo $type;
//$pass1 = htmlspecialchars($_POST['user_password']);
$pass1 = $data->user_password;
$pass2 = $pass1;
echo $pass1;
//Geigh needs to give ability to store passwordCheck.
//$pass2 = htmlspecialchars($_POST['passwordCheck']);
//$pass2 = htmlspecialchars($_POST['user_password']);
//check if the user correctly entered the same password twice CHANGE!!!!
if ($pass1 != $pass1) {
echo "Error: You must enter the same password twice. <a href = 'pseudoregister.php'>Please try again.</a>";
exit();
}
else
{
//hash the password

$password = password_hash($pass2, PASSWORD_DEFAULT);
}

//check if an account has already been created using that email address
/*
$check = $conn->prepare("SELECT  email FROM users WHERE email = :email");
$check->bindParam(":email", $email);
$check->execute();
$confirm = $check->fetch(PDO::FETCH_LAZY);
*/
$confirm = TRUE;
//If an account using that email address doesn't exist, then create a new account
if($confirm === FALSE) {
echo "<h1>Account successfully created. Please sign into your new account below</h1>";
$sql = new user();
$sql->register($username, $type, $email, $password);
//New Header? Should we change this?
//header ("Location: pseudologin.php");
}
else
{
echo "Sorry. We couldn't register your account at this time. This is likely because you are trying to register using an email someon else is already using. Already have an account? <a href = 'pseudologin.php'>Go Here.</a> <a href = 'pseudoregistration.php'>Create an account</a>";
}
