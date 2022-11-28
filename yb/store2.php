<?php

require('database_con.php');
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// List of App Users
if(isset($_GET['app_status']) && $_GET['app_status'] == 'list'){
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
$conn->close();
  exit();
}
#End
if(isset($_GET['app_status']) && $_GET['app_status'] == 'change'){
	//echo '-'.$_GET['user'].'-'.$_GET['veri'].'-'.$_GET['status'];
	
  	$user = test_input($_GET['user']);
	$veri = test_input($_GET['veri']);
	$status =  test_input($_GET['status']);
	
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

if(isset($_GET['app_status'])){
	//echo 'this goes through app status code';
	
  	$user = test_input($_GET['user']);
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

if (isset($_GET['check'])) {
  	$email = $_GET['check'];
  	$sql = "SELECT * FROM app_info WHERE user_id='$user'";
  	$results = mysqli_query($conn, $sql);
  	if (mysqli_num_rows($results) > 0) {
  	  echo "taken";	
  	}else{
  	  echo 'not_taken';
  	}
	$conn->close();
  	exit();
}

if(isset($_POST['user'])) {
  	$user = $_POST['user'];
	$veri =  $_POST['veri'];
	$key =  $_POST['key'];
  	$sql = "SELECT * FROM app_info WHERE user_id='$user'";
  	//$resu = mysqli_query($conn, $sql);
	
	$result2 = $conn->query($sql);
	if ($result2 != false) {
		print_r($result2->num_rows);
		if ($result2->num_rows > 0) {
		  echo "the id exist";
		  $result2 = $result2->fetch_assoc();
		  echo '<br>'.$result2['id'].'-'.$result2['user_id'].'-'.$result2['veri_no'].'-'.
		  $result2['yeks'].'-'.$result2['status'].'-'.$result2['created_at'].'-'.$result2['updated_at'];	
		}else{
		  //echo 'not_taken';
		  //print_r(mysqli_num_rows($resu));
		$sql2 = "INSERT INTO app_info (user_id, veri_no, yeks, status) VALUES ('$user', '$veri', '$key', 'ON')";
		if (mysqli_query($conn, $sql2)) {
			echo "New record created successfully";
		} else {
			echo "Error: " . $sql2 . "<br>" . mysqli_error($conn);
		}
		echo 'ON';
		}
	}else{
		echo 'not connected to $db';
	/*	
$sql = "INSERT INTO maxi (firstname, lastname, reg_fee, loan_type, loan_amount, address, branch, referrer) VALUES ('$firstname', '$lastname', '$reg_fee', '$loan_type', '$loan_amount', '$address', '$branch', '$referrer')";
*/
		
	}
	$conn->close();
  	exit();
}else{echo 'nothing pass here';}

$conn->close();
/*
if (isset($_POST['save'])) {
  	$username = $_POST['username'];
  	$email = $_POST['email'];
  	$password = $_POST['password'];
  	$sql = "SELECT * FROM users WHERE username='$username'";
  	$results = mysqli_query($db, $sql);
  	if (mysqli_num_rows($results) > 0) {
  	  echo "exists";	
  	  exit();
  	}else{
  	  $query = "INSERT INTO users (username, email, password) 
  	       	VALUES ('$username', '$email', '".md5($password)."')";
  	  $results = mysqli_query($db, $query);
  	  echo 'Saved!';
  	  exit();
  	}
 }
 
 ##########################
 fROM HOME AND LEARN
 
 $uname = "";
$pword = "";
$errorMessage = "";

We then get the username and password from the textboxes:

$uname = $_POST['username'];
$pword = $_POST['password'];

The connection to the server and database is the same as before (use require to get the configure file you set up, and get those constants.)

require '../../configure.php';
$database = "login";
$db_found = new mysqli(DB_SERVER, DB_USER, DB_PASS, $database );

If the database is found, then we start a prepared statement:

$SQL = $db_found->prepare('SELECT * FROM login WHERE L1 = ?');

The SQL selects all the records where the username matches the one provided:

$SQL->bind_param('s', $uname);

We then execute and see if there any results:

$SQL->execute();
$result = $SQL->get_result();

We only need to check if there is one result, as our signup page ensured that all usernames were unique.

if ($result->num_rows == 1) {

If there are no results then we can print out a message:

$errorMessage = "username FAILED";

(Although we've said "username FAILED", you probably don't want to be this explicit. The idea is to not give any clues to an attacker. So you could just say something like "Login failed". For testing purposes, though, we'd like to know why something went wrong.)

If we do get a result back then we need the full result array:

$db_field = $result->fetch_assoc();

The fetch_assoc function, remember, brings you back an array, with all positions in the array filled with a field in the database row that was returned. The $db_field variable would then look like this:

$db_field['$ID'] = an ID
$db_field['L1'] = a username
$db_field['L2'] = a password

The one we want to check is the L2 field, which contains the password:

if (password_verify($pword, $db_field['L2'])) {
}

else {
}

Inside of the IF Statement is this:

password_verify($pword, $db_field['L2'])

To check a password in a database table, you can use the inbuilt PHP function password_verify. The password_verify function needs two things: the password you want to check, and the password hash you want to check it against. For us, the password hash is in the $db_field['L2'] variable. The password inside of the $pword variable came from the textbox on the form. When you compare the two, you'll either have TRUE, the password is correct, or FALSE, the password is wrong.

If the password and username are OK, we have these three lines of code for the IF Statement:

session_start();
$_SESSION['login'] = "1";
header ("Location: page1.php");

So that a user can be remembered across different web pages, you can use something called a Session. A session is simply the time spent at a particular site or sites. You can store values with sessions, and these values will be available to all pages on the site. When you close your browser, the sessions will end. There are quite a lot of ways to use sessions, but we're only interested in saving a value so that it can be referred to across different pages.

To set up a session variable, you need to issue the session start command:

session_start( );

This starts a PHP session. To set up a session variable that you can use to store values, you use this:

$_SESSION[ ]

In between the square brackets of $_SESSION, you type the name of your variable. Like all variable names, you can call it almost anything you like. Storing values in the session variable is just the same as storing values in a normal variable:

$_SESSION['login'] = "1";

After the script runs, you'll have a session variable called 'login' that is set to a value of 1, if the user is OK. You can then use the "header" function to redirect the user to the page on your site for members, page1.php in the code above:

header ("Location: page1.php");

Notice the else part of the password_verify IF Statement. It's this:

else {

$errorMessage = "Invalid Login";
session_start();
$_SESSION['login'] = '';

}

First, we're placing a something in the errorMessage variable: Invalid Login. This will be displayed at the bottom of the HTML form. Next, we start a session and then place a blank value in the login sessions:

session_start();
$_SESSION['login'] = '';

We're using the same session name (login), but this time we set it to a blank string. If the user tries to gain access to a restricted part of the site, we'll check for a blank string. A blank string means that the user hasn't logged on successfully, so we'll redirect them to the login page.

A note of caution here. If you switch cookies off in your browser, the script above may refuse to work! This is because when you use session_start, PHP sends the browser something called a session ID. This is a long string of letters and numbers. PHP attempts to save the session ID as a cookie. But it only does this if a line in php.ini from your Apache server is set. This line:

session.use_cookies = 1

If you set this value to 0, then you should be able to log on whether cookies are set or not. The problem is, there's a good chance that you can't set this to zero. Especially if you have web hosting with someone else. The solution, in that case, is to check whether cookies are enabled or not.

You don't actually need PHP to check if cookies are enabled. You can use Javascript. Try this search string in Google:

javascript +cookies +enabled

You should then find plenty of ideas for scripts to check if cookies are enabled in the browser.

In the next part, we'll check if the user is logged in, and offer the option to logout.
 */
 
?>
<html>
<body>
</body>
<script>

</script>
</html>