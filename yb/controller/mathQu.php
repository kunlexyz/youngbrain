<?php
#Expecting /mathQu
#echo 'checking Mytatus - '.count($url);
#echo $_SERVER['REQUEST_URI'];
#exit;

#use $_POST[]; & 
	
if($_SERVER['REQUEST_METHOD'] == 'POST'){

    header("Access-Control-Allow-Origin: *");
    require('yb/database_con2.php');
  	$name = test_input($_POST['name']);
	$phone = test_input($_POST['phone']);
	$content = test_input($_POST['reply']);
    
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}else{
        echo 'got connected';
    }

    $sql2 = "INSERT INTO math_qu (name, phone, content) VALUES ('$name', '$phone', '$content')";
    if (mysqli_query($conn, $sql2)) {
        echo "New record created successfully";
        //date("h:i:sa");
    } else {
        echo "Error: " . $sql2 . "<br>" . mysqli_error($conn);
    }

	$conn->close();
  	exit();
}else{echo 'no post request';}


?>