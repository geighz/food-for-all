<?php

//start a session
if(!isset($_SESSION))
    {
        session_start();
    }

//turn off errors for the user's benefit
//error_reporting(0);

//include classes
require_once "userclass.php";

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
