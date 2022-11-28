<?php

#echo 'e reach here';
#This file also include the time giving mechanism

$url = explode('/',$_SERVER['REQUEST_URI']);
if($url[1] =='xxxxappxxxx' && $url[2] == 'change'){
		require('yb/database_con2.php');
		echo '<br><br><br>This is the begining of something great';
	echo $url[5];
	
  	$user = test_input($url[3]);
	$veri = test_input($url[4]);
	$status =  test_input($url[5]);
	
$sql = "UPDATE app_info SET status='$status' WHERE user_id='$user'";

	if ($conn->query($sql) === TRUE) {
		
$sql = "SELECT status FROM app_info WHERE user_id='$user'";
$result2 = $conn->query($sql);
$result2 = $result2->fetch_assoc();
echo $result2['status'];
	  
	} else {
	  echo "Error updating record: " . $conn->error;
	}
	$conn->close();
  	exit();
}

#code to give time to users

if($url[1] =='xxxxappxxxx' && $url[2] == 'give_time' && count($url) > 4){
	require('yb/database_con2.php');
	#echo '<br><br> <h2>Time giver in the making -<br>';
#echo $url[5];
#exit;
  	$user = test_input($url[3]);
	$veri = test_input($url[4]);
	$timeGiven =  test_input($url[5]);
	$timeGiven = 'take+'.$timeGiven;

$sql = "UPDATE app_info SET switch='',lock_time='$timeGiven' WHERE user_id='$user'";

if ($conn->query($sql) === TRUE) {
	

echo 'timed';
  
} else {
  echo "Error updating record: " . $conn->error;
}
$conn->close();
  exit();
}
?>