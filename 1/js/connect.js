/*
function mODE(elem){
elem.css({"margin-left": siz+"px"});

}
mODE('#logoTem');
*/

// font setting - handwritting setting

//......
var old='';oldx='';
function openNav() {
  document.getElementById("myNav").style.width = "75%";
  document.getElementsByClassName('overlay2')[0].style.display='block';
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementsByClassName('overlay2')[0].style.display='none';
}
/*
function showViewTab(nw){
        $("#cova").slideUp(3000);
	document.getElementById(old2).style.display='none';
	document.getElementById(nw).style.display='block';
	old2=nw;
	closeNav();
}
*/
//...themes
function theme2(title,text,groundD,groundOdd,titleText){
	$('.headaChap').css({"background-color":title,"color":titleText});
	$('body').css({"background-color":groundD,"color":text});
	$('a').css({"color":text});
	$('.co').css({"background-color":groundD,"color":text});
	$('tr:nth-child(odd)').css({"background-color":groundOdd,"color":text});
	$('.heada1G').css({"background-color":title,"color":titleText});
	$('.cirCh').css({"background-color":title,"color":titleText});
	$('.pa:nth-child(odd)').css({"background-color":groundOdd,"color":text});
	$('.pa').css({"background-color":groundD,"color":textD});
}