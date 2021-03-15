<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require 'config.php';

$user = new user();
$return = $user->getUser();

if($return == 1){
  $returnData = [
                'success' => 1,
                'user' => $user
            ];
  echo $returnData;
  }
else{
echo $return;
}
