<?php

function run_itz(){

	$url = explode('/',$_SERVER['REQUEST_URI']);
	if($url[1] =='xxxxappxxxx' && $url[2] == 'list'){
		require('yb/database_con2.php');
		#echo '<br><br><br>This is the begining of something great';
		#echo 'the begining';
	
	#be back here for yb/da
	//require('yb/database_con.php');
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}else{#echo 'got connected';
	}
	
	
	#querying database
	
$sql2 = "SELECT * FROM app_info";
$result = $conn->query($sql2);

function sw($k){
	if($k == 'ON'){return 'ShutDown';}
	elseif($k == '1514'){return 'ShutDown';}
	else{return 'Start';}
}
function sw2($k){
	if($k == '1514'){return 'On';}
	else{return 'Off';}
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
		<td>Name</td>
		<td>Phone</td>
		<td>Status</td>
		<td class="red">Switch</td>
		<td>Date</td>
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
		<td>" . $row["name"]. "</td>
		<td>" . $row["phone_no"]. "</td>
		<td id='" . $row["user_id"]. "_status' >" . sw2($row["status"]). "</td>
		<td class='red'><button id='" . $row["user_id"]. "_button' onclick=\"srch2('" . $row["user_id"]. "','" . $row["veri_no"]. "','" . $row["user_id"]. "_status','" . $row["user_id"]. "_button')\">" . sw($row["status"]). "</button></td>
		<td>" . date('d.m.y',strtotime($row["created_at"])). '</td>
		</tr>';
    }
	echo "</table>";
} else {
    echo "0 results";
}
echo '

<script type="text/javascript" src="http://'.$_SERVER['SERVER_NAME'].'/yb/jq.js">
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
	
	$.get("http://'.$_SERVER['SERVER_NAME'].'/yb/store.php?app_status=change&user="+p1+"&veri="+p2+"&status="+p3, function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
	var data2 = "";
	if(data.toUpperCase() == "OFF"){/*data = "ON";*/data2 = "Start";
	}else {/*data = "OFF";*/data2 = "ShutDown"}
	$("#"+p4).html(data);
	$("#"+x3).html(data2);
  });
}


function Time_user(a,b,c,d,e){
	
	c2 = document.getElementById(c).value;
	console.log("http://'.$_SERVER['SERVER_NAME'].'/xxxxappxxxx/give_time/"+a+"/"+b+"/"+c2+"/"+d);
	//return;
	
	
	$.get("http://'.$_SERVER['SERVER_NAME'].'/xxxxappxxxx/give_time/"+a+"/"+b+"/"+c2+"/"+d, function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
	document.getElementById(d).innerHTML=data;
  });
}
</script></html>
';


	#close
$conn->close();
  exit();

  /*
 #Hey kunzy, i am kunle of 28-11-2022, just want on say something about the code below: this was very important and you may still need for marketing purpose as it allow a company to give taste customer by timing 
 ===========================
  while($row = $result->fetch_assoc()) {
        echo "<tr>
		<td>" . $row["id"]. " </td>
		<td>" . $row["user_id"]. "</td>
		<td>" . $row["veri_no"]. "</td>
		<td>" . $row["yeks"]. "</td>
		<td>" . $row["name"]. "</td>
		<td>" . $row["phone_no"]. "</td>
		<td id='" . $row["user_id"]. "_status' >" . sw2($row["status"]). "</td>
		<td class='red'><button id='" . $row["user_id"]. "_button' onclick=\"srch2('" . $row["user_id"]. "','" . $row["veri_no"]. "','" . $row["user_id"]. "_status','" . $row["user_id"]. "_button')\">" . sw($row["status"]). "</button></td>
		<td>" . date('d.m.y',strtotime($row["created_at"])). '</td>
		<td>
			<select id="'.$row["user_id"].'_sele">
				<option value="7">5 sec</option>
				<option value="60">1 min</option>
				<option value="300">5 min</option>
				<option value="1800">30 min</option>
			</select>

		<button id="'. $row["user_id"]. '_send_button" onclick="Time_user(\'' . $row["user_id"]. "','" . $row["veri_no"]. "','".$row["user_id"]."_sele','". $row["user_id"]. "_send_button')\">send</button>
	  </td>
		</tr>";
    }
  */
		
	}
}

run_itz();
?>