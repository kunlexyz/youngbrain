
var old='';oldx='';
function openNav() {
  document.getElementById("myNav").style.width = "75%";
  document.getElementsByClassName('overlay2')[0].style.display='block';
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementsByClassName('overlay2')[0].style.display='none';
  //document.getElementById('namebox').style.display = 'none';
}

var intro = function(){
        $("#intro").slideUp(3000);
}
/*
function online(){
	$('#layer1').slideUp(1000);
	$('#the_line_frame').slideDown(2000);
}
function bakHome(){
	$('#the_line_frame').slideUp(1000);
	$('#layer1').slideDown(2000);
}
*/