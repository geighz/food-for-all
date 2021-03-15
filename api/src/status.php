<?php
require_once "config.php";

//the below values will likely come from whereever the admin is viewing shifts
//I reccomend giving the admin predetermined status options EG radio buttons, select boxes, etc to make sql statements easier to perform
$status = "in progress";
$id = 15;

$update = new shifts();
$update->status($status, $id);
