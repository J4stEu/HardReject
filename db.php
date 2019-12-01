<?php
  require "libs/rb.php";
  $connection = R::setup( 'mysql:host=localhost;dbname=hardreject','root', '' );
	$second_connection = R::addDatabase('DB1', 'mysql:host=localhost;dbname=hard_reject_projects', 'root', '');
  session_start();
?>