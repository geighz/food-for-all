<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'config.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->user_email)
	&& isset($data->user_password)
	&& !empty(trim($data->user_email))
	&& !empty(trim($data->user_password))
	){

			$userInput = new user();
			$result = $userInput->login($data->user_email, $data->user_password);
			echo $result;

}
else{
		//echo json_encode(["success"=>0,"message"=>$email]);
    echo json_encode(["success"=>0,"message"=>"Please fill all the required fields!"]);
}
