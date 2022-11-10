<?php

require('database_con.php');
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if(isset($_GET['app_undate']) || $_GET['app_update'] == 'update') {
  	$user = $_GET['id'];
	$veri =  $_GET['veri'];
	$key =  $_GET['actN'];
	$email =  $_GET['email'];
	$phone =  $_GET['phone'];
	$status =  $_GET['status'];
	
  	$sql = "SELECT * FROM app_info WHERE user_id='$user'";
  	//$resu = mysqli_query($conn, $sql);
	
	$result2 = $conn->query($sql);
	if ($result2 != false) {
		//print_r($result2->num_rows);
		if ($result2->num_rows > 0) {
		  ///echo "the id exist";
		  $result2 = $result2->fetch_assoc();
		  
		  $sql = "UPDATE app_info SET status='$status' WHERE user_id='$user'";

			if($result2['switch'] == 'ON'){echo 'ON';}//else{echo 'ccccc on';}
			if($result2['switch'] == 'OFF'){echo 'OFF';}//else{echo 'cant ooff';}
			if(strlen($result2['switch']) == 0){ echo $status;}
			/*
			if(strtoupper($result2['switch']) == 'START' &&
			 strlen($result2['veri_no']) > 4)
			{echo 'ON';}{echo 'OFF';}
			*/
		}else{
		  //echo 'not_taken';
		  //print_r(mysqli_num_rows($resu));
			$sql2 = "INSERT INTO app_info (user_id, veri_no, yeks, status) VALUES ('$user', '$veri', '$key', 'ON')";
			if (mysqli_query($conn, $sql2)) {
				//echo "New record created successfully";
			} else {
				//echo "Error: " . $sql2 . "<br>" . mysqli_error($conn);
			}
		}
	}else{
		//echo 'not connected to $db';
	/*	
$sql = "INSERT INTO maxi (firstname, lastname, reg_fee, loan_type, loan_amount, address, branch, referrer) VALUES ('$firstname', '$lastname', '$reg_fee', '$loan_type', '$loan_amount', '$address', '$branch', '$referrer')";
*/
	}
	$conn->close();
  	exit();
}

$conn->close();
exit();
?>