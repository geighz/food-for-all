<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';
require 'userclass.php';
// POST DATA

//$contents = file_get_contents("php://input");
//$contents = utf8_encode($contents);
//$data = json_decode($contents);
$data = json_decode(file_get_contents("php://input"));

if(isset($data->user_name)
	&& isset($data->user_email)
	&& isset($data->user_password)
	&& isset($data->user_type)
	&& isset($data->password_check)
	&& !empty(trim($data->user_name))
	&& !empty(trim($data->user_email))
	&& !empty(trim($data->user_password))
	&& !empty(trim($data->user_type))
	&& !empty(trim($data->password_check))
	){
    $username = mysqli_real_escape_string($db_conn, trim($data->user_name));
    $useremail = mysqli_real_escape_string($db_conn, trim($data->user_email));
		$userpassword = mysqli_real_escape_string($db_conn, trim($data->user_password));
		$passwordHash = password_hash($userpassword, PASSWORD_DEFAULT);
		$usertype = mysqli_real_escape_string($db_conn, trim($data->user_type));
		$passCheck = mysqli_real_escape_string($db_conn, trim($data->password_check));

//note, password has been hashed
//filter_var($useremail, FILTER_VALIDATE_EMAIL)) && (
    if ($passCheck == $userpassword) {

			$userInput = new user();
			$result = $userInput->register($username, $usertype, $useremail, $passwordHash);

        if($result){
            //$last_id = mysqli_insert_id($db_conn);
            echo json_encode(["success"=>1,"msg"=>"User Inserted."]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"User Not Inserted!"]);
        }
    }
    else{
        echo json_encode(["success"=>0,"msg"=>"Invalid Email Address!"]);
    }
}
else{
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}
