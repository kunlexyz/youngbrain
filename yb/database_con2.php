<?php

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
/*
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

*/
/*
$servername = "localhost";
$username = "youngbra_maxi123";
$password = "xkyLj9xiEtz=";
$dbname = "youngbra_maxi";

*/

$servername = "us-cdbr-east-05.cleardb.net";
$username = "bf8a2a4c4bb416";
$password = "8e7892fc";
$dbname = "heroku_0b7403b2cb4575f";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

?>