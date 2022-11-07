function theme2(ground,text,groundD,textD){
	$('.bar').css({"background-color":ground,"color":text});
	$('body').css({"background-color":groundD,"color":textD});
	$('.wod').css({"background-color":groundD,"color":textD});
	$('.bullet').css({"background-color":ground,"color":text});
}

function sett(){
	$('#setin').toggle(1000);}

function men(){$('#co').slideUp(3000);
	sett();
}

function showCon(ccon){
	$(ccon).toggle(1500);
}