//Declaration des variables de temps
var now = new Date;
var seconde = now.getSeconds();
var heure = now.getHours();
var minute = now.getMinutes();

console.log(seconde);
console.log(minute);
console.log(heure);

//div var
var aiguilleSeconde = document.getElementById("secondes");
var aiguilleMinute = document.getElementById("minute");
var aiguilleHeure = document.getElementById("heure");


//rotate aiguille
aiguilleSeconde.style.transform = "rotate(" + (seconde*6) + "deg)";
aiguilleMinute.style.transform = "rotate(" + (minute*6) + "deg)";
aiguilleHeure.style.transform = "rotate(" + (minute*30) + "deg)";



function rotate()
{
    var now = new Date;
    var seconde = now.getSeconds();
    var minute = now.getMinutes();
    var heure = now.getHours();

    var aiguilleSeconde = document.getElementById("secondes");
    var aiguilleMinute = document.getElementById("minute");
    var aiguilleHeure = document.getElementById("heure");

    seconde= seconde + 1;

    setTimeout(rotate,1000);
    aiguilleSeconde.style.transform = "rotate(" + (seconde*6) + "deg)";

    console.log(seconde);
    if (seconde > 59){
        minute = minute + 1;
        aiguilleMinute.style.transform = "rotate(" + (minute*6) + "deg)";
    }

    if (minute > 59){
        heure = heure + 1;
        aiguilleSeconde.style.transform = "rotate(" + (seconde*30) + "deg)";
    }

    if (heure > 23){
        aiguilleSeconde.style.transform = "rotate(" + (seconde*30) + "deg)";
    }
    console.log(minute)
}
rotate();

