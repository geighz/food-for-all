<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';
require 'userclass.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->user_email)
	&& isset($data->user_password)
	&& !empty(trim($data->user_email))
	&& !empty(trim($data->user_password))
	){
    $useremail = mysqli_real_escape_string($db_conn, trim($data->user_email));
		$userpassword = mysqli_real_escape_string($db_conn, trim($data->user_password));

			$userInput = new user();
			$result = $userInput->login($useremail, $userpassword);
      
      if($result){
      echo json_encode(["success"=>1,"msg"=>"User Logged In."]);
      }
    else{
        echo json_encode(["success"=>0,"msg"=>"Invalid Email or Password"]);
    }
}
else{
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}
