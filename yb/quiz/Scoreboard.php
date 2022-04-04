<?php

require('../database_con.php');

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$content = '';

$sql2 = "SELECT * FROM record ORDER BY id DESC";
$result = $conn->query($sql2);
if ($result->num_rows > 0) {
	$content.= '
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
        $content.= "<tr>
		<td>" . $row["id"]. " </td>
		<td>" . $row["name"]."</td>
		<td>" . $row["phone"]. "</td>
		<td>" . $row["score"]. "</td>
		<td>" . $row["created_at"]. "</td>
			</tr>";
		}
	$content.= '</table>
	</body>
	</html>
	';
}

echo '
<html>
<head>
	<title>Score Board</title> 
<style>
body{
	margin:0px;
	padding:0px;
}

.tabler, .tabler th, .tabler td {
    border: none;
    text-align: left;
    padding: 8px;
	border-left: 1px solid #aaa;
}
.tabler tbody tr:nth-child(2n) {
    background-color: #F7D5A2;
}
.tabler {
    border-collapse: collapse;
    border-spacing: 0;
width: 100%;
	border: 1px solid #aaa;
	margin-bottom:15px;
}

.trA {
    background-color: #090;
    color: #FFF;
}
</style>
</head>
<body>
<img src="images/ScoreBoard.jpg" style="width:100%;" />
'.$content;

?>