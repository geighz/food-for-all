<?php
require_once "config.php";

$output = new shifts();
$output->allShifts();

if ($output) {
//the foreach statement will show all the fields. Not knowing how the data will be displayed, I am echoing everything from the database so Geigh can display the data on the frontend as he thinks best
//I recommend carrying over the id in a hidden field or session, so it can be accessed when we want to display one shift on a page from here
foreach ($output->data as $obj) {
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
//redirect somewhere
echo "oops";
}
