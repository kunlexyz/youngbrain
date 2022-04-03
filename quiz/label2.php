<?php

require('../database_con.php');

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
if($_POST["uname"] !== '00' && $_POST["surname"] !== '00' &&
  $_POST["phone"] !==  '00'){

//$sql = "SELECT * FROM Orders LIMIT 30";
/*	$sql_1_record = "SELECT * FROM record LIMIT 1";
	$result = $conn->query($sql_1_record);
	if ($result->num_rows > 0) {
			// output data of each row
			while($row = $result->fetch_assoc()) {
			$d_date = $row["created_at"];
			}
	$d_date = substr($d_date, 0,10);
	$dd = date("Y-m-d");
	
	$dayz = number_of_working_days($d_date, $dd);
	}else {$dayz = 0;}
	
	//delete all data in the table
if($dayz > 0 ){
	$sql_1_record = "DELETE FROM record";
		if ($conn->query($sql) === TRUE) {
			echo "Record deleted successfully";
		} else {
			echo "Error deleting record: " . $conn->error;
		}
}
	//
mysqli_close($conn);
			exit;*/
			//
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["reg"]) == "reg") {
  $firstname = test_input($_POST["uname"]);
  $lastname = test_input($_POST["surname"]);
  $phone = test_input($_POST["phone"]);
  
  $infoA = '';
  $infoB = '';
  $infoC = '';
  $gatepass = '';
  
  //check if the correct info was entered
  if(!isset($_POST["uname"]) || $firstname == '')
  {	$gatepass = 'no';
  		$infoB = 'You did not enter your name';
  }
  
  //check if the surname was entered
  if(!isset($_POST["surname"]) || $lastname == '')
  {	$gatepass = 'no';
  		$infoC = 'You did not enter your surname';
  }
  
  //check if the phone No was entered
  if(!isset($_POST["phone"]) || strlen($phone) < 10)
  {	$gatepass = 'no';
  		$infoA = 'You did not enter your phone Number correctly';
  }
  
  //stop exe if it does not meet the requiremnet
  if($gatepass == 'no')
	{
	echo check_if_empty($infoA,$infoB,$infoC,$phone,$firstname,$lastname);
	
	mysqli_close($conn);
	exit;
	}
	
  	$sql = "SELECT * FROM record WHERE phone='$phone'";
	
	$result2 = $conn->query($sql);
	//if ($result2 != false) {
		
	$d_date = date("Y-m-d");
	while($row = $result2->fetch_assoc()) {
	$d_date = substr($row["created_at"], 0,10);		
	}
	
	$dd = date("Y-m-d");
	$dayz = number_of_working_days($d_date, $dd);
	if($dayz < 7){
		
		if ($result2->num_rows > 0) {
		  ///if the phone no exist";
		  $info = '
		  <html>
		  <head><title>Score Board</title>
		  <style>
		  td{padding: 8px;
border-left: 1px solid #aaa;
		  }
		  </style></head>
		  <body>
		  You have attempted. You can only attempt once in a week.<br />
		  This is your score';		  
		
			echo $info .'<br />
			<table class="tabler bg_white" style="border-right:2px;">
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
			echo '</table>
	<a href="label.php">
<input type="submit" id="start" style="
font-size:22px; padding:6px;" value="Back" />
	</a>
			';
			
			//Table that contains general scores			
	
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
	echo '</table>
	</body>
	</html>
	';
	}
	//
mysqli_close($conn);
			exit;
		}else{
			/*
  $firstname = test_input($_POST["firstname"]);
  $lastname = test_input($_POST["lastname"]);
  $phone = test_input($_POST["phone"]);
  */
  }
	
	}
}else{
	mysqli_close($conn);
	//begining of paper
	//header('location:label2.php');
	header('Location: label.php');
			echo "

			";
	//end of paper		
}
  }else{$firstname = '!_This_is_a_Test_Mode';
  		$phone='080_TEST';}
mysqli_close($conn);
?>

<!doctype html>
<html>
<head>
<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
<meta name='viewport' content='width=device-width, initial-scale=1'>
<title>app</title>
<link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Crimson+Pro&family=Literata'>
    
<style>
body{
	margin:0px;
	padding:0px;
	background-color:#d0ebfb;
        font-family: 'Crimson Pro', serif;
}
input[type=text]{
	font-size:22px;
	border:none;
	margin:1px 0px;
	border-bottom:thin solid #06C;
	width: 90%;
}
.mk{vertical-align: middle;}

.imgCon{background-color:#fff;}

.imgCon img{max-width:100%;}

ol{ padding:20px;
    max-width: 310px;
    margin: auto;}

#ti{
	position:fixed;
	top:0px;
	right:0px;}
#ti, #start, .ti {display:inline-block;
	background-color:#009;
	color:white;
	padding:6px;
	cursor:pointer;
	font-size:26px;
	margin:0px 1px;
}
.hh{
	background-color:#e0fbfb;
	font-size:20px;
	padding:6px;
	margin-bottom: 6px;
	}
.ce{text-align:center;}
#end, .v{width:100%;height:100vh;}


.roundIt{border-radius:11px; background-color:#fff;
	border:none;
	font-size:22px;
	padding:5px;
	margin:5px 0px;
  box-shadow: 3px 3px 3px #bcc0d2;
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

		<div id='msg' class ='ce' >
  
Hey 
<?php

$xx = explode(' ',$firstname);
echo $xx[0];

  ?>
<br />
How far can you go in 180 seconds?
<div id="caption" style="padding-top:5px;">
<img src="images/biology_quiz.png" style="max-width: 91%;" />
</div>

<div id='ti2' style='padding:11px 0px;'> Time duration: 3 minutes</div>
<!--

<br />
Enter Your phone number &amp; name to redeem your price if your win.
<br />
<input id='Uphone' class='roundIt' type='tel' placeholder='Phone Number:' />
<br />
<input id='Uname' type='text' class='roundIt' placeholder='Name:' />

How much can you label right in 60 sec

-->

<br />
<div id='start' style='font-size:30px;' onclick='start2()'>Start</div>
		</div>
<!--
Score 200226754811
-->
		<div id='scoreBoard'>

<button onclick='backq()'> Back </button>
Score Board
<div id='score'></div>
		</div>
<!--
End 200226754811
-->
        <div id='end' class ='ce' style='display:none;'>
<div id='ti3' class='ti'> Time up</div>
<div id='sco' style='font-size:30px;'>hey</div>
	<div style='padding-top:15px'></div>
    <!--
<div id='start' style='
	font-size:30px;' onclick='again()'>Try again?</div>
    -->
<div id='start' style='font-size:30px;' onclick='passq()'>Past Results</div>

			


		<div class="pa">
  <img src="images/bio_logo.png" style="width:35px; vertical-align:middle;" alt="Biology Practical Activity and Work Book 1 - 3"  /> YOUNG BRAIN PUBLISHERS<br>
		
		<a style="text-decoration:none; font-size: 16px;" href="https://youngbrain.com.ng/app">
  Download the complete app
			<br />
  
  <img src="images/ad.jpg" alt="Biology Practical Activity and Work Book 1 - 3"  />
  </a>
			
<div style='padding-top:15px;'>
For more exercises: download the APP for <br />
Biology Practical Activity &amp; Work Book 1 - 3.<br />

<a href='https://github.com/kunlexyz/My-app/raw/master/biologyPracticalActivityAndWorkBook_1_1.0.apk'>
<div id='start' style='font-size:30px;' onclick='again()'>Biology_App</div>
</a>

<br /> For more information, visit our facebook page<br/><a href="https://www.facebook.com/Youngbrain-publishers-ltd-103972044777696/">Youngbrain Publishers Ltd </a>
</div>
			</div>
</div>
		<div id='labelView' style='display:none;'>
<div class ='hh'>Answer All

	<div id='ti'> Time: </div>
</div>
<style>

.pa{padding:10px;
font-size:20px;
text-align:left;}

.imn {
    margin: auto;
    display: block;
    max-width: 100%;
}
</style>

<div class='qq'>
<div class="pa paj">
1. Write the classes that the following organisms belong in the spaces
provided against them.
</div>
<table class="tabler">
<tr class="trA"><td>Organisms</td><td>Classes</td>
</tr>
<tr><td>
Mosquito  </td><td>
<input type="text"  class="answ"  /><span class="resp"></span>
</td></tr>
<tr><td>
Dogs  </td><td>
<input type="text"  class="answ"  /><span class="resp"></span>
</td></tr>
<tr><td>
Cat  </td><td>
<input type="text"  class="answ"  /><span class="resp"></span>
</td></tr>
<tr><td>
Maize plant  </td><td>
<input type="text"  class="answ"  /><span class="resp"></span>
</td></tr>
<tr><td>
Frog  </td><td>
<input type="text"  class="answ"  /><span class="resp"></span>
</td></tr>
<tr><td>
Mango </td><td>
<input type="text"  class="answ"  /><span class="resp"></span>
</td></tr>
</table>
	</div>
    <div class='qq'>
<div class="pa paj">
2. <strong class="u">Identify diagrams A.B.C </strong>
</div> 


<div class="fig">
<strong>fig2.7a:</strong>
</div>
<img src="images/fig2.7a.jpg" class="imn" /><br />
A. 
<input type="text"  class="answ"  /><span class="resp"></span>

<div class="fig">
<strong>fig2.7b:</strong> 
</div>
<img src="images/fig2.7b.jpg" class="imn" /><br />
B. 
<input type="text"  class="answ"  /><span class="resp"></span>

<div class="fig">
<strong>fig2.7c:</strong>
</div>
<img src="images/fig2.2b.jpg" class="imn" /><br />
C. 
<input type="text"  class="answ"  /><span class="resp"></span>

<div class="pa paj">
d. Which of these organisms is a cilliate?

<input type="text"  class="answ"  /><span class="resp"></span>
</div>

</div>
		
	<div class='qq'>

	</div>
	<div class='qq'>

	</div>
		</div>

</body>

<script type='text/javascript' src='../jq.js'></script>

<script type='text/javascript'>

$('#score').load('label.php?label=q');

function passq(){
		document.getElementById('scoreBoard').style.display = 'block';
		document.getElementById('end').style.display = 'none';		
}

function backq(){
		document.getElementById('scoreBoard').style.display = 'none';
		document.getElementById('end').style.display = 'block';		
}
function again(){
		document.getElementById('msg').style.display = 'block';
		document.getElementById('end').style.display = 'none';	
}
var tym=5;
tymbox=document.getElementById('ti');
function ty(){
	if(tym >0){
		tym--;
		tymbox.innerHTML = 'Time : '+tym;
		setTimeout(ty, 1000);
	}
	else {
		tymbox.innerHTML = 'TIME UP! 00:00';
		document.getElementById('ti3').innerHTML='TIME UP! 00:00';
		document.getElementById('end').style.display = 'block';
		document.getElementById('labelView').style.display = 'none';
	
	cc = countSco();
	document.getElementById('sco').innerHTML='you scored: ' + cc + '<div style="font-size:16px;">We will contact you on friday if you are the highest scorer for the week <br />You can try again next week.</div>';
		if(phoneNo !== '080_TEST'){
			UPDATE_APP();
		}
	}
}
<?php
echo '
var fname = "'.$firstname.'";
phoneNo = "'.$phone .'";
	';
?>
 function UPDATE_APP(){
    var txtName = fname;
	txtPhone =  phoneNo;
	txtScore =  cc;
	  //alert(txt1);
    $.post('label.php', 
	{
		name: txtName,
		phone: txtPhone,
		score: txtScore
	}, 
	function(result){
      $('#score').html(result);
	  
  	localStorage.season = phoneNo;
    });
}
localStorage.season = 0;
function start2(){
	if(localStorage.season == phoneNo){
		passq();
		document.getElementById('msg').innerHTML='You have attempted <br /> You can only participate once in a week <br /> You visit our facebook page<br/><a href="https://www.facebook.com/Youngbrain-publishers-ltd-103972044777696/">Youngbrain publishers Ltd </a> ';
	}else{
		tym = 181;
		document.getElementById('msg').style.display = 'none';
		document.getElementById('scoreBoard').style.display = 'none';
		document.getElementById('labelView').style.display = 'block';
		setTimeout(ty, 1000);
	}
}
function countSco(){
	var mkk=0;
	
	for(ii = 0; ii < totSco.length; ii++){
		mkk=mkk + totSco[ii];
	}
	
	return mkk;
}

/*** marker **/

var g=document.getElementsByClassName('answ');
gg=document.getElementsByClassName('resp');
z = 'x';
totSco=[];
function myFunction(){
for (var i = 0, len = g.length; i < len; i++)
{
totSco[i]=0;
//if(answer[i][0].length < 1){gg[i].innerHTML=xw}else{ gg[i].innerHTML=answer[i][0];}
    (function(index){
        g[i].onkeyup = function(){
              //alert(index+1)  ;
			  if(answer[index][0].length < 1){gg[index].innerHTML=xw}else{
				  
              var y=g[index].value.toLowerCase();
              xx=answer[index];
              mk = '';
              anso = 'f';
              //alert(xx.length);
			  			 
			  
			  for (var ii = 0, len = xx.length; ii < len; ii++)
			  {x2 = xx[ii].toLowerCase();
			  if(y==x2){anso = 't';
			  /*
			  return anso;
			  break;
			  */
			  }
			  }
			  
if(anso=='t'){z= "<img src='images/correctx.jpg' alt='correct' class='mk' />";
totSco[index]=1;}
else{z= "<img src='images/wrongx.jpg' alt='wrong' class='mk' />";
totSco[index]=0;}//{z= x2}
//document.getElementById('demo').innerHTML=z;
gg[index].innerHTML=z;
        }}    
    })(i);

}
}
setTimeout(myFunction, 3000);


var answer= [

	['Insecta','insects','insect'],
	['Mammalia','mammals'],
	['Mammalia','mammals'],
	['Angiosperms','Angiosperm'],
	['Amphibia','Amphibians','Amphibian'],
	['Angiosperms','Angiosperm'],
	//2
	['amoeba'],
	['Euglena'],
	['paramecium'],
	['paramecium']
];

/*


Good Morning
I want two educational apps of the same content that can be installed on android and window OS.

The best way to explain what i want is by showing you a prototype which can be found on https://www.youngbrain.com.ng/app

Please send your charges / quotation.

And if you have any sample that is better than that Please forward the url

Thanks
*/

</script>

</html>