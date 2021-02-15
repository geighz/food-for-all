<?php
require_once "config.php";

//the below values will be replaced by form data after the form has been created
$title = "Backend";
$sum = "Backend built with php is required";
$shift = "PHP scripts are needed by Food for All. These scripts will be responsible for the backend of their websites. Calling all devs.";
$type = "software development";
$location = "Gaborone";
$admin = "Someone";
$status = "open";

$create = new shifts();
$create->create($title, $sum, $shift, $type, $location, $admin, $status);
