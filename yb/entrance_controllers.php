<?php
#$y_ is defined in the very file/app that make use of this file

function bring($x,$y){
	$url = explode('/',$_SERVER['REQUEST_URI']);
	if($url[2] == $x){
		require($y_.'/controller/'.$y);
	}
}
function bring2($x,$y){
	$url = explode('/',$_SERVER['REQUEST_URI']);
	if($url[1] == $x){
		require($y_.'/controller/'.$y);
	}
}

$url = explode('/',$_SERVER['REQUEST_URI']);

bring2('math_qu','mathQu.php');

if($url[1] =='xxxxappxxxx'){
	
require($y_.'/controller/list.php');
bring('mytatus','status.php');
bring('regis','status.php');
require($y_.'/controller/status_change.php');

}
?>