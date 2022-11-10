// Question and Answer for GST(Nigerian People and Culture) queFace
var q = 0;mk = 0;
function star(){
	q = 0;mk = 0;
	//change visibility
	document.getElementById('star').style.display='none';
	document.getElementById('alat').style.display='none';
	document.getElementById('quePanel').style.display='block';
	
	//fill boxes
	document.getElementById('main').innerHTML=(q+1)+'.)<br />'+que[q][0];
	document.getElementById('opa').innerHTML=que[q][1];
	document.getElementById('opb').innerHTML=que[q][2];
	document.getElementById('opc').innerHTML=que[q][3];
	document.getElementById('opd').innerHTML=que[q][4];
}

function opBtn(o){
	if(o==que[q][5]){mk++;
		mk2='correctx';
	}else{mk2='wrongx';}
	var scot=document.getElementById('sco').innerHTML;
	document.getElementById('sco').innerHTML='<tr><td>'+(q+1)+'</td><td>'+o+'</td><td><img src="images/'+mk2+'.jpg" /></td></tr>'+scot;
	document.getElementById('quePanel').style.display='none';
	q++;
	
	//submit if //alat();
	if(q == que.length){alat();}else{
	$('#quePanel').slideDown(1000);
	document.getElementById('main').innerHTML=(q+1)+'.)<br />'+que[q][0];
	document.getElementById('opa').innerHTML=que[q][1];
	document.getElementById('opb').innerHTML=que[q][2];
	document.getElementById('opc').innerHTML=que[q][3];
	document.getElementById('opd').innerHTML=que[q][4];
}}

function alat(){
	if(mk<=1){texto='make me wanna ask, are u a student??';}else if(mk<=3){texto='thats very poor try and read more. reading is good for you.';}else if(mk<=4){texto='i may say that\'s not all that bad. Better luck next.';}else if(mk==5){texto='Average, never give-up, i believe u can do better but , I\'m not just proud of you yet';}else if(mk<=7){texto='just lil above average. That is Good';}else if(mk==8){texto='Hmmmm ...80% is Awesome, and You can be more awesome';}else if(mk==9){texto='Wow almost Awesome of Awesomeness ..., keep it up. Student';}else{texto='...OH u re a Genius!!!, Most awesome, always play with me i can help your dream ...excellent. u have 100 Star_credit';}
	
	document.getElementById('alat').style.display='block';
	document.getElementById('alat').innerHTML='You score <br /><div style="font-size:36px;">'+mk+'/'+que.length+'</div><br />'+'<div class="imDesc">'+texto+'</div><button onclick="star()">start Over</button>';
}
function remark(){}

var que = [
['The major causes of collapse of old empire were',
'Drought and Over population',
'Slave Raids and War',
'Marriage and cultural problems',
'Migration and poor leadership',
'A'
],

['The first Kanem ruler to accept Islam ruled for ............... years',
'twelve',
'ten',
'eleven',
'thirteen',
'C'
],

['The council of seven in old Oyo empire was referred to as',
'Ogboni Cult',
'Oyomesi',
'Otis Effa',
'Ososa',
'B'
],

['In 1964, there was a general breakdown of Law and Order for the election in the ........... region.',
'western',
'earstern',
'northen',
'southern',
'A'
],

['The most important era of the Trans-Saharan Trade is',
'in the 11th century',
'in the 13th century',
'between 14th and 16th century',
'in the 19th century',
'D'
],

['The geographical area now called Nigeria was born as a result of the amalgamation of the Southern and Northern protectorates on',
'1st Jan, 1914',
'1st October, 1914',
'1st Jan, 1960',
'1st Oct, 1960',
'A'
],

['...... was the first true nationalist organization that eemerged in Nigeria in 1936.',
'Nigerian Youth',
'National Council of Nigeria',
'Northern Peoples\'Group Movement',
'National Youth Movement',
'A'
],

//8
['The ......... craft men canced one of the ivory masks that was used as the FESTAC symbol in 1977.',
'Ife',
'Igbo',
'Benin',
'Nok',
'C'
],

//9
['....... can be a factor used in sharing amenities and political appointments in Nigeria.',
'Civilization',
'Mythology',
'Ethnicity',
'History',
'C'
],

//10
['The enslavement of Africans was an essential element to the industrial revolution, and it contributed to financing industrialization of',
'Ghana',
'England',
'Portugal',
'Nigeria',
'B'
]];