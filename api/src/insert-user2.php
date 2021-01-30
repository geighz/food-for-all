<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'db_connection.php';
require 'config.php';
require 'userclass.php';
// POST DATA
$data = json_decode(file_get_contents("php://input"));

if(isset($data->user_name)
	&& isset($data->user_email)
	&& isset($data->user_password)
	&& isset($data->user_type)
	&& !empty(trim($data->user_name))
	&& !empty(trim($data->user_email))
	&& !empty(trim($data->user_password))
	&& !empty(trim($data->user_type))
	){
    $username = mysqli_real_escape_string($db_conn, trim($data->user_name));
    $useremail = mysqli_real_escape_string($db_conn, trim($data->user_email));
		$userpassword = mysqli_real_escape_string($db_conn, trim($data->user_password));
		$passwordHash = password_hash($userpassword, PASSWORD_DEFAULT);
		$usertype = mysqli_real_escape_string($db_conn, trim($data->user_type));

    if (filter_var($useremail, FILTER_VALIDATE_EMAIL)) {
			//$userInput = new user();
			//$userInput.register($username,$useremail,$userpassword,$usertype);

			/*$stmt = mysqli_prepare($db_conn,"INSERT INTO users(user_name,user_email,user_password,user_type) VALUES (?,?,?,?)");
			mysqli_stmt_bind_param($stmt, "ssss",
			$username,
			$useremail,
			$passwordHash,
			$usertype);

			$result = mysqli_stmt_execute($stmt);
			*/
			/*
        $insertUser = mysqli_query($db_conn,
				"INSERT INTO `users`(`user_name`,`user_email`)
				VALUES('$username','$useremail')");

				*/

        if($result){
            $last_id = mysqli_insert_id($db_conn);
            echo json_encode(["success"=>1,"msg"=>"User Inserted.","id"=>$last_id]);
        }
        else{
            echo json_encode(["success"=>0,"msg"=>"User Not Inserted!".$stmt]);
        }
    }
    else{
        echo json_encode(["success"=>0,"msg"=>"Invalid Email Address!"]);
    }
}
else{
    echo json_encode(["success"=>0,"msg"=>"Please fill all the required fields!"]);
}
