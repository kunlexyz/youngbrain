<?php

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  $data = str_replace("'","&quot;",$data);
  $data = str_replace('"','&quot;',$data);
  return $data;
}
/*
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

*/
/*
#for clearDB database in heroku
	$servername = "us-cdbr-east-05.cleardb.net";
	$username = "bf8a2a4c4bb416";
	$password = "8e7892fc";
	$dbname = "heroku_0b7403b2cb4575f";
*/
if($_SERVER['SERVER_NAME'] =='localhost'){
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "test";
}else{	
	$servername = "fdb18.awardspace.net";
	$username = "2557058_maxiserve123";
	$password = "maxiserve123";
	$dbname = "2557058_maxiserve123";

}

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

?>