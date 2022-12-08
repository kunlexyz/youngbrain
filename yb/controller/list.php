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

if($_SERVER['SERVER_NAME'] =='localhost'){
	$htt='http';
}else{	
	$htt='https';
}

if ($result->num_rows > 0) {
	echo '
	<html>
	<head>
	<title> List of downloaded Apps</title>
	<style>
	.red{background-color:red;}
	.rr{color:red;}
	
	tbody>tr>:nth-child(your_parameter){ 
/* your css here */
}
table {
    font-size: 16px;
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
}
tr:nth-child(even) {
    background-color: #f2f2f2;
}
th {
    padding-top: 11px;
    padding-bottom: 11px;
    background-color: #4CAF50;
    color: white;
}
td, th {
    border: 1px solid #ddd;
    text-align: left;
    padding: 8px;
}
.pCon {
    margin: auto;
	margin-top: 80px;
    padding: 20px;
    background: #eee;
    max-width: 350px;
    text-align: center;
    box-shadow: 0 2px 6px rgb(0 0 0 / 12%), 0 4px 7px rgb(0 0 0 / 24%);
}
.pas {
    font-size: 22px;
    border-radius: 8px;
    border: solid 2px #f00;
    padding: 10px;
    max-width: 90%;
    margin-top: 5px;
    background: #fff;
}
.btnRed {
    color: #FFF;
    background-color: #F00;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
}
.btnC {
    border: solid 1px #F00;
    border-radius: 5px;
    display: inline-block;
    overflow: hidden;
}
.overlay2 {
    opacity: 0.5;
    background-color: #000;
    position: fixed;
    z-index: 2;
    height: 100%;
    width: 100%;
    display: none;
    top: 0px;
	left: 0px;
}
.lay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
	z-index: 3;
}
body{margin:0px;padding:0px;}
	</style>
	</head>
	<body>
	';
echo '<table class="tabler bg_white smal_t">
<tr class="trA">
	<th>No.</th>
	<th>Reg Id</th>
	<th>Veri No</th>
	<th>Activation</th>
	<th>Name</th>
	<th>Phone</th>
	<th>Status</th>
	<th class="red">Switch</th>
	<th>Date</th>
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
		<td class='red'>
		<button id='" . $row["user_id"]. "_button' onclick=\"openNav('" . $row["user_id"]. "','" . $row["veri_no"]. "','" . $row["user_id"]. "_status','" . $row["user_id"]. "_button')\">" . sw($row["switch"]). "</button>
		</td>
		<td>" . date('d.m.y',strtotime($row["created_at"])). '</td>
		</tr>';
    }
	echo "</table>";
} else {
    echo "0 results";
}
echo '
<div class="overlay2" onclick="closeNav()" style="display: none;">                                </div>
<div class="lay" style="display: none;">
	<div id="_1pc" class="pCon shadow">
		
		<div id="info">Please enter your:</div>
		Password:<br>
		<input type="password" id="name" class="pas">

		
			<div class="ce">
		<div onclick="enta()" class="btnRed btnC">Enter</div>
		<div onclick="closeNav()" class="btnRed btnC">←Back</div>
			</div>
		<div id="help">
			
		</div>
	</div>
</div>

<script type="text/javascript" src="'.$htt.'://'.$_SERVER['SERVER_NAME'].'/yb/jq.js">
</script>
<script>

var h1=h2= h3= h4="";
function srch2(p1,p2,p4,x3){
	//alert("i dey");

	pp = document.getElementById(x3).innerHTML;
	p3 = "ON";
	if(pp == "ShutDown"){p3 = "OFF"}else {p3 = "ON";}
	
	document.getElementById(x3).innerHTML = "processing...";
	//alert(x);
	//$("#result").load("card2.php?quick_search=qq&member="+qs);
	
	$.get("'.$htt.'://'.$_SERVER['SERVER_NAME'].'/yb/store.php?app_status=change&user="+p1+"&veri="+p2+"&status="+p3, function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
	var data2 = "";
	if(data.toUpperCase() == "OFF"){/*data = "ON";*/data2 = "Start";
	}else {/*data = "OFF";*/data2 = "ShutDown"}
	$("#"+p4).html(data);
	$("#"+x3).html(data2);
  });
}

function enta(){
	if(document.getElementById("name").value ==""){}
	if(fun(document.getElementById("name").value,pep)==true){
		//alert("i dey");
		srch2(h1,h2,h3,h4);		
		closeNav();
	}else{
		document.getElementById("info").innerHTML="Invalid <span style=\"color:#f00\" >password</span>!";
	}
}

function openNav(p1,p2,p4,x3) {
	h1 = p1;
	h2 = p2;
	h3 = p4;
	h4 = x3;
	document.getElementsByClassName("lay")[0].style.display="block";
	document.getElementsByClassName("overlay2")[0].style.display="block";
  }
  
function closeNav() {
	document.getElementsByClassName("lay")[0].style.display="none";
	document.getElementsByClassName("overlay2")[0].style.display="none";
}

pep =[
"col001",
"ramie01",
"mau55",
"kunz07"
];
fun = function(x,y){
	z=false;
	for(i=0;i<y.length;i++){
		if(x == y[i]){
			z=true;
			break;
		}
	}
	return z;
}

function Time_user(a,b,c,d,e){
	
	c2 = document.getElementById(c).value;
	console.log("http://'.$_SERVER['SERVER_NAME'].'/xxxxappxxxx/give_time/"+a+"/"+b+"/"+c2+"/"+d);
	//return;
	
	
	$.get("'.$htt.'://'.$_SERVER['SERVER_NAME'].'/xxxxappxxxx/give_time/"+a+"/"+b+"/"+c2+"/"+d, function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
	document.getElementById(d).innerHTML=data;
  });
}
</script>
</body>
</html>
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