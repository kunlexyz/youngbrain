//file name: outline.js
//purpose: for course outline

var outline = [
'1.0',['','INTRODUCTION TO THE MODULE','1'],

'2.0',['UNIT 1','NOTABLE ETHNIC GROUPS IN NORTHERN NIGERIA','2',
'2.1','Introduction','2',
'2.2','Learning Outcomes for Unit 1','2',
'2.3','The Hausa Culture','2',
'2.4','The Fulani Culture','2',
'2.5','The Kanuri Culture','2',
'2.6','The Nupe Culture','2',
'2.7','Summary of Unit 1','2',
'2.8','Self -Assessment Questions for Unit 1','2',
'2.9','Suggested Reading for Unit 1','2'],

'3.0',['UNIT 2','NOTABLE ETHNIC GROUPS IN SOUTHERN NIGERIA','3',
'3.1','Introduction','3',
'3.2','Learning Outcomes for Unit','3',
'3.3','The Yoruba Culture','3',
'3.4','The Igbo Culture','3',
'3.5','The Bini Culture','3',
'3.6','The Itsekiri Culture','3',
'3.7','The Ijaw Culture','3',
'3.8','Summary of Unit 2','3',
'3.9','Self -Assessment Questions for Unit 2','3',
'3.10','Suggested Reading for Unit 2','3'],

'4.0',['UNIT 3:','NOTABLE ETHNIC GROUPS IN SOUTHERN NIGERIA','4',
'4.1','Introduction','4',
'4.2','Learning Outcomes','4',
'4.3','Cultural Areas of Nigeria And Their Characteristics','4',
'4.4','Linguistic Classifications','4',
'4.4.1','Government\’s Position on Language','4',
'4.5','Geographical Location','4',
'Fig.3.7:','Map showing areas of Igbo influence','4',
'4.6','Summary of Unit 3','4',
'4.7','Self -Assessment Questions for Unit 3','4',
'4.8','Suggested Reading for Unit 3','4'],

'5.0',['UNIT 4','CULTURAL ZONES IN NIGERIA','5',
'5.1','Introduction','5',
'5.2','Learning Outcomes for Unit 4','5',
'5.3','Northern Zone','5',
'5.4','Central Zone','5',
'5.5','Western Zone','5',
'5.6','Eastern Zone','5',
'5.7','Summary of Unit 4','5',
'5.8','Self -Assessment Questions for Unit 4','5',
'5.9','Suggested Reading for Unit 4','5'],

'6.0',['UNIT 5','THE EVOLUTION OF NIGERIA','6',
'6.1','Introduction','6',
'6.2','Learning Outcomes for Unit 5','6',
'6.3','The Evolution of Nigeria','6',
'6.4','Amalgamation','6',
'6.5','Reasons for the Amalgamation','6',
'6.6','Colonial Rule','6',
'6.7','Constitutional Developments','6',
'6.8','Summary of Unit 5','6',
'6.9','Self -Assessment Questions for Unit 5','6',
'6.10','Suggested Reading for Unit 5','6'],

'7.0',['UNIT 6','THE ECONOMY AND NATIONAL DEVELOPMENT','7',
'7.1','Introduction','7',
'7.2','Learning Outcomes for Unit 6','7',
'7.3','Nigerian Economic System Pre-and post-Independence','7',
'7.4','The Structure of Economic Activities in Nigeria','7',
'7.5','Major Problems of the Nigerian Economy','7',
'7.5.1','Some Solutions to the Nigerian Economy','7',
'7.6','Summary of Unit 6','7',
'7.7','Self -Assessment Questions for Unit 6','7',
'7.8','Suggested Reading for Unit 6','7'],

'8.0',['UNIT 7','CITIZENSHIP EDUCATION','8',
'8.1','Introduction','8',
'8.2','Learning Outcomes for Unit 7','8',
'8.3','Rights, Duties and Obligations of a Citizen','8',
'8.4','Patterns of Citizenship Acquisition','8',
'8.5','Negative Attitudes of Nigerian Youth','8',
'8.5.1','Fighting Bribery and Corruption','8',
'8.5.2','Cultism','8',
'8.5.3','Indecent Dressing','8',
'8.5.4','Thuggery','8',
'8.5.5','Examination Malpractices','8',
'8.6','Summary of Unit 7','8',
'8.7','Self -Assessment Questions for Unit 7','8',
'8.8','Suggested Reading for Unit 7','8'],

'9.0',['UNIT 8','NIGERIAN ENVIRONMENTAL PROBLEMS','9',
'9.1','Introduction','9',
'9.2','Learning Outcomes for Unit 8','9',
'9.3','Major Components of the Natural Environments','9',
'9.4','Causes of Environmental Problems','9',
'9.5','Solutions to Environmental Problems','9',
'9.6','Summary of Unit 8','9',
'9.7','Self -Assessment Questions for Unit 8','9',
'9.8','Answers to SAQs','9',
'9.9','Suggested Readings for Unit 8','9']

/*
',
'


	content2='<td></td><td>'+outline[3][0]+'</td><td>'+outline[3][0]+'</td>';*/

]
var content2='';content='';content3='';
function filIT(){
	//alert('i wok');
	content='';
	var conO = '<table>'; conC = '</table>';
	for(ii=0;ii<outline.length;ii=ii+2){
	content = '<tr onclick="chapterT('+(outline[(ii+1)][2]-1)+')"><th><div class="cirCh">'+outline[ii]+'</div></th><th><div class="hh7x">'+outline[(ii+1)][0]+'</div></th><th>'+outline[(ii+1)][1]+'</th></tr>';
	filContent2((ii+1));
	content3=content3+content+content2;
	}
	document.getElementById('cours').innerHTML='<table class="tabco">'+content3+'</table>';
	document.getElementById('bdy').innerHTML='<table class="tabco">'+content3+'</table>';
	
	filview3();
}
//filContent2(3);

function filContent2(x){
	content2='';
	var i = 3;
	while(i < outline[x].length){
	content2=content2+'<tr onclick="chapter('+(outline[x][(i+2)]-1)+',\''+outline[x][(i+1)]+'\')"><td></td><td><span class="hh7x">'+outline[x][i]+'</span></td><td>'+outline[x][(i+1)]+'</td></tr>';
	i++;
	i++;
	i++;
	}	
}
//content 3
function filview3(){
	//alert('i wok');
	content4='';
	var conO = '<table>'; conC = '</table>';
	for(ii=0;ii<outline.length;ii=ii+2){
	content4 = content4 + '<tr onclick="chapterT('+(outline[(ii+1)][2]-1)+')"><th><div class="cirCh">'+outline[ii]+'</div></th><th><div class="hh7x">'+outline[(ii+1)][0]+'</div></th><th>'+outline[(ii+1)][1]+'</th></tr>';
	}
	document.getElementById('tip').innerHTML='<table>'+content4+'</table>';
	
	//end it like this  </tr></table>
}
filIT();
