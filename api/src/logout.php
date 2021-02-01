<?php
require "config.php";

//sign out
$go = session_destroy();

if ($go) {
echo "Good bye";
}
else {
echo "You stayin";
}

