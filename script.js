
function rotate()
{
    setTimeout(rotate,1000);

    var now = new Date;
    var seconde = now.getSeconds();
    var minute = now.getMinutes();
    var heure = now.getHours();

    var aiguilleSeconde = document.getElementById("secondes");
    var aiguilleMinute = document.getElementById("minute");
    var aiguilleHeure = document.getElementById("heure");


    aiguilleSeconde.style.transform = "rotate(" + (seconde*6) + "deg)";
    aiguilleMinute.style.transform = "rotate(" + (minute*6) + "deg)";
    aiguilleHeure.style.transform = "rotate(" + (minute*30) + "deg)";
    console.log(seconde);

    if (seconde > 59){
        aiguilleMinute.style.transform = "rotate(" + (minute*6) + "deg)";
    }

    if (minute > 59){
        aiguilleHeure.style.transform = "rotate(" + (heure*30) + "deg)";
    }

    if (heure > 23){
        aiguilleHeure.style.transform = "rotate(" + (heure*30) + "deg)";
    }
}
rotate();

