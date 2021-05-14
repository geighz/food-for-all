<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once "config.php";

//theoratically speaking, this same script can be used after a user has come from all shifts page and the page showing all the shifts they are approved for.

//as recommended in the shifts.php script, the id should be carried in a hidden field or session so when we get here we can have something like
//$id = $_POST['id'];
//$data = json_decode(file_get_contents("php://input"));
$data = file_get_contents("php://input");
//$importedDate = file_get_contents("php://input")
//echo json_encode($data);

//Theres an awkward shift in the date for some reason.
$shift = 13;
$date = substr($data, $shift, strpos($data, '(') - $shift);
echo $date;

$dateMod = new DateTime($date);

$newDate = $dateMod->format('Y-m-d H:i:s');
echo $newDate;


$output = new shifts();

$output->allDayShifts($newDate);
if ($output) {
  echo json_encode($output->data);
}
else {
echo "oops";
}
