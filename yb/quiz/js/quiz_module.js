
function passq() {
  document.getElementById('scoreBoard').style.display = 'block';
  document.getElementById('end').style.display = 'none';
}

function backq() {
  document.getElementById('scoreBoard').style.display = 'none';
  document.getElementById('end').style.display = 'block';
}
function again() {
  document.getElementById('msg').style.display = 'block';
  document.getElementById('end').style.display = 'none';
}
var tym = 5;
tymbox = document.getElementById('ti');
function ty() {
  if (tym > 0) {
    tym--;
    tymbox.innerHTML = 'Time : ' + tym;
    setTimeout(ty, 1000);
  }
  else {
    tymbox.innerHTML = 'TIME UP! 00:00';
    document.getElementById('ti3').innerHTML = 'TIME UP! 00:00';
    document.getElementById('end').style.display = 'block';
    document.getElementById('labelView').style.display = 'none';

    cc = countSco();
    document.getElementById('sco').innerHTML = 'you scored: ' + cc + '<div style="font-size:16px;">We will contact you on friday if you are the highest scorer for the week <br />You can try again next week.</div>';
    if (phoneNo !== '080_TEST') {
      UPDATE_APP();
    }
  }
}

var fname = "!_This_is_a_Test_Mode";
phoneNo = "080_TEST";
function UPDATE_APP() {
  var txtName = fname;
  txtPhone = phoneNo;
  txtScore = cc;

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Get a reference to the collection you want to read from
  const citiesRef = collection(db, 'bio');
  // Add a new document with data
  const newCity = {
      name: oruko,
      phone: pho,
      surname: surname,
      subject: 'biology_quiz',
      score : cc
  };

  addDoc(citiesRef, newCity)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        
        document.getElementById('loading').style.display='none';
        document.getElementById('labelView').style.display='block';
          /*
        document.getElementById('sd').style.display='none';
        document.getElementById('sd_2').innerHTML="sent successfully";
        document.getElementById('sd_2').style.display='block';
        document.getElementById('dialog_box').innerHTML="We are appreciate your effort";
        */
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
  /*
  //alert(txt1);
  $.post('label.php',
    {
      name: txtName,
      phone: txtPhone,
      score: txtScore
    },
    function (result) {
      $('#score').html(result);

      localStorage.season = phoneNo;
    });
    */
}
localStorage.season = 0;
function start2() {
  if (localStorage.season == phoneNo) {
    passq();
    document.getElementById('message').innerHTML = 'You have attempted <br /> You can only participate once in a week <br /> You visit our facebook page<br/><a href="https://www.facebook.com/Youngbrain-publishers-ltd-103972044777696/">Youngbrain publishers Ltd </a> ';
  } else {
    tym = 3; // 181;
    document.getElementById('msg').style.display = 'none';
    document.getElementById('scoreBoard').style.display = 'none';
    document.getElementById('labelView').style.display = 'block';
    setTimeout(ty, 1000);
  }
}
function countSco() {
  var mkk = 0;

  for (ii = 0; ii < totSco.length; ii++) {
    mkk = mkk + totSco[ii];
  }

  return mkk;
}

/*** marker **/

var g = document.getElementsByClassName('answ');
gg = document.getElementsByClassName('resp');
z = 'x';
totSco = [];
function myFunction() {
  for (var i = 0, len = g.length; i < len; i++) {
    totSco[i] = 0;
    //if(answer[i][0].length < 1){gg[i].innerHTML=xw}else{ gg[i].innerHTML=answer[i][0];}
    (function (index) {
      g[i].onkeyup = function () {
        //alert(index+1)  ;
        if (answer[index][0].length < 1) { gg[index].innerHTML = xw } else {

          var y = g[index].value.toLowerCase();
          xx = answer[index];
          mk = '';
          anso = 'f';
          //alert(xx.length);


          for (var ii = 0, len = xx.length; ii < len; ii++) {
            x2 = xx[ii].toLowerCase();
            if (y == x2) {
              anso = 't';
              /*
              return anso;
              break;
              */
            }
          }

          if (anso == 't') {
            z = "<img src='images/correctx.jpg' alt='correct' class='mk' />";
            totSco[index] = 1;
          }
          else {
            z = "<img src='images/wrongx.jpg' alt='wrong' class='mk' />";
            totSco[index] = 0;
          }//{z= x2}
          //document.getElementById('demo').innerHTML=z;
          gg[index].innerHTML = z;
        }
      }
    })(i);

  }
}
setTimeout(myFunction, 3000);


var answer = [

  ['Insecta', 'insects', 'insect'],
  ['Mammalia', 'mammals'],
  ['Mammalia', 'mammals'],
  ['Angiosperms', 'Angiosperm'],
  ['Amphibia', 'Amphibians', 'Amphibian'],
  ['Angiosperms', 'Angiosperm'],
  //2
  ['amoeba'],
  ['flagellum', 'flagellia'],
  ['paramecium'],
  ['paramecium']
];
