// Question and Answer for GST(Nigerian People and Culture) queFace
//http://hsunilaggw.unilag.edu.ng/login?dst=http%3A%2F%2Fwww.msftconnecttest.com%2Fredirect
function showViewTab(nw){
	document.getElementById(old2).style.display='none';
	document.getElementById(nw).style.display='block';
	old2=nw;
}
function checkSub(drake){
	if(drake == gov2019){
  		if(!localStorage.gov2019 || localStorage.gov2019 < 1){
			//alert('Odo');
			localStorage.gov2019 = 1;
			}else if(localStorage.gov2019 > 0){
				verify();
				document.getElementById('verify').style.display='block';
				old2 = 'verify';
		} 		
	}
}
function reSet(){
	q = 0;mk = 0;
}

function verify2(){
				k=localStorage.actidKey;
				n=localStorage.actN;
				if( k.length > 4 && n.length > 4){ 
					//document.getElementById('mys').src = drake;
					que = drake;
					ANS = ansYear;
					document.getElementById('YearCon').style.display ='none';
					document.getElementById('past2').style.display ='block';
					document.getElementById('star').style.display='block';
					
					document.getElementsByClassName('headaChap')[0].innerHTML= title;	
					old2 = 'past2';
				}
				else{
					document.getElementById('verify').style.display='block';
					//old2 = 'verify';
				}
}
function showYear(drake,ansYear,title){
		//document.getElementById('mys').src = drake;
		que = drake;
		ANS = ansYear;
		document.getElementById('YearCon').style.display ='none';
		document.getElementById('past2').style.display ='block';
		document.getElementById('star').style.display='block';
		
		document.getElementsByClassName('headaChap')[0].innerHTML= title;	
		//old2 = 'past2';
		showViewTab('past2');
}
function lockYear(){
				verify();
				document.getElementById('verify').style.display='block';
				//old2 = 'verify';
				showViewTab('verify');	
}
function ope(drake,ansYear,title){
	if(drake == gov2014 || drake == gov2015 || drake == gov2016){ 
		showYear(drake,ansYear,title);
	}else{
		k=localStorage.actidKey;
		n=localStorage.actN;
		if( k.length > 4 && n.length > 4){
			showYear(drake,ansYear,title);
		}else{		
				document.getElementById(old2).style.display='none';
			if(drake == gov2019){
				if(!localStorage.gov2019 || localStorage.gov2019 < 1){
					//alert('Odo');
					localStorage.gov2019 = 1; 
					showYear(drake,ansYear,title);
					}else if(localStorage.gov2019 > 0){
						lockYear()
				} 		
				}else if(drake == gov2018){
				if(!localStorage.gov2018 || localStorage.gov2018 < 1){
					//alert('Odo');
					localStorage.gov2018 = 1; 
					showYear(drake,ansYear,title);
					}else if(localStorage.gov2018 > 0){
						lockYear()
				} 		
			}if(drake == gov2017){
				if(!localStorage.gov2017 || localStorage.gov2017 < 1){
					//alert('Odo');
					localStorage.gov2017 = 1; 
					showYear(drake,ansYear,title);
					}else if(localStorage.gov2017 > 0){
						lockYear()
				} 		
			}
		
		}
	}
}
function No(){
	document.getElementById('quitPanel').style.display = 'none';
}
function Yes(){
	document.getElementById('quitPanel').style.display = 'none';
	document.getElementById('quePanel').style.display='none';
	document.getElementById('past2').style.display = 'none';
	document.getElementById('YearCon').style.display = 'block';
	document.getElementsByClassName('headaChap')[0].innerHTML='Government';
}
function Quit(){
	document.getElementById('quitPanel').style.display = 'block';	
}
var q = 0;mk = 0;
botin= '<img src="images/';
botin2 ='btn.png" class="imageOpt" /><div id="opb" class="op">BB</div>';
botin3 = '</div>';

////.......rANDON gENERATOR
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var random, rAN = [];
function rANDOM()
{

for (a = array, i = a.length; i--; ) {
random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
rAN.push(random);
}
// now we got our expected result into an array named "result" // we can do whatever we want with it.

//document.getElementById("mathMe").innerHTML=result;
}
function star(){
	rANDOM();
	q = 0;mk = 0;
	//change visibility
	document.getElementById('star').style.display='none';
	document.getElementById('alat').style.display='none';
	document.getElementById('quePanel').style.display='block';
	
	//fill boxes
	document.getElementById('main').innerHTML=(q+1)+'.)<br />'+que[rAN[q]][0];
	document.getElementById('opa').innerHTML=que[rAN[q]][1];
	document.getElementById('opb').innerHTML=que[rAN[q]][2];
	document.getElementById('opc').innerHTML=que[rAN[q]][3];
	document.getElementById('opd').innerHTML=que[rAN[q]][4];
	
	if(que[rAN[q]][5]){
		document.getElementById('opd').innerHTML=que[rAN[q]][4];
		document.getElementById('opd').innerHTML=que[rAN[q]][4];
		}
	
	document.getElementById('sco').innerHTML='';
}

function opBtn(o){
	if(o==ANS[rAN[q]]){mk++;
		mk2='correctx';
	}else{mk2='wrongx';}
	var scot=document.getElementById('sco').innerHTML;
	document.getElementById('sco').innerHTML='<tr><td>'+(q+1)+'</td><td>'+o+'</td><td><img src="images/'+mk2+'.jpg" /></td></tr>'+scot;
	document.getElementById('quePanel').style.display='none';
	q++;
	
	//submit if //alat();
	if(q == que.length){alat();}else{
	$('#quePanel').slideDown(1000);
	document.getElementById('main').innerHTML=(q+1)+'.)<br />'+que[rAN[q]][0];
	document.getElementById('opa').innerHTML=que[rAN[q]][1];
	document.getElementById('opb').innerHTML=que[rAN[q]][2];
	document.getElementById('opc').innerHTML=que[rAN[q]][3];
	document.getElementById('opd').innerHTML=que[rAN[q]][4];
	
	if(!que[rAN[q]][5]){
		document.getElementById('EE').style.display ='none';
		}else{
			document.getElementById('EE').style.display = 'block';
			document.getElementById('ope').innerHTML=que[rAN[q]][5];
	}
	
}}

function alat(){
	if(mk<=(0.1*que.length)){texto='make me wanna ask, are u a student??';}else if(mk<=(0.3*que.length)){texto='thats very poor try and read more. reading is good for you.';}else if(mk<=0.4*que.length){texto='i may say that\'s not all that bad. Better luck next.';}else if(mk<=0.5*que.length){texto='Average, never give-up, i believe u can do better but , I\'m not just proud of you yet';}else if(mk<=(0.7*que.length)){texto='just lil above average. That is Good';}else if(mk<=(0.8*que.length)){texto='Hmmmm ...'
	+((mk/que.length)*100)+'% is Awesome, and You can be more awesome';}else if(mk<=0.9*que.length){texto='Wow almost Awesome of Awesomeness ..., keep it up. Student';}else{texto='...OH u re a Genius!!!, Most awesome, always play with me i can help your dream ...excellent. u have 100 Star_credit';}
	
	document.getElementById('alat').style.display='block';
	document.getElementById('alat').innerHTML='You score <br /><div style="font-size:36px;">'+mk+'/'+que.length+'</div><br />'+'<div class="imDesc">'+texto+'</div><button onclick="star()">Start Over</button> <button onclick="showViewTab(\'YearCon\')">&larr;Go to Menu</button>';
}
function remark(){}
