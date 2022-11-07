/*
function mODE(elem){
elem.css({"margin-left": siz+"px"});

}
mODE('#logoTem');
*/

// font setting - handwritting setting

//cover slide
$(document).ready(function(){
        $("#cova1").slideUp(3000);
});
$(document).ready(function(){
    $("#cova").click(function(){
        $(this).slideUp(3000);
    });
});
//......
var old='';oldx='';
function openNav() {
  document.getElementById("myNav").style.width = "75%";
  document.getElementsByClassName('overlay2')[0].style.display='block';
        $("#cova").slideUp(3000);
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementsByClassName('overlay2')[0].style.display='none';
}
//.....CODE for views...//
old='home';
oldM='cours';
old2='home';
function showViewMini(nwM){
        $("#cova").slideUp(3000);showViewTab('home');
	document.getElementById(oldM).style.display='none';
	document.getElementById(nwM).style.display='block';
	oldM=nwM;
	closeNav();
}
function showViewTab(nw){
        $("#cova").slideUp(3000);
	document.getElementById(old2).style.display='none';
	document.getElementById(nw).style.display='block';
	old2=nw;
	closeNav();
}

//...themes
var them = 0;
function theme2(title,text,groundD,groundOdd,titleText,T){
	them = T;
	$('.headaChap').css({"background-color":title,"color":titleText});
	$('body').css({"background-color":groundD,"color":text});
	$('a').css({"color":text});
	$('.co').css({"background-color":groundD,"color":text});
	$('tr:nth-child(odd)').css({"background-color":groundOdd,"color":text});
	$('.heada1G').css({"background-color":title,"color":titleText});
	$('.cirCh').css({"background-color":title,"color":titleText});
	$('.pa:nth-child(odd)').css({"background-color":groundOdd,"color":text});
	$('.pa').css({"background-color":groundD,"color":text});
}
function Th(){
	//alert(them);
	$('.headaChap').css({"font-size":H+"px","font-family":ft});
	$('.pa').css({"font-size":hs+"px","font-family":ft});
	switch (them) {
		case 0:
			break;
		case 1:
			theme2('#A85400','#000','#ffffa5','#ffc774','#fff',1);
			break;
		case 2:
			theme2('#F00','#000','#FFF','#fde','#fff',2);
			break;
		case 3:
			theme2('#060','#000','#dFd','#afa','#fff',3);
			break;
		case 4:
			theme2('#C09','#000','#fbb8fb','#fb99fb','#fff',4);
			break;
		case 5:
			theme2('#006','#000','#99F','#AAF','#FFF',5);
			break;
		case 6:
			$('.imDesc').css({"color":"#000"});
			theme2('#412','#DDD','#000','#111','#FFF',6);
			break;
	} 
}

var H = 18;
hs = 15;
ft = 'myFirstFont';

function sizIN(){
	H = H +3;
	hs = hs + 3;
	$('.headaChap').css({"font-size":H+"px"});
	$('.pa').css({"font-size":hs+"px"});
}
function sizDE(){
	H = H - 3;
	hs = hs - 3;
	$('.headaChap').css({"font-size":H+"px"});
	$('.pa').css({"font-size":hs+"px"});
}
function fontType(ourFont){
	var ourFont= document.getElementById('font').value;
	$('.headaChap').css({"font-family":ourFont});
	$('.pa').css({"font-family":ourFont});
	ft = ourFont;
}
/*************YEK**********/
var leta = 'ZYXWVEDCBA';
letta = 'JKLMNOPQRS';
text = '';
textLetta = '';
//generator
function gener(){
	text = '';
			for (i = 0; i < 5; i++) {
			text += leta[Math.floor(Math.random()*9)];
			}
  	localStorage.verN = text;
	localStorage.actN = 0;
	localStorage.actidKey = 0;
}
//acti ....the id number corespondant
//idKey() is just for key generation that is not useful in this development
function idKey(){
		text2 = '';
		for(ii = 3; ii < 5; ii++) {
			for (i = 0; i < leta.length; i++) {
				if(localStorage.verN[ii]==leta[i]){text2+=i;break;}
			}}
		for(iii = 2; iii >= 0; iii--) {
			for (i = 0; i < leta.length; i++) {
				if(localStorage.verN[iii]==leta[i]){text2+=i;break;}
			}}
	//debugger** document.getElementsByClassName('chap')[2].innerHTML=text2;
	text3='';
			for (iii = 0; iii < 5; iii++) {
				if(iii==4){
				text3+=Math.max(text2[0],text2[4])-Math.min(text2[0],text2[4]);}
				else{
				text3+=Math.max(text2[iii],text2[iii+1])-Math.min(text2[iii],text2[iii+1]);
				
			}}
	//debugger** document.getElementsByClassName('chap')[3].innerHTML=text3;
	
	text4='';
	/*
		for(ii = 0; ii < 5; ii++) {
			for (i = 0; i < 9; i++) {
				if(text3[ii]==leta[i]){text4+=i;break;}
			}}
	*/
			for (i = 0; i < 5; i++) {
			text4 += leta[text3[i]];
			}
	//debugger*** document.getElementsByClassName('chap')[4].innerHTML=text4;
	//remove this localStorage.actN before converstion 
	localStorage.actidKey = text4;
}

function verify(){
	//if(localStorage.actidKey)
	if(localStorage.verN && localStorage.verN.length > 4){
		document.getElementById('vN').innerHTML = localStorage.verN;
		}else{//alert('cant see');
		gener();
		document.getElementById('vN').innerHTML = localStorage.verN;
	}
	if(localStorage.actN){}else{//run remove actN key since it is no longer needed
		}
	//if(localStorage.actidKey){}else{idKey();}
	document.getElementById('tk').innerHTML = localStorage.verN+'=>'+localStorage.actN+'=>'+localStorage.actidKey;
		
}
// activation key should not be store anywhere
verify();

function activ8(){
		text2 = '';
		var veriKey = document.getElementById('act').value;
		veriCon = localStorage.verN;
		actMe = localStorage.verN;
		veriCon.toUpperCase();
		for(ii = 0; ii < 5; ii++) {
			for (i = 0; i < leta.length; i++) {
				if(veriCon[ii]==leta[i]){text2+=i;break;}
			}}
	//debugger** document.getElementsByClassName('chap')[2].innerHTML=text2;
	if(text2.length < 5){
	document.getElementById('tk').innerHTML = veriCon+' is an Invalid Activation Key';
		}else{
			text3='';
					for (iii = 0; iii < 5; iii++) {
						if(iii==4){
						text3+=Math.max(text2[0],text2[4])-Math.min(text2[0],text2[4]);}
						else{
						text3+=Math.max(text2[iii],text2[iii+1])-Math.min(text2[iii],text2[iii+1]);
						
					}}
			
			text4='';
					for (i = 0; i < 5; i++) {
					text4 += leta[text3[i]];
					}
			if(text4 == veriKey){					
					
	textLetta = '';
	
			for (ii = 0; ii < 2; ii++) {
			textLetta += Math.floor(Math.random()*9);
			}
			for (i = 0; i < 3; i++) {
			textLetta += letta[Math.floor(Math.random()*9)];
			}
  	localStorage.actidKey = textLetta;
	localStorage.actN = veriKey;
				
					document.getElementById('tk').innerHTML = 'successfully activated !!!<br />Thanks for your patronage<br /> Reg No :'+ localStorage.actidKey;	
				}else{
					document.getElementById('tk').innerHTML = veriCon+' is an Invalid Activation Key'+text4;
			};
	}
}

function upperC(){
		var veriCon = document.getElementById('act').value;
		document.getElementById('act').value = veriCon.toUpperCase();
}
	
var cc = localStorage.getItem("verN");
//alert(cc);
function rem(){
	localStorage.verN = 0;
	localStorage.actN = 0;
	localStorage.actidKey = 0;
}
/************************
Your beliefs become your thoughts,
Your thoughts become your words,
Your words become your actions,
Your actions become your habits,
Your habits become your values,
Your values become your destiny.
*/
/*
    <script>

        var x;

        var y = 10;

        

        if(typeof x !== 'undefined'){

            // this statement will not execute

            alert("Variable x is defined.");

        }

        

        if(typeof y !== 'undefined'){

            // this statement will execute

            alert("Variable y is defined.");

        }

        

        // Attempt to access an undeclared z variable

        if(typeof z !== 'undefined'){

            // this statement will not execute

            alert("Variable z is defined.");

        }

        

        /-* Throws Uncaught ReferenceError: z is not defined,

        and halt the execution of the script *-/

        if(z !== 'undefined'){

            // this statement will not execute

            alert("Variable z is defined.");

        }

        

        /-* If the following statement runs, it will also

        throw the Uncaught ReferenceError: z is not defined *-/

        if(z){

            // this statement will not execute

            alert("Variable z is defined.");

        }

    </script>

stuck here

		text2 = '';
		var veriCon = document.getElementById('act').value;
		veriCon = localStorage.verN;
		actMe = localStorage.verN;
		veriCon.toUpperCase();
		for(ii = 0; ii < 5; ii++) {
			for (i = 0; i < leta.length; i++) {
				if(veriCon[ii]==leta[i]){text2+=i;break;}
			}}
	//debugger** document.getElementsByClassName('chap')[2].innerHTML=text2;
	if(text2.length < 5){
	document.getElementById('tk').innerHTML = veriCon+' is an Invalid Activation Key';
		}else{
			text3='';
					for (iii = 0; iii < 5; iii++) {
						if(iii==4){
						text3+=Math.max(text2[0],text2[4])-Math.min(text2[0],text2[4]);}
						else{
						text3+=Math.max(text2[iii],text2[iii+1])-Math.min(text2[iii],text2[iii+1]);
						
					}}
			//debugger** document.getElementsByClassName('chap')[3].innerHTML=text3;
			
			text4='';
					for (i = 0; i < 5; i++) {
					text4 += leta[text3[i]];
					}
			//debugger*** document.getElementsByClassName('chap')[4].innerHTML=text4;
			if(veriCon == text4){
					document.getElementById('tk').innerHTML = 'successfully activated !!!<br />Thanks for your patronage';
				}else{
					document.getElementById('tk').innerHTML = veriCon+' is an Invalid Activation Key'+text4;
			};
	}

*/