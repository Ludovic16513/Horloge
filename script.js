var now = new Date;
var seconde = now.getSeconds();
var minute = now.getMinutes();
var heure = now.getHours();

var aiguilleSeconde = document.getElementById("secondes");
var aiguilleMinute = document.getElementById("minute");
var aiguilleHeure = document.getElementById("heure");

aiguilleSeconde.style.transform = "rotate(" + (seconde*6) + "deg)";
aiguilleMinute.style.transform = "rotate(" + (minute*6) +"deg)";
aiguilleHeure.style.transform = "rotate(" + (heure*30) +"deg)";


function horloge(){

    setTimeout(horloge,1000);
// temps
    var now = new Date;
    var seconde = now.getSeconds();
    var minute = now.getMinutes();
    var heure = now.getHours();
//ID
    var aiguilleSeconde = document.getElementById("secondes");
    var aiguilleMinute = document.getElementById("minute");
    var aiguilleHeure = document.getElementById("heure");


    //Rotation
    aiguilleSeconde.style.transform = "rotate(" + (seconde*6) + "deg)";

    if (seconde === 0){
        aiguilleMinute.style.transform = "rotate(" + (minute*6) + "deg)";
    }

    if(minute === 0){
        aiguilleHeure.style.transform = "rotate(" + (heure*30) + "deg)";
    }

    console.log(seconde);
}

horloge();

