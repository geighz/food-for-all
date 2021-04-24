<?php
require_once "config.php";

//theoratically speaking, this same script can be used after a user has come from all shifts page and the page showing all the shifts they are approved for.

//as recommended in the shifts.php script, the id should be carried in a hidden field or session so when we get here we can have something like
//$id = $_POST['id'];
$id = 1;

$output = new shifts();
$output->showShift($id);

if($output) {
echo "Id:: {$output->data->id} <br>";
echo "title: {$output->data->title} <br>";
echo "summary: {$output->data->summary} <br>";
echo "Shift: {$output->data->shift} <br>";
echo "type: {$output->data->type} <br>";
echo "location: {$output->data->location} <br>";
echo "admin: {$output->data->admin} <br>";
echo "status: {$output->data->status}";
}
else {
echo "oops";
}