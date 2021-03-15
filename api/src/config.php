<?php


require_once "userclass.php";
require_once "shiftsclass.php";
//connecting to the database
//credentials
$dbn = "test";
$dbs = "localhost";
$dbu = "root";
$dbp = "";

//database
try {
$conn = new PDO("mysql:host=$dbs;dbname=$dbn", $dbu, $dbp);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
}
catch (PDOException $e) {
echo "Error: " . $e->getMessage();
}
