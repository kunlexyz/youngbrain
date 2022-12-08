<?php
#Expecting /xxxxappxxxx/mytatus/user_app_id/veri_no/key/state/trtime
#echo 'checking Mytatus - '.count($url);
#echo $_SERVER['REQUEST_URI'];
#exit;
	$url = explode('/',$_SERVER['REQUEST_URI']);
if(count($url) > 5 && $url[2] == 'mytatus'){
		require('yb/database_con2.php');
		header("Access-Control-Allow-Origin: *");
		//echo '<br><br><br>checking mytatus 2<br />';
		//echo $url[3]."-".$url[4]."-".$url[5]."-".$url[6]."-"."-<br><br><br>";
	
  	$user = test_input($url[3]);
	$veri = test_input($url[4]);
	$yeks = test_input($url[5]);
	$state = test_input($url[6]);
	$time_state = test_input($url[7]);
	/*
	$status =  test_input($url[5]);	
	*/
	//....
	$sql = "SELECT * FROM app_info WHERE user_id='$user'";
	$result = $conn->query($sql);
	
	if ($result->num_rows > 0) {
		$sql3 = "UPDATE app_info SET status='$state', lock_state='$time_state' WHERE user_id='$user'"; // lock_state & time_state means the time of trial expiration
		$result3 = $conn->query($sql3);
		// output data of each row
		while($row = $result->fetch_assoc()) {
			//echo "id: " . $row["id"]. " - Name: " . $row["user_id"]. " - " . $row["veri_no"]." - ".$row["status"]." - ".$row["updated_at"]. "<br>";
			
			//$updated = $row["updated_at"];
			
			$switch = $row['switch']; // or switch state
			$allowedTime = $row['lock_time'];
			$allowedTime = explode('+',$allowedTime);

			if(strtoupper($switch) == 'ON'){$switch = '1514';}
			if(strtoupper($switch) == 'OFF'){$switch = '1566';}

			if($allowedTime[0] == 'take'){
				$allowedTime = $allowedTime[1]; 
				$collected = 'Collected+'.$allowedTime;
				$sql_4 = "UPDATE app_info SET lock_time='$collected' WHERE user_id='$user'";
				$result_4 = $conn->query($sql_4);
			}else{
				$allowedTime = '';
			}

			echo $switch.'+'.$allowedTime;
		}
	} else {
		#echo "<br><br><br>0 results";
		if(strlen($url[3]) == 5){
			
			$sql2 = "INSERT INTO app_info (user_id, veri_no, yeks, status) VALUES ('$user', '$veri', '$yeks', '$state')";
			if (mysqli_query($conn, $sql2)) {
				//echo "New record created successfully";
				//date("h:i:sa");
			} else {
				echo "Error: " . $sql2 . "<br>" . mysqli_error($conn);
			}
			//echo 'ON';
		
		}
	}
	$conn->close();
  	exit();
}

# code to register users
$url = explode('/',$_SERVER['REQUEST_URI']);
if(count($url) > 5 && $url[2] == 'regis'){
		require('yb/database_con2.php');
		#echo $_SERVER['HTTP_ORIGIN'];
		header("Access-Control-Allow-Origin: *");
		#echo '<br><br><br>checking regi<br />';
		//echo $url[3]."-".$url[4]."-".$url[5]."-".$url[6]."-"."-<br><br><br>";
		#exit;
	
  	$user = test_input($url[3]);
	$veri = test_input($url[4]);
	$phone = test_input($url[5]);
	$name = test_input($url[6]);

	$name = str_replace('%20',' ',$name);
	
	//....
	$sql = "SELECT * FROM app_info WHERE user_id='$user'";
	$result = $conn->query($sql);
	
	if ($result->num_rows > 0) {
		$sql3 = "UPDATE app_info SET phone_no='$phone', name='$name' WHERE user_id='$user'"; 
		$result3 = $conn->query($sql3);
		echo 'success ?';
		// output data of each row
		
	} else {
		#echo "<br><br><br>0 results";
		if(strlen($url[3]) == 5){
			
			$sql2 = "INSERT INTO app_info (user_id, veri_no, phone, name) VALUES ('$user', '$veri', '$phone', '$name')";
			if (mysqli_query($conn, $sql2)) {
				//echo "New record created successfully";
				//date("h:i:sa");
				echo 'success _';
			} else {
				echo "Error: " . $sql2 . "<br>" . mysqli_error($conn);
			}
			//echo 'ON';
		
		}
	}
	$conn->close();
  	exit();
}
?>