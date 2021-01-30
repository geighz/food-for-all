<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, allow-origin, Access-Control-Allow-Headers, Authorization, X-Requested-With");
require 'db_connection.php';
require 'config.php';

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

    $user_name = mysqli_real_escape_string($db_conn, trim($data->user_name));
    $user_email = mysqli_real_escape_string($db_conn, trim($data->user_email));
		$user_password = mysqli_real_escape_string($db_conn, trim($data->user_password));
		$user_type = mysqli_real_escape_string($db_conn, trim($data->user_type));
		$insertUser = mysqli_query($db_conn,"INSERT INTO `users`(`user_name`,`user_email`,`user_password`,
		us) VALUES('$username','$useremail','')");
		//TOD0 check if the user correctly entered the same password twice
		/*
		if ($pass1 != $pass2) {
		echo "Error: You must enter the same password twice. <a href = 'pseudoregister.php'>Please try again.</a>";
		exit();
		}
		*/

    if (filter_var($user_email, FILTER_VALIDATE_EMAIL)) {
			//Need to do some security, prepared statement, etc..
			$reg = $conn->prepare("INSERT INTO users (user_name, user_type, user_email, user_password)
			VALUES (:name, :type, :email, :password)");

			//assign properties that will give fields their data
			$reg->bindParam(":name", $user_name);
			$reg->bindParam(":type", $user_type);

			$passwordHash = password_hash($user_password, PASSWORD_DEFAULT);
			$reg->bindParam(":password", $passwordHash);

			//Check if email already exists.
			$check = $conn->prepare("SELECT  email FROM users WHERE email = :email");
			$check->bindParam(":email", $useremail);
			$check->execute();
			$confirm = $check->fetch(PDO::FETCH_LAZY);
			//If an account using that email address doesn't exist, then create a new account
			if($confirm === FALSE) {
				$reg->bindParam(":email", $user_email);
        $insertUser = mysqli_query($db_conn, $reg);
			}
			else
			{
			echo "Sorry. We couldn't register your account at this time. This is likely because you are trying to register using an email someon else is already using. Already have an account? <a href = 'pseudologin.php'>Go Here.</a> <a href = 'pseudoregistration.php'>Create an account</a>";
			}
        if($insertUser){
            $last_id = mysqli_insert_id($db_conn);
            echo json_encode(["success"=>1,"msg"=>"User Inserted.","id"=>$last_id]);
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
