
answer= [
	['Plant','plantia'],
	['Protista'],
	['Monera'],
	['Fungi'],
	['Animalia'],
	['Plant'],
	['frog'],
	['subphylum'],
	['phylum'],
	['kingdom'],
	['The science of biological classification'],
	['species'],
	['order'],
	['Prokaryotes have no nuclear membrane while eukaryotes have nuclear membrane'],
	['Monera'],
	['Insecta'],
	['Mammalia'],
	['Angiosperms'],
	['Amphibia'],
	['Angiosperm'],
	['Hominidae'],
	['canidae'],
	['graminacae'],
	['Ranidae'],
	['Subkingdom schizophyta'],
	['Subkingdom cyanophyta'],
	['Acetic Acid'],
	['Lactic Acid'],
	['Biotechnology'],
	['Food spoilage'],
	['pesticides'],
	['Nostoc'],
	[''],
	[''],
	[''],
	[''],
	[''],
	[''],
	[''],
	[''],
	[''],
	[''],
	[''],
	//[''],
	//['',''],
	 
];


g=document.getElementsByTagName("input");
gg=document.getElementsByTagName("span");

for (var i = 0, len = g.length; i < len; i++)
{
//gg[i].innerHTML=answer[i][0];
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
			  
if(anso=="t"){z= "<img src='images/correctx.jpg' alt='correct' />";}else{z= "<img src='images/wrongx.jpg' alt='wrong' />"}
//document.getElementById("demo").innerHTML=z;
gg[index].innerHTML=z;
        }    
    })(i);

}
/*
function chk(x,arr){
	var anso = "f";
	for(var ii=0; ii < arr.length; ii++;){
		if(x==arr[ii]){anso = "t";
		/*
		return anso;
		break;
		
		}
	}
}
*/