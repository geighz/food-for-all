<?php

class shifts {
//this property will be used to envoke which ever data should be displayed at instantiation.
public $data;

//create shifts
public function create($title, $summary, $shift, $type, $location, $admin, $status) {
require "config.php";
$sql = $conn->prepare("INSERT INTO shifts (title, summary, shift, type, location, admin, status)
VALUES (:title, :sum, :shift, :type, :location, :admin, :status)");

$sql->bindParam(":title", $title);
$sql->bindParam(":sum", $summary);
$sql->bindParam(":shift", $shift);
$sql->bindParam(":type", $type);
$sql->bindParam(":location", $location);
$sql->bindParam(":admin", $admin);
$sql->bindParam(":status", $status);

$exec = $sql->execute();

if ($exec) {
echo "success";
}
else {
echo "oops";
}
}

//display all shifts. The final version should probably have a where clause that will display available / open shifts
public function allShifts() {
require "config.php";

$sql = $conn->prepare("SELECT * FROM shifts");
$sql->execute();

$this->data = $sql->fetchAll(PDO::FETCH_ASSOC);
}

//Only show one shift. This will be useful when we only want to display one shift on a page.
public function showShift($id) {
require "config.php";

$sql = $conn->prepare("SELECT * FROM shifts WHERE id = :id");
$sql->bindParam(":id", $id);
$sql->execute();

$this->data = $sql->fetchObject();
}

public function allDayShifts($date) {
require "config.php";

$sql = $conn->prepare("SELECT * FROM shifts WHERE time_start > :date");
$sql->bindParam(":date", $date);
$sql->execute();

$this->data = $sql->fetchAll(PDO::FETCH_ASSOC);
}


//Show all the shifts a volunteer has been approved to do.
//after it has been decided if users will be identified by name or email, there will be an additional where clause to only show shifts that correspond to that user.
public function myShifts() {
require "config.php";
$sql = $conn->prepare("SELECT * FROM shifts INNER JOIN requests ON shifts.id=requests.shift_id WHERE approved = :yes");
$yes = "yes";
$sql->bindParam(":yes", $yes);
$sql->execute();

$this->data = $sql->fetchAll(PDO::FETCH_ASSOC);
}

//allow volunteers to note their interest in working on a shift
public function request($vol, $userid, $shiftid) {
require "config.php";

//check if a user has already requested this shift
$check = $conn->prepare("SELECT * FROM requests WHERE user_id = :user AND shift_id = :shift");
$check->bindParam(":user", $userid);
$check->bindParam(":shift", $shiftid);

$check->execute();
$obj = $check->fetchObject();

//if the request has already been made
if ($obj) {
echo "Oops. You already requested that shift";
}
//if the request has not yet been made, create request
else {
$sql = $conn->prepare("INSERT INTO requests (volunteer, user_id, shift_id, request_time)
VALUES (:vol, :user, :shift, :requesttime)");

$datetime = date("d/M/Y h:i:s");
$sql->bindParam(":requesttime", $datetime);
$sql->bindParam(":vol", $vol);
$sql->bindParam(":user", $userid);
$sql->bindParam(":shift", $shiftid);

$exec = $sql->execute();
if ($exec) {
echo "success";
}
else {
echo "oops";
}
}
}

//allow the admin to approve volunteers to work on tasks
public function approve($appr, $id) {
require "config.php";

$sql = $conn->prepare("UPDATE requests SET approved = :appr WHERE id = :id");

$sql->bindParam(":appr", $appr);
$sql->bindParam(":id", $id);

$exec = $sql->execute();
if ($exec) {
echo "success";
}
else {
echo "oops";
}
}

//the admin can update the status of a task
public function status($status, $id) {
require "config.php";

$sql = $conn->prepare("UPDATE shifts SET status = :status WHERE id = :id");

$sql->bindparam(":status", $status);
$sql->bindParam(":id", $id);

$exec = $sql->execute();
if ($exec) {
echo "success";
}
else {
echo "oops";
}
}


//end of class
}
