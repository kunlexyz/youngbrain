<?php

function bring($x,$y){
	$url = explode('/',$_SERVER['REQUEST_URI']);
	if($url[2] == $x){
		require('yb/controller/'.$y);
	}
}
function bring2(){
	$url = $_SERVER['REQUEST_URI'];
	//echo $url;
	$url = explode('/',$url);
	if($url[1] =='xxxxappxxxx' && $url[3] == 'change'){
		if(isset($url[4]))
		echo 'I just got the - '. $url[4];
		exit;
	}
	
}

$url = explode('/',$_SERVER['REQUEST_URI']);

if($url[1] =='xxxxappxxxx'){
	
require('yb/controller/list.php');
bring('mytatus','status.php');
bring('regis','status.php');
require('yb/controller/status_change.php');

}
?>