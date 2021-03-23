<?php
require_once "config.php";

//the below values will be replaced by form data after the form has been created
$title = "Date";
$sum = "Testing date functionalities";
$shift = "This record tests if the date and time are correctly automatically created, inserted into the database, and then retrieved.";
$type = "software development";
$location = "Gaborone";
$admin = "Administrator";
$status = "open";

$create = new shifts();
$create->create($title, $sum, $shift, $type, $location, $admin, $status);
