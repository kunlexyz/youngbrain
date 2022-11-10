<?php

function number_of_working_days($from, $to) {

	$from = new DateTime($from);
	$to = new DateTime($to);
	//$to->modify('+1 day');
	$interval = new DateInterval('P1D');
	$periods = new DatePeriod($from, $interval, $to);

	$days = 0;
	foreach ($periods as $period) {
		$days++;
	}
	//if($days > 200){$days = 200;}
	return $days;
}


function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
/*
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";
*/
$servername = "localhost";
$username = "youngbra_maxi123";
$password = "xkyLj9xiEtz=";
$dbname = "youngbra_maxi";

function check_if_empty($a,$b,$c,$d,$e,$f){
	return "<html>
	<head>
	<meta name='viewport' content='width=device-width, initial-scale=1'>
	<title>Quiz</title>
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
.red{color:red;}
</style>
</head>
	"
	//html
	.'
	<body>
	<div id="msg" class ="ce" >
How far can you go in 180 seconds?

<div id="caption" style="font-size:50px;padding-top:15px;">

<img src="images/biology_quiz.png" style="max-width:90%; margin:auto;" />
</div>
<div id="ti2" style="padding:11px 0px;"> Time duration: 3 minutes</div>
<u><strong>Instruction</strong></u> : This quiz is meant for secondary school students, WAEC,GCE,NECO and JAMB candidates.
<hr />
  		<form method="post" action="label2.php">
Enter Your phone number &amp; name to redeem your price if your win.
<br />
<input id="Uphone" name="phone" value="'.$d.'" class="roundIt" type="tel" placeholder="Phone Number:" required="required" />
<div class="red">'.$a.'</div>
Enter your first name and middle name<br />
<input id="Uname" name="uname" value="'.$e.'" type="text" class="roundIt" placeholder="Name:" required="required" />
<div class="red">
'.$b.'</div>
Enter your surname<br />
<input id="surname" name="surname" value="'.$f.'" type="text" class="roundIt" placeholder="Surname:" required="required" />
<div class="red">
'.$c.'</div>
<input type="hidden" name="reg" value="reg" />
<input type="submit" id="start" style="
	font-size:30px;" onclick="start2()" value="Send" />
		</form>
<!--
How much can you label right in 60 sec
-->
		</div>
		
		<div id="scoreBoard">

<button onclick="backq()"> Back </button>
Score Board
<div id="score"></div>
		</div>
		
		</body>

<script type="text/javascript" src="../jq.js"></script>

<script type="text/javascript">

$("#score").load("label.php?label=q");
</script>
		</html>';
}
?>