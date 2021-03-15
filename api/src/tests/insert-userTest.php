<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'config.php';


$data = json_decode(file_get_contents("php://input"), true);
var_dump($data);

// POST DATA
//$_GET("user_name");
//$username = $_GET['user_name'];

//echo json_encode(["user_name"=>$data->user_name,"msg"=>$data->user_email]);
