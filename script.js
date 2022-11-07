//the name of this file is script.js
//purpose: to generate random Numberr

document.getElementsByClassName('heada')[0].innerHTML=Math.random();
var leta = 'ZYXWVEDCBA';
text = '';
function gener(){
	text = '';
			for (i = 0; i < 5; i++) {
			text += leta[Math.floor(Math.random()*9)];
			}
	var gene = Math.floor(Math.random()*9);
	//gene = 'h'+' '+gene;
	//res = gene.slice(4,9);//alert('i wuk');
	document.getElementsByClassName('heada')[0].innerHTML=text;
	//document.getElementsByClassName('chap')[0].innerHTML=res;
	//res2 = leta[Number(res[0])]+leta[Number(res[1])]+leta[Number(res[2])]+leta[Number(res[3])]+leta[Number(res[4])];
	document.getElementsByClassName('chap')[1].innerHTML=gene;
}

function acti(){
		text2 = '';
		for(ii = 0; ii < 5; ii++) {
			for (i = 0; i < 9; i++) {
				if(text[ii]==leta[i]){text2+=i;break;}
			}}
	document.getElementsByClassName('chap')[2].innerHTML=text2;
	text3='';
			for (iii = 0; iii < 5; iii++) {
				if(iii==4){
				text3+=Math.max(text2[0],text2[4])-Math.min(text2[0],text2[4]);}
				else{
				text3+=Math.max(text2[iii],text2[iii+1])-Math.min(text2[iii],text2[iii+1]);
				
			}}
	document.getElementsByClassName('chap')[3].innerHTML=text3;
	
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
	document.getElementsByClassName('chap')[4].innerHTML=text4;
}