<?php
require_once "config.php";

$output = new shifts();
//email probably retrieved from JWT will probably be used to specify a user's approved shifts
$email = "tawamut@gmail.com";
$output->myShifts($email);
if ($output) {
foreach ($output->data as $obj) {
echo "<blockquote>
Name: {$obj['volunteer']} <br>
email: {$obj['email']} <br>
shift id: {$obj['shift_id']} <br>
approved: {$obj['approved']}  <br>
Request made on: {$obj['request_time']} <br> 
Approved on: {$obj['approval_time']} 
</blockquote>";
echo "Id:: {$obj['id']} <br>";
echo "title: {$obj['title']} <br>";
echo "summary: {$obj['summary']} <br>";
echo "Shift: {$obj['shift']} <br>";
echo "type: {$obj['type']} <br>";
echo "location: {$obj['location']} <br>";
echo "admin: {$obj['admin']} <br>";
echo "status: {$obj['status']} <br>";
echo "Created: {$obj['created']} <br>";
echo "<hr>";
}
}
else {
echo "oops";
}