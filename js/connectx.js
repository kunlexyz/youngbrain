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

//****a function for loading security
function loadGate(){
	var gate = `<div class="contentChap ce" id="verify" style="position:fixed;"><div class="headaChap">To Get this chapter, you must activate this app<br />Version: 1.0.2</div>Verification Number:<div id="vN" class="heada" style="font-size:33px;">XXXXX</div><div class="imDesc">Enter the Activation Number below:</div><input type="text" onblur="upperC()" id="act" name="act" style="border:solid 3px #090; min-width:300px; max-width:95%; font-size:33px; text-align:center" /><br /><button onclick="activ8()">Activate</button><div class="content ce" style="margin-top:9px; background-color:#C8FDA8"><div id="activate">To Get your activation number</div><strong>Contact:</strong><br /><img src="../images/wh.png" /><br />08033527655<br />+2348033527655
<br/>or fill the form below to buy <br />(please, make sure your data is on)
<script src="https://js.paystack.co/v1/inline.js"></script>
<div id="paystackEmbedContainer"></div></div><button onclick="rem()">removeIt</button><div id="tk"></div></div>`;
	DIVcontent = document.getElementById('navig8').innerHTML;
	document.getElementById('navig8').innerHTML = gate + DIVcontent;
	
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
  	localStorage.biO = text;
	localStorage.actN = 0;
	localStorage.actidKey = 0;
}
//acti ....the id number corespondant
//idKey() is just for key generation that is not useful in this development
function idKey(){
		text2 = '';
		for(ii = 3; ii < 5; ii++) {
			for (i = 0; i < leta.length; i++) {
				if(localStorage.biO[ii]==leta[i]){text2+=i;break;}
			}}
		for(iii = 2; iii >= 0; iii--) {
			for (i = 0; i < leta.length; i++) {
				if(localStorage.biO[iii]==leta[i]){text2+=i;break;}
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
	if(localStorage.biO && localStorage.biO.length > 4){
		document.getElementById('vN').innerHTML = localStorage.biO;
		//check if app has been activate
		text2 = '';
		var veriKey = localStorage.actN;
		veriCon = localStorage.biO;
		actMe = localStorage.biO;
		veriCon.toUpperCase();
		for(ii = 0; ii < 5; ii++) {
			for (i = 0; i < leta.length; i++) {
				if(veriCon[ii]==leta[i]){text2+=i;break;}
			}}
	if(text2.length < 5){
	document.getElementById('tk').innerHTML = veriCon+' This app is not activatedxx';
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
				
					document.getElementById('tk').innerHTML = 'This app is activated !!!<br /> Reg No :'+ localStorage.actidKey;
					document.getElementById('verify').style.display = 'none';	
					document.getElementById('coHide').style.display = 'block';	
			}}
		//******
		}else{//alert('cant see');
		
		gener();
		document.getElementById('vN').innerHTML = localStorage.biO;
	}
	if(localStorage.actN){}else{//run remove actN key since it is no longer needed
		}
	//if(localStorage.actidKey){}else{idKey();}
	document.getElementById('tk').innerHTML = localStorage.biO+'=>'+localStorage.actN+'=>'+localStorage.actidKey;
		
}
// activation key should not be store anywhere
verify();

function activ8(){
		text2 = '';
		var veriKey = document.getElementById('act').value;
		veriCon = localStorage.biO;
		actMe = localStorage.biO;
		veriCon.toUpperCase();
		for(ii = 0; ii < 5; ii++) {
			for (i = 0; i < leta.length; i++) {
				if(veriCon[ii]==leta[i]){text2+=i;break;}
			}}
	var yo = veriKey.toUpperCase();
	yb = "youngbrain"+actMe[3];
	yb = yb.toUpperCase();
	
	if(yo == yb){
		document.getElementById('tk').innerHTML = "Temporary activation key designed for YoungBrain staffs";
		document.getElementById('verify').style.display='none';
		document.getElementById('coHide').style.display='block';
		
		return;
	}
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
				
					document.getElementById('tk').innerHTML = 'successfully activated !!!<br />Thanks for your patronage<br /> Reg No :'+ localStorage.actidKey + '<br /> Click the button below to go back to "table of content" <br /> <a href="content.html"><button>Content</button></a>';	
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
	localStorage.biO = 0;
	localStorage.actN = 0;
	localStorage.actidKey = 0;
}

/*** marker **/

var g=document.getElementsByClassName('qBox_bio');
gg=document.getElementsByClassName("resp");
xw='Teacher\'s attention required';

for (var i = 0, len = g.length; i < len; i++)
{
if(answer[i][0].length < 1){gg[i].innerHTML='T.A.r'}else{ gg[i].innerHTML=answer[i][0];}
    (function(index){
        g[i].onkeyup = function(){
              //alert(index+1)  ;
              var y=g[index].value.toLowerCase();
              xx=answer[index];
              mk = "";
              anso = "f";
              //alert(xx.length);
			  			 
			  
			  for (var ii = 0, len = xx.length; ii < len; ii++)
			  {x2 = xx[ii].toLowerCase();
			  if(y==x2){anso = "t";
			  /*
			  return anso;
			  break;
			  */
			  }
			  }
			  
if(anso=="t"){z= "<img src='../images/correctx.jpg' alt='correct' />";}
else{z= "<img src='../images/wrongx.jpg' alt='wrong' />"}//{z= x2}
//document.getElementById("demo").innerHTML=z;
gg[index].innerHTML=z;
        }    
    })(i);

}

//...themes
var them = 0;
function theme2(title,text,groundD,groundOdd,titleText){
	$('body').css({"background-color":groundD,"color":text});
	$('tr').css({"background-color":groundD,"color":text});
	$('tr:nth-child(odd)').css({"background-color":groundOdd,"color":text});
	$('.pa').css({"background-color":groundD,"color":text});
	$('.pa:nth-child(odd)').css({"background-color":groundOdd,"color":text});
	$('a').css({"color":text});
	$('.fig').css({"background-color":title,"color":titleText});
	$('.titBox').css({"background-color":title,"color":titleText});
	$('.headaChap').css({"background-color":title,"color":titleText});
	$('.co').css({"background-color":groundD,"color":text});
	$('.imDesc').css({"background-color":title,"color":titleText});
	$('.content').css({"background-color":title,"color":titleText});
}

function Th(){
	
	if(typeof localStorage.them === 'undefined'){them = 0;}else{
		them = localStorage.them;
	}
	
	if(typeof localStorage.H === 'undefined'){}else{
	H = localStorage.H;
	hs = localStorage.hs;
	
	$('h3').css({"font-size":H+"px"});
	$('h4').css({"font-size":H+"px"});
	$('.pa').css({"font-size":hs+"px"});
	}
	
	if(typeof localStorage.font === 'undefined'){}else{
	ft = localStorage.font;
	$('body').css({"font-family":ft});
	$('h3').css({"font-family":ft});
	$('h4').css({"font-family":ft});
	$('.pa').css({"font-family":ft});
	}
	
	if(them == 1 || them == '1'){
			theme2('#A85400','#000','#ffffa5','#ffc774','#fff');
	}else if(them == 2 || them == '2'){
			theme2('#F00','#000','#FFF','#fde','#fff');
	}else if(them == 3 || them == '3'){
			theme2('#060','#000','#dFd','#afa','#fff');
	}else if(them == 4 || them == '4'){
			theme2('#C09','#000','#fbb8fb','#fb99fb','#fff');
	}else if(them == 5 || them == '5'){
			theme2('#006','#000','#99F','#AAF','#FFF');
	}else if(them == 6 || them == '6'){
			theme2('#412','#DDD','#000','#111','#FFF',6);
	}
}
Th();
var H = 18;
hs = 15;
ft = 'myFirstFont';

function sizIN(){
	H = H +3;
	hs = hs + 3;
	$('.headaChap').css({"font-size":H+"px"});
	$('.pa').css({"font-size":hs+"px"});
	localStorage.H = H;
	localStorage.hs = hs;
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

//Code to mark the new options
function opMark(x,y)
{
	if(y == 1){
		document.getElementById(x).innerHTML = '<img src="../images/correctx.jpg" alt="correct">';
	}else{
		document.getElementById(x).innerHTML = '<img src="../images/wrongx.jpg" alt="correct">';
		}
}