// I am content.js created b kunle modified on 27-11-2022
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

/*************YEK**********/
var leta = 'ZYXWVEDCBA';
letta = 'JKLMNOPQRS';
text = '';
textLetta = '';
serva = 'https://youreventplug.com';
//serva = 'http://localhost'; //http://localhost

//generate data & yek
function gener(){
		//check if app has been activate
	if(typeof localStorage.biO == 'undefined'){
		text = '';
		for (i = 0; i < 5; i++) {
			text += leta[Math.floor(Math.random()*9)];
		}
  		localStorage.biO = text;
	}
	if(typeof localStorage.actidKey == 'undefined'){
		
	//get .actidKey if not available
		textLetta = '';
		for (ii = 0; ii < 2; ii++) {
			textLetta += Math.floor(Math.random()*9);
		}
		for (i = 0; i < 3; i++) {
			textLetta += letta[Math.floor(Math.random()*9)];
		}
  	localStorage.actidKey = textLetta;
	}
	//if .actN never existed
	if(typeof localStorage.actN == 'undefined'){
		localStorage.actN = 0;
	}
	srch();
}

// online reg

function srch(){
	var user_id = localStorage.actidKey;
	veri_id = localStorage.biO;
	ac = localStorage.actN;
	
	if(typeof localStorage.BioEmail == 'undefined')
	{email = localStorage.BioEmail;}else{ email = 'none';}
	
	if(typeof localStorage.BioPhone == 'undefined')
	{phone = localStorage.BioPhone;}else{ phone = 'none';}
	
	if(typeof localStorage.sutats == 'undefined')
    {
        localStorage.sutats = 1566;
	    localStorage.LT = 0;
    }
	sut = localStorage.sutats;
	
	if(typeof localStorage.regis == 'undefined' || localStorage.reg == 'empty')
    {
        
    }
    
    // register the app once
    //send_to_reg();
    
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
		/*			
		document.getElementById('tk').innerHTML ='App is opened by the Admin <br /> Reg No :'+ localStorage.actidKey + '<br /> Click the button below to go back to "table of content" <br /> <a href="content.html"><button>Content</button></a>';
		document.getElementById('verify').style.display='none';
        document.getElementById('coHide').style.display='block';
        */
	}
	if(dat == 1566){
		
		localStorage.sutats = 1566;
		localStorage.actN = 0;
		/*			
		document.getElementById('tk').innerHTML ='Deactivated by the admin <br /> Reg No :'+ localStorage.actidKey + '<br /> Contact Admin for more info. <br /> <a href="content.html"><button>Content</button></a>';
		document.getElementById('verify').style.display='block';
        document.getElementById('coHide').style.display='none';
        */

	}
	dat_2=Number(data2[1]);
	if(dat_2 > 0){
		ty = data2[1];//*1000;//*60;
		console.log('ty+'+ty);
		localStorage.LT = ty;
		//upd(ty);
	}else{

	}
  });

  sr = setTimeout(srch2,60000);
}
gener();				

srch2();

//Js code for mamebox to pop-up every 1 min

function popName(){
    if(typeof localStorage.regis == 'undefined'){
		setTimeout(popName,30000);
	}else{
        if(localStorage.phone.length > 2){
            document.getElementById('phone').value = localStorage.phone;
        }
        if(localStorage.name.length > 2){
            document.getElementById('name').value = localStorage.name;
        }
    }
        //alert('i work');
        document.getElementById('namebox').style.display = 'block';
        document.getElementsByClassName('overlay2')[0].style.display='block';

    //if(){}
	closeNav();
}

if(typeof localStorage.regis == 'undefined'){
    setTimeout(popName,30000);
}else if(localStorage.regis == 'l_Reg'){
    setTimeout(send_to_reg,30000);
}

function unPopName(){
        document.getElementById('namebox').style.display = 'none';
        document.getElementsByClassName('overlay2')[0].style.display='none';
		closeNav();
}

function submit_name(){ 
    name = document.getElementById('name').value;
    phone = document.getElementById('phone').value;
    //localStorage.phone
    if(phone.length <10){
        document.getElementById('help').innerHTML = 'Incorrect Number! Pls enter a valid phone number';
        return;
    }else if(name.length <2){
        document.getElementById('help').innerHTML = 'Name cannot be empty or lessthan 3 letters';
        return;
    }else{
        localStorage.phone = phone;
        localStorage.name = name;
        localStorage.regis = 'l_Reg';
        unPopName();
        send_to_reg();
    }
}
function send_to_reg(){
    
    if (localStorage.regis == 'undefined'){
        popName();
        return;
    }
    
	var p1 = localStorage.actidKey;
	p2 = localStorage.biO;
	p3 = localStorage.phone;
	p4 = localStorage.name;
	
    $.get(serva+"/xxxxappxxxx/regis/"+p1+"/"+p2+"/"+p3+"/"+p4, function(data, status){
    //alert("Data: " + data + "\nStatus: " + status);
    
	console.log(data);
	if(status == 'success'){
        localStorage.regis = 'G_reg';
    }
    
    
    console.log(status);
    
	
    });

    if(localStorage.regis == 'l_Reg'){
    setTimeout(send_to_reg,30000);
    }
}
	
	//New code		
var deferredPrompt;
window.addEventListener('beforeinstal1prompt', (e) => {
	// Prevent Chrome 67 and earlier from automatically
	//I showing the prompt
	e.preventDefault();
	//If Stash the event so it can be triggered later.
	deferredPrompt = e;
});

var btnAdd = document.getElementById('install_btn');
btnAdd2 = document.getElementById('install_btn_menu');
window.addEventListener('beforeinstallprompt', (e) => {
	e.preventDefault();
	deferredPrompt = e;
	// Update UI notify the user they can
	// add to home screen
	btnAdd.style.display = 'b1ock';
});
	
window.addEventListener('appinstalled', (evt) => {
	app.logEvent('Biology App', 'installed');
	btnAdd.style.display = 'none';
	btnAdd2.style.display = 'none';
});
	
function instal(){
  document.getElementById('install_btn').value='installed';
  document.getElementById('install_btn_menu').value='installed';
  document.getElementById('install_btn_menu').style.display = 'none';
	console.log('hit me');
	deferredPrompt.prompt();
	deferredPrompt.userChoice.then((choiceResult) => {
		if (choiceResult.outcome === 'accepted') {
		console.log('User accepted the prompt');
		}
		deferredPrompt = null;
	});
}

//version 6 code

function openRef(){
    $('#reg_box').slideUp();
    $('#ref_box').slideDown();
}
function backToPopName(){
    $('#reg_box').slideDown();
    $('#ref_box').slideUp();
}

function submit_refferer() {
    ref_man = document.getElementById('refferer').value;
    document.getElementById('ref_help').innerHTML = 'Loading, Please click the send button again after a minute.';
    k=localStorage.biO;

    if(ref_man.length <10){
        document.getElementById('ref_help').innerHTML = 'Incorrect Number! Pls enter a valid phone number. It cannot be less than 10';
        return;
    }else if(typeof localStorage.ref_reg != 'undefined'){ 
        document.getElementById('ref_help').innerHTML = 'You have entered a refferer before.<br>'+localStorage.ref_reg+'<br>Contact the Admin if you want to change it.';    
        return;
    }else{   
        $.get(serva+"/xxxxappxxxx/refer/"+ref_man+'/'+k, function(data, status){

            console.log(serva+"/xxxxappxxxx/refer/"+ref_man+'/'+k);
            if(data == 'success'){
                localStorage.ref_reg = ref_man;
                document.getElementById('ref_help').innerHTML = 'Refferal Updated Successful';
            }
            if(status != 'success'){
                document.getElementById('ref_help').innerHTML = 'Internet Error! Please, Try again when you have internet';
            }
            console.log(data);
            console.log(status);

        });
    }
    
}