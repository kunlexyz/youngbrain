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
	var gate = '<div class="contentChap ce" id="verify" style="position:fixed;"><div class="headaChap">To Get this chapter, you must activate this app<br />Version: 1.0.2</div>Verification Number:<div id="vN" class="heada" style="font-size:33px;">XXXXX</div><div class="imDesc">Enter the Activation Number below:</div><input type="text" onblur="upperC()" onchange="activ8()" id="act" name="act" style="border:solid 3px #090; min-width:300px; max-width:95%; font-size:33px; text-align:center" /><br /><button onclick="activ8()">Activate</button><div class="content ce" style="margin-top:9px; background-color:#C8FDA8"><div id="activate">To Get your activation number</div><strong>Contact:</strong><br /><img src="../images/wh.png" /><br />08033527655<br />+2348033527655</div><button onclick="rem()">removeIt</button><div id="tk"></div></div>';
	DIVcontent = document.getElementById('navig8').innerHTML;
	document.getElementById('navig8').innerHTML = gate + DIVcontent;
	
}
/*************YEK**********/
var leta = 'ZYXWVEDCBA';
letta = 'JKLMNOPQRS';
text = '';
textLetta = '';
serva = 'https://youngbrain.heroku.com';
//serva = 'http://localhost';
//generator
function gener(){
	text = '';
			for (i = 0; i < 5; i++) {
			text += leta[Math.floor(Math.random()*9)];
			}
  	localStorage.biO = text;
	localStorage.actN = 0;
	
	textLetta = '';
	
			for (ii = 0; ii < 2; ii++) {
			textLetta += Math.floor(Math.random()*9);
			}
			for (i = 0; i < 3; i++) {
			textLetta += letta[Math.floor(Math.random()*9)];
			}
  	localStorage.actidKey = textLetta;
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
	if(typeof localStorage.biO !== 'undefined'){
		document.getElementById('vN').innerHTML = localStorage.biO;
		headcon = 'To Get This Chapter, You Must Activate This App<br />Version: 3.0.1';
		document.getElementsByClassName('headaChap')[0].innerHTML = headcon + '<div> Your App ID:<span id="AppId_unpaid">'+localStorage.actidKey+'</span></div>';
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
					/*
	textLetta = '';
	
			for (ii = 0; ii < 2; ii++) {
			textLetta += Math.floor(Math.random()*9);
			}
			for (i = 0; i < 3; i++) {
			textLetta += letta[Math.floor(Math.random()*9)];
			}
  	localStorage.actidKey = textLetta;
	*/
	localStorage.actN = veriKey;
				
					document.getElementById('tk').innerHTML = 'This app is activated !!!<br /> Reg No :'+ localStorage.actidKey;
					document.getElementById('verify').style.display = 'none';	
					document.getElementById('coHide').style.display = 'block';	
			}}
		//******
		}else{//alert('cant see');
		
		gener();
		document.getElementById('vN').innerHTML = localStorage.biO;
		headcon = document.getElementsByClassName('headaChap')[0].innerHTML;
		document.getElementsByClassName('headaChap')[0].innerHTML = headcon + '<div> Your App ID:<span id="AppId_unpaid">'+localStorage.actidKey+'</span></div>';
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
	localStorage.actN = veriKey;
	localStorage.sutats = 1514;
				document.getElementById('verify').style.display='none';
				document.getElementById('coHide').style.display='block';
				/*
				document.getElementById('vNx').innerHTML = veriCon;
				document.getElementById('vN2').innerHTML = localStorage.actN;
				document.getElementById('AppId').innerHTML = localStorage.actidKey;
				*/
				
					document.getElementById('tk').innerHTML = 'successfully activated !!!<br />Thanks for your patronage<br /> Reg No :'+ localStorage.actidKey + '<br /> Click the button below to go back to "table of content" <br /> <a href="content.html"><button>Content</button></a>';	
				}else{
					document.getElementById('tk').innerHTML = veriCon+' is an Invalid Activation Key'+text4;
			};
	}
}

document.getElementById('act').addEventListener("keyup",activ8);

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
xw='<span class="T_A_required">Teacher\'s attention required</span>';
function myFunction(){
for (var i = 0, len = g.length; i < len; i++)
{
//if(answer[i][0].length < 1){gg[i].innerHTML=xw}else{ gg[i].innerHTML=answer[i][0];}
    (function(index){
        g[i].onkeyup = function(){
              //alert(index+1)  ;
			  if(answer[index][0].length < 1){gg[index].innerHTML=xw}else{
				  
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
        }}    
    })(i);

}
}
setTimeout(myFunction, 3000);
//***for w100 response
/*
var gw100=document.getElementsByClassName('w100');
ggw100=document.getElementsByClassName("w100resp");
for (var i = 0, len = g.length; i < len; i++)
{
//if(answer[i][0].length < 1){gg[i].innerHTML=xw}else{ gg[i].innerHTML=answer[i][0];}
    (function(index){
        gw100[i].onkeyup = function(){
			ggw100[i].innerHTML=xw;
			}
	})(i);
}
*/
var gw100=document.getElementsByClassName('w100');
var ggw100=document.getElementsByClassName("w100resp");
xw='<span class="T_A_required">Teacher\'s attention required</span>';
function myFunction2(){
	ggw100=document.getElementsByClassName("w100resp");
	for (var i = 0, len = ggw100.length; i < len; i++)
	{
	ggw100[i].innerHTML=xw;
	}
}
setTimeout(myFunction2, 3000);
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
//Th();
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
		document.getElementById(x).innerHTML = '<img src="../images/wrongx.jpg" alt="wrong">';
		}
}

//***my code for paystack
function showPayStack_box(){
	document.getElementById('paymentForm').style.display = 'block';
	document.getElementById('btn001').style.display = 'none';
	
}

//*****StackPay

const paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {

  e.preventDefault();

  var handler = PaystackPop.setup({

	key: 'pk_live_2ef52de9808da6451acc489eb37769a1c7171de5',
	
	//key: 'pk_test_76bb4dc899b8499152b3a334aa5748f424217937', //kunle's p-key

    email: document.getElementById("email-address").value,

    amount: 1500 * 100, //.....1500 is th price

    firstname: document.getElementById("first-name").value,

    lastname: document.getElementById("first-name").value,

    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you

    // label: "Optional string that replaces customer email"

    onClose: function(){

      alert('Window closed.');

    },

    callback: function(response){

      var message = 'Payment complete! Reference: ' + response.reference +
	  '\n if you cannot access the content, please close the app and reopen';

      alert(message);
	  
	  // The Opening
	  
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
/*	textLetta = '';
	
			for (ii = 0; ii < 2; ii++) {
			textLetta += Math.floor(Math.random()*9);
			}
			for (i = 0; i < 3; i++) {
			textLetta += letta[Math.floor(Math.random()*9)];
			}
  	localStorage.actidKey = textLetta;
*/
	localStorage.actN = text4;
	localStorage.sutats = 1514;
				
					document.getElementById('tk').innerHTML = 'successfully activated !!!<br />Thanks for your patronage<br /> Reg No :'+ localStorage.actidKey + '<br /> Click the button below to go back to "table of content" <br /> <a href="content.html"><button>Content</button></a>';
				document.getElementById('verify').style.display='none';
				document.getElementById('coHide').style.display='block';
				/*
				document.getElementById('vNx').innerHTML = veriCon;
				document.getElementById('vN2').innerHTML = localStorage.actN;
				document.getElementById('AppId').innerHTML = localStorage.actidKey;
				*/
    }

  });

  handler.openIframe();

}

//alert('i work over server');

if(typeof localStorage.sutats == 'undefined')
{
	localStorage.sutats = 1566;
	localStorage.LT = 0;
}

function srch2(){
	
	//alert(x);
	//$("#result").load("card2.php?quick_search=qq&member="+qs);
	var p1 = localStorage.actidKey;
	p2 = localStorage.biO;
	p3 = localStorage.actN;
	p4 = localStorage.sutats;
	p5 = localStorage.LT;

	if(p5.length > 15){
		p5 = p5.slice(4,24);
	}
	p5 = p5.replace(/ /g,'-');
	//alert("i dey");
	//return p1;
	//Expecting /xxxxappxxxx/mytatus/user_app_id/veri_no/key/state
	$.get(serva+"/xxxxappxxxx/mytatus/"+p1+"/"+p2+"/"+p3+"/"+p4+"/"+p5, function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
	var data2 = data.split("+");
	//document.getElementById('tt').innerHTML = "Switch :- "+data2[0]+"Lock Time :- "+data2[0];
	console.log(data2[0]);
	
	if(status == 'success'){}
	dat = Number(data2[0]);
	if(dat == 1514){
		
		localStorage.sutats = 1514;
					
		document.getElementById('tk').innerHTML ='App is opened by the Admin <br /> Reg No :'+ localStorage.actidKey + '<br /> Click the button below to go back to "table of content" <br /> <a href="content.html"><button>Content</button></a>';
		document.getElementById('verify').style.display='none';
		document.getElementById('coHide').style.display='block';
	}
	if(dat == 1566){
		
		localStorage.sutats = 1566;
		localStorage.actN = 0;
					
		document.getElementById('tk').innerHTML ='Deactivated by the admin <br /> Reg No :'+ localStorage.actidKey + '<br /> Contact Admin for more info. <br /> <a href="content.html"><button>Content</button></a>';
		document.getElementById('verify').style.display='block';
		document.getElementById('coHide').style.display='none';

	}
	dat_2=Number(data2[1]);
	if(dat_2 > 0){
		ty = data2[1];//*1000;//*60;
		console.log('ty+'+ty);
		//localStorage.LT = ty;
		upd(ty);
	}else{

	}
  });
/*... in the next version make it possible to control the comeback time
  	if(typeof localStorage.come == 'undefined'){
		  localStorage.come = 60000;
	  }else if(!isNaN(data[2])){
		  localStorage.come = data[2];
	  }
comeBack = localStorage.come;
sr = setTimeout(srch2,comeBack);
22493641027
*/
  sr = setTimeout(srch2,60000);
}
srch2();

//countDown
tim = setTimeout(opp,5000);
function upd(x){
	clearTimeout(tim);
	t1 = x;
	localStorage.trialNumber = x;
	trialTime = '';
	trialTimex = new Date();
	trialTime = Date.parse(trialTimex)+(t1*1000);
	
	localStorage.LT = new Date(trialTime);

	opp();
	//document.getElementById('status2').innerHTML=new Date(trialTimex) +' <br />--<br /> ' +new Date(trialTime);
	//use Date.parse();
}
var tri = localStorage.LT;
function opp(){
	if(localStorage.LT <= 0){return;}
	var noww = new Date();
	noww = Date.parse(noww);
	trialTimeMilli = Date.parse(localStorage.LT);

console.log(new Date(trialTimeMilli));

	checkTrialTime = (trialTimeMilli/1000) - (noww/1000);
	checkTrialTime = Number(checkTrialTime);
	console.log(checkTrialTime);
	if(checkTrialTime < 1 || checkTrialTime == NaN){
		
		localStorage.sutats = 1566;
					
		document.getElementById('tk').innerHTML ='trial time Expired <br /> Reg No :'+ localStorage.actidKey + '<br /> Contact Admin for more info. <br /> <a href="content.html"><button>Content</button></a>';
		document.getElementById('verify').style.display='block';
		document.getElementById('coHide').style.display='none';

		clearTimeout(tim);
	}else{
		localStorage.sutats = 1514;
					
		document.getElementById('tk').innerHTML ='App is opened on trial <br /> Reg No :'+ localStorage.actidKey + '<br /> Click the button below to go back to "table of content" <br /> <a href="content.html"><button>Content</button></a>';
		document.getElementById('verify').style.display='none';
		document.getElementById('coHide').style.display='block';

	tim = setTimeout(opp,5000);
	}

}