//Création d'une fonction auto-exécutante pour éviter de polluer les variables globales du navigateur...
(function(window) {
  //Usage d'un mode strict pour...
  "use strict";

  var Touches = {
    gauche: false,
    droite: false,
    haut: false,
    bas: false
  }

  //Ici, comme la classe est static, on ne définira pas de constructeur, ni de modification au prototype, car aucune instance ne sera créé avec cette classe...

  //*****GESTION DES TOUCHES DU CLAVIER**************
  //Les événements "keydown" et "keyup" sont écoutés sur les objets HTML window ou document
  document.addEventListener("keydown", detecterTouches, false);
  document.addEventListener("keyup", detecterTouches, false);

  //Détecter les touches du clavier qui sont abaissées ou relâchées
  function detecterTouches(evt) {

    //Empêche l'action par défaut du navigateur s'il en a une...
    evt.preventDefault();

    //la touche "flèche gauche" porte le numéro 37
    //l'attribut "touche.gauche" a pour valeur true ou false selon l'événement distribué
    if (evt.keyCode == 37) {
      Touches.gauche = (evt.type == "keydown")
    };

    //la touche "flèche haut" porte le numéro 38
    //l'attribut "touche.haut" a pour valeur true ou false selon l'événement distribué
    if (evt.keyCode == 38) {
      Touches.haut = (evt.type == "keydown")
    };

    //la touche "flèche droite" porte le numéro 39
    //l'attribut "touche.droite" a pour valeur true ou false selon l'événement distribué
    if (evt.keyCode == 39) {
      Touches.droite = (evt.type == "keydown")
    };

    //la touche "flèche bas" porte le numéro 40
    //l'attribut "touche.bas" a pour valeur true ou false selon l'événement distribué
    if (evt.keyCode == 40) {
      Touches.bas = (evt.type == "keydown")
    };

  };

  //Comme la fonction est auto-exécutante, ses variables, méthodes ou autres ne seront pas accessibles de l'extérieur
  //Nous devons donc la passer à l'objet HTML window qui enregistre toutes les propriétés globales de notre application Web...
  window.Touches = Touches;

}(window));
