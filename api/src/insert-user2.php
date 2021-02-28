<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'config.php';

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
    //$username = mysqli_real_escape_string($db_conn, trim($data->user_name));
    //$useremail = mysqli_real_escape_string($db_conn, trim($data->user_email));
		//$userpassword = mysqli_real_escape_string($db_conn, trim($data->user_password));
		//$passwordHash = password_hash($userpassword, PASSWORD_DEFAULT);
		//$usertype = mysqli_real_escape_string($db_conn, trim($data->user_type));
		//$passCheck = mysqli_real_escape_string($db_conn, trim($data->password_check));

		http_response_code(200);
		$username = $data->user_name;
		$useremail = $data->user_email;
		$userpassword = $data->user_password;
		$passwordHash = password_hash($userpassword, PASSWORD_DEFAULT);
		$usertype = $data->user_type;
		$passCheck = $data->password_check;


//note, password has been hashed
//filter_var($useremail, FILTER_VALIDATE_EMAIL)) && (
	if(!filter_var($useremail, FILTER_VALIDATE_EMAIL)){
		$returnData = [
										'success' => 0,
										'message' => 'Invalid Email Account!'
								];
			echo json_encode($returnData);
		}
	// IF PASSWORD IS LESS THAN 8 THE SHOW THE ERROR
	elseif(strlen($userpassword) < 8){
		$returnData = [
										'success' => 0,
										'message' => 'Your password must be at least 8 characters long!'
								];
			echo json_encode($returnData);
		}
	elseif ($passCheck == $userpassword) {
				$userInput = new user();
				$result = $userInput->register($username, $usertype, $useremail, $passwordHash);

				if($result == 1){
					//Redirect Status code.
					$returnData = [
	                        'success' => 1,
	                        'message' => 'You have Successfully Registered!'
	                    ];
					echo json_encode($returnData);
				}
				else{
					$returnData = $result;
					echo json_encode($returnData);
				}
	    }
	    else{
	        echo json_encode(["success"=>0,"message"=>"Oops. Your passwords don't match."]);
	    }
}
else{
    echo json_encode(["success"=>0,"message"=>"Please fill all the required fields."]);
}
