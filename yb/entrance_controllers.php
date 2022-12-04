<?php

function bring($x,$y){
	$url = explode('/',$_SERVER['REQUEST_URI']);
	if($url[2] == $x){
		require('yb/controller/'.$y);
	}
}
function bring2($x,$y){
	$url = explode('/',$_SERVER['REQUEST_URI']);
	if($url[1] == $x){
		require('yb/controller/'.$y);
	}
}

$url = explode('/',$_SERVER['REQUEST_URI']);

bring2('math_qu','mathQu.php');

if($url[1] =='xxxxappxxxx'){
	
require('yb/controller/list.php');
bring('mytatus','status.php');
bring('regis','status.php');
require('yb/controller/status_change.php');

}
?>