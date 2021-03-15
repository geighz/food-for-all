<?php
require_once "config.php";

$output = new shifts();
//after it has been decided if users are uniquely identified by username or email, the below function will have a parameter that will likely come from a session EG
//$output->myShifts($_SESSION['identifier'];
$output->myShifts();
if ($output) {
foreach ($output->data as $obj) {
echo "<blockquote>
Name: {$obj['volunteer']} <br>
email: {$obj['email']} <br>
shift id: {$obj['shift_id']} <br>
approved: {$obj['approved']} 
</blockquote>";
echo "Id:: {$obj['id']} <br>";
echo "title: {$obj['title']} <br>";
echo "summary: {$obj['summary']} <br>";
echo "Shift: {$obj['shift']} <br>";
echo "type: {$obj['type']} <br>";
echo "location: {$obj['location']} <br>";
echo "admin: {$obj['admin']} <br>";
echo "status: {$obj['status']} <br>";
echo "<hr>";
}
}
else {
echo "oops";
}