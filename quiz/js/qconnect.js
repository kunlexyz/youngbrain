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
			  
if(anso=="t"){z= "<img src='./images/correctx.jpg' alt='correct' />";}
else{z= "<img src='./images/wrongx.jpg' alt='wrong' />"}//{z= x2}
//document.getElementById("demo").innerHTML=z;
gg[index].innerHTML=z;
        }}    
    })(i);

}
}
setTimeout(myFunction, 1000);
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
ggw100=document.getElementsByClassName("w100resp");
xw='<span class="T_A_required">Teacher\'s attention required</span>';
function myFunction2(){
for (var i = 0, len = g.length; i < len; i++)
{
ggw100[i].innerHTML=xw;
}
}

//Code to mark the new options
function opMark(x,y)
{
	if(y == 1){
		document.getElementById(x).innerHTML = '<img src="./images/correctx.jpg" alt="correct">';
	}else{
		document.getElementById(x).innerHTML = '<img src="./images/wrongx.jpg" alt="wrong">';
		}
}