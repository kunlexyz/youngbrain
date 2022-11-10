<?php

$files = "./3/js/";
$im = glob($files."*");
foreach($im as $ima){
    echo "'".$ima . "',<br>";
}

?>