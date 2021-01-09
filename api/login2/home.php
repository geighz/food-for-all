<?php
require "config.php";

$name = $_SESSION['username'];
$id = $_SESSION['id'];
$email = $_SESSION['mail'];
$type = $_SESSION['type'];

echo "Welcome <br>";
echo "Name: $name <br>";
echo "Email: $email <br>";
echo "Type: $type <br>";
echo "Id: $id <br>";

