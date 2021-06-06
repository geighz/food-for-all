<?php
require_once "config.php";

//these values will be replaced by form data
$vol = "Tawanda Mutasa";
$user = 5;
$shift = 15;

$sql = new shifts();
$insert = $sql->request($vol, $user, $shift);
