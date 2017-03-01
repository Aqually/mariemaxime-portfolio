"use strict";
var MONAPP = MONAPP || {};

//application qui contient le jeu
MONAPP.EscargoExpress = {
  auteure: "Marie-Maxime Tanguay",
  nom: "Escargo Express",
  version: "1.1",
  date: "2015-12-15",
  demarreJeu: function() {
    var largeurLettre = 150;
    var hauteurLettre = 100;
    var nbLettre = 15;
    var nbTemps = 60;
    var classeLettre = "lettre";
    var leConteneur = document.getElementById("zoneLettre");
    var laZoneDepot = document.getElementsByClassName('depot');
    //Vérifier le localStorage et afficher le meilleur score s'il existe
    if (localStorage.escargoScore != undefined) {
      $(".meilleurScore").html(localStorage.escargoScore);
    } else {
      $(".meilleurScore").html("0");
      localStorage.escargoScore = 0;
    }
    //bouton pour commencer la partie!
    $("#debutPartie").one("click", function() {
      var unControleur = new Controleur(leConteneur, laZoneDepot, nbLettre, nbTemps, hauteurLettre, largeurLettre, classeLettre);
    });
  }
}

//Quand la page finit de charger, on démarre le jeu
window.addEventListener("load", MONAPP.EscargoExpress.demarreJeu(), false);
