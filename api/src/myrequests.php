<?php
require_once "config.php";

//these values will be replaced by form data
$vol = "Tawanda Mutasa";
$email = "tawamut@gmail.com";
$shift = 15;
$approved = "pending";

$sql = new shifts();
$insert = $sql->request($vol, $email, $shift, $approved);
