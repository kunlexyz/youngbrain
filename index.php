<?php

$x = $_SERVER['REQUEST_URI'];
//echo $x;
$xx = explode('/',$x);
if($xx[1] =='xxxxappxxxx'){
	echo 'Made it to the serve';
    exit;
}

$x = $_SERVER['REQUEST_URI'];
$xx = explode('/',$x);
#echo count($xx);

if($xx[1] == ''){
	include('index.html');
exit;
}

#echo 'echo these';
require('yb/entrance_controllers.php');
//echo 'you can\' see this';
//exit;
$x = $_SERVER['REQUEST_URI'];
//echo $x;
$xx = explode('/',$x);
if($xx[1] =='xxxxappxxxx' && $xx[2] == 'list'){
	echo 'the begining';
	
	#be back here for yb/da
	//require('yb/database_con.php');
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}else{echo 'got connected';}
	
	
	#querying database
	
$sql2 = "SELECT * FROM app_info";
$result = $conn->query($sql2);

function sw($k){
	if($k == 'ON'){return 'ShutDown';}
	else{return 'Start';}
}

if ($result->num_rows > 0) {
	echo '
	<html>
	<style>
	.red{background-color:red;}
	.rr{color:red;}
	
	tbody>tr>:nth-child(your_parameter){ 
/* your css here */
}

	</style>
	';
echo '<table class="tabler bg_white smal_t">
<tr class="trA">
<td>No.</td>
		<td>Reg Id</td>
		<td>Veri No</td>
		<td>Activation</td>
		<td>Status</td>
		<td class="red">Switch</td>
		<td>Date</td>
		<td>last</td>
</tr>
';
    // output data of each row 
	//<button id="app001_button" onclick="srch('app001','VERY_key','app001_button')"> OFF </button>
    while($row = $result->fetch_assoc()) {
        echo "<tr>
		<td>" . $row["id"]. " </td>
		<td>" . $row["user_id"]. "</td>
		<td>" . $row["veri_no"]. "</td>
		<td>" . $row["yeks"]. "</td>
		<td id='" . $row["user_id"]. "_status' >" . $row["status"]. "</td>
		<td class='red'><button id='" . $row["user_id"]. "_button' onclick=\"srch2('" . $row["user_id"]. "','" . $row["veri_no"]. "','" . $row["user_id"]. "_status','" . $row["user_id"]. "_button')\">" . sw($row["status"]). "</button></td>
		<td>" . $row["created_at"]. "</td>
		<td>" . $row["updated_at"]. "</td>
		</tr>";
    }
	echo "</table>";
} else {
    echo "0 results";
}
echo '

<script type="text/javascript" src="jq.js">
</script>
<script>
function srch2(p1,p2,p4,x3){
	//alert("i dey");
	pp = document.getElementById(x3).innerHTML;
	p3 = "ON";
	if(pp == "ShutDown"){p3 = "OFF"}else {p3 = "ON";}
	
	document.getElementById(x3).innerHTML = "processing...";
	//alert(x);
	//$("#result").load("card2.php?quick_search=qq&member="+qs);
	
	$.get("store.php?app_status=change&user="+p1+"&veri="+p2+"&status="+p3, function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
	var data2 = "";
	if(data.toUpperCase() == "OFF"){/*data = "ON";*/data2 = "Start";
	}else {/*data = "OFF";*/data2 = "ShutDown"}
	$("#"+p4).html(data);
	$("#"+x3).html(data2);
  });
}
</script></html>
';


	#close
$conn->close();
  exit();

}

if($xx[1] =='xxxxappxxxx' && $xx[2] == 'status'){
	//echo 'this goes through app status code';
	
	#be back here for yb/da
	require('yb/database_con.php');
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
  	$user = test_input($xx[3]);
$sql = "SELECT status FROM app_info WHERE user_id='$user'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo $row["status"];
  }
} else {
  echo "0 results";
}
	$conn->close();
  	exit();
}
//username - brandbuka; pass- 8d(C0oWu3]7CeJ
//090579779870 - i don't know who owns this number
?>