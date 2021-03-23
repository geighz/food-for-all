<?php
require_once "config.php";

$approval = "yes";
$id = 7;

$update = new shifts();
$update->approve($approval, $id);

