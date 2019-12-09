// Récuperation des minutes et des heures réelles
var now = new Date;
var minute = now.getMinutes();
var heure = now.getHours();

//Récupération des <div> aiguilles
var aiguilleMinute = document.getElementById("minute");
var aiguilleHeure = document.getElementById("heure");

//Initialisation des aiguilles sur l'heure actuelle au chargement de la page
aiguilleMinute.style.transform = "rotate(" + (minute*6) +"deg)";
aiguilleHeure.style.transform = "rotate(" + (heure*30) +"deg)";

//Fonction pour la rotation des aiguilles
function horloge(){

    //Reinitialisation des var temps toutes les secondes.
    setTimeout(horloge,1000);
    var now = new Date;
    var seconde = now.getSeconds();
    var minute = now.getMinutes();
    var heure = now.getHours();

    //Re-selection des <div> pour la Fonction horloge
    var aiguilleSeconde = document.getElementById("secondes");
    var aiguilleMinute = document.getElementById("minute");
    var aiguilleHeure = document.getElementById("heure");


    //Selection des <div> aiguille + rotation avec conversion des secondes en 'deg"
    aiguilleSeconde.style.transform = "rotate(" + (seconde*6) + "deg)";

    if (seconde === 0){
        aiguilleMinute.style.transform = "rotate(" + (minute*6) + "deg)";
    }

    if(minute === 0){
        aiguilleHeure.style.transform = "rotate(" + (heure*30) + "deg)";
    }

    console.log(seconde);
    console.log(heure);
    console.log(minute)
}

horloge();

