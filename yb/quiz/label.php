<?php
require('../database_con.php');

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}



if(isset($_POST['name']) && isset($_POST['score'])){
		$name = test_input($_POST["name"]);
		$phone = test_input($_POST["phone"]);
		$score = test_input($_POST["score"]);
		
		$sql = "INSERT INTO record (name, phone, score) VALUES ('$name', '$phone', '$score')";
		if (mysqli_query($conn, $sql)) {
			//echo "corrected successfully";
		//if(isset($aj) == 'ajax'){exit;}
		} else {
			echo "<div> Error: " . mysqli_error($conn).'</div>';
		}  

	$sql2 = "SELECT * FROM record ORDER BY id DESC";
	$result = $conn->query($sql2);
	
	if ($result->num_rows > 0) {
	echo '
	<table class="tabler bg_white">
	<tr class="trA">
	<td>No.</td>
			<td>Name</td>
			<td>Phone No</td>
			<td>Score</td>
			<td>Date</td>
	</tr>
	';
		// output data of each row
		while($row = $result->fetch_assoc()) {
        echo "<tr>
		<td>" . $row["id"]. " </td>
		<td>" . $row["name"]."</td>
		<td>" . $row["phone"]. "</td>
		<td>" . $row["score"]. "</td>
		<td>" . $row["created_at"]. "</td>
			</tr>";
		}
	}
	echo '</table>
	';
	mysqli_close($conn);
	exit;
	
}
if(isset($_GET['label']) == 'q'){
	$sql2 = "SELECT * FROM record ORDER BY id DESC";
	$result = $conn->query($sql2);
	
	if ($result->num_rows > 0) {
	echo '
	<table class="tabler bg_white">
	<tr class="trA">
	<td>No.</td>
			<td>Name</td>
			<td>Phone No</td>
			<td>Score</td>
			<td>Date</td>
	</tr>
	';
		// output data of each row
		while($row = $result->fetch_assoc()) {
			/*
			### The following comment-out code was written to output only records that is earlier than 7days.
			
			$d_date = substr($row["created_at"], 0,10);
			$dd = date("Y-m-d");
			
			$dayz = number_of_working_days($d_date, $dd);
			if($dayz < 7){
			*/
				echo "<tr>
				<td>" . $row["id"]. " </td>
				<td>" . $row["name"]."</td>
				<td>" . $row["phone"]. "</td>
				<td>" . $row["score"]. "</td>
				<td>" . $row["created_at"]. "</td>
					</tr>";
			/* } */
		}
	}
	echo '</table>
	';
	
	mysqli_close($conn);
	exit;
}
if(isset($_GET['label'])){
	if($_GET['label'] == 'sub'){
		$name = test_input($_GET["name"]);
		$phone = test_input($_GET["phone"]);
		$score = test_input($_GET["score"]);
		
		$sql = "INSERT INTO record (name, phone, score) VALUES ('$name', '$phone', '$score')";
		if (mysqli_query($conn, $sql)) {
			//echo "corrected successfully";
		//if(isset($aj) == 'ajax'){exit;}
		} else {
			echo "<div> Error: " . mysqli_error($conn).'</div>';
		}  


	}
	$sql2 = "SELECT * FROM record ORDER BY id DESC";
	$result = $conn->query($sql2);
	
	if ($result->num_rows > 0) {
	echo '
	<html>
	<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/style.css">
	
<title>Score Board</title>
	</head>
	<body>
	<a href="label.html"><button> Back </button></a>
	<table class="tabler bg_white">
	<tr class="trA">
	<td>No.</td>
			<td>Name</td>
			<td>Phone No</td>
			<td>Score</td>
			<td>Date</td>
	</tr>
	';
		// output data of each row
		while($row = $result->fetch_assoc()) {
        echo "<tr>
		<td>" . $row["id"]. " </td>
		<td>" . $row["name"]."</td>
		<td>" . $row["phone"]. "</td>
		<td>" . $row["score"]. "</td>
		<td>" . $row["created_at"]. "</td>
			</tr>";
		}
	}
	echo '</table>
	</body>
	</html>
	';
}

echo  check_if_empty('','','','','','');

//after submition of name

if ($_SERVER["REQUEST_METHOD"] == "POST" || isset($_POST["reg"]) == "reg") {
  $firstname = test_input($_POST["firstname"]);
  $lastname = test_input($_POST["lastname"]);
  $phone = test_input($_POST["phone"]);
	
  	$sql = "SELECT * FROM record WHERE phone='$phone'";
	
	$result2 = $conn->query($sql);
	if ($result2 != false) {
		
		if ($result2->num_rows > 0) {
		  ///if the phone no exist";
		  $info = 'You have attempted. You can only attempt once.<br />
		  This is your score';		  
		
			echo '
			<table class="tabler bg_white">
			<tr class="trA">
			<td>No.</td>
					<td>Name</td>
					<td>Phone No</td>
					<td>Score</td>
					<td>Date</td>
			</tr>
			';
				// output data of each row
				while($row = $result2->fetch_assoc()) {
				echo "<tr>
				<td>" . $row["id"]. " </td>
				<td>" . $row["name"]."</td>
				<td>" . $row["phone"]. "</td>
				<td>" . $row["score"]. "</td>
				<td>" . $row["created_at"]. "</td>
					</tr>
					";
				}
			echo '</table>';
			
		}else{
	//begining of paper
	//header('location:label2.php');
			echo "

			";
	//end of paper		
		}
	
	}
}

mysqli_close($conn);
?>