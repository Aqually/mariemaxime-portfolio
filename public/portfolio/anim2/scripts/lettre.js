(function(window) {
  'use strict';

  //Objet des lettres
  var Lettre = function Lettre(pConteneur, pPosX, pPosY, pLargeurLettre, pHauteurLettre, pClasse) {
    this.conteneur = pConteneur;
    this.posX = pPosX;
    this.posY = pPosY;
    this.hauteurLettre = pHauteurLettre;
    this.largeurLettre = pLargeurLettre;
    this.classe = pClasse;
    this.elmLettre;
    //donne une rotation au hasard avec des bons de 22.5 degré (donc 16 angles possibles)
    this.rotation = Math.ceil(Math.random() * 16) * 22.5;
    this.creerLettre();
  }

  //Array qui contient les lettres instanciées pour une partie donnée
  Lettre.arrayLettre = Array();

  //La rotation d'une lettre
  Lettre.prototype.rotation;

  //La lettre active
  Lettre.prototype.lettreActif = null;

  //La lettre en glissement
  Lettre.prototype.lettreEnGlissement = null;

  //fonction pour créer une lettre
  Lettre.prototype.creerLettre = function() {
    //On crée l'élément
    this.elmLettre = document.createElement("div");
    //On lui donne un nombre au hasard entre 1 et 9
    this.elmLettre.nbData = Math.ceil(Math.random() * 9);
    //On met le nombre dans un data-set
    this.elmLettre.dataset.symbole = this.elmLettre.nbData;
    //On lui donne l'angle de rotation
    Lettre.rotation = this.rotation;
    //On ajoute un symbole(image) dans la l'élément
    this.ajouterSymbole();
    //On instancie la lettre dans le jeu
    this.conteneur.appendChild(this.elmLettre);
    //On lui donne sa classe et sa position de départ et on anime son arrivé dans la zone départ
    $(this.elmLettre).addClass(this.classe).css({
        width: this.largeurLettre + 'px',
        height: this.hauteurLettre + 'px',
        top: "200px",
        left: "-250px"
      })
      .animate({
        top: this.posY + "px",
        left: this.posX + "px",
        rotate: this.rotation + "deg"
      }, "slow");
    //On lui donne un écouteur pour savoir si elle est active
    this.laFonctionEcouteur = this.activerLettre.bind(this);
    this.elmLettre.addEventListener('mousedown', this.laFonctionEcouteur, false);
    this.elmLettre.addEventListener('mouseup', this.laFonctionEcouteur, false);
    //On ajoute la lettre dans le tableau contenant tous les lettres de la partie en cours
    Lettre.arrayLettre.push(this.elmLettre);
  }

  //fonction pour ajouter un image dans la lettre
  Lettre.prototype.ajouterSymbole = function() {
    //On crée l'image
    this.elmImg = document.createElement("img");
    //On lui donne une taille
    this.elmImg.style.width = this.largeurLettre / 3 + 'px';
    //On ajoute l'image selon le chiffre au hasard que la lettre a obtenu
    this.elmImg.src = "img/symbol" + this.elmLettre.nbData + ".png";
    //On lui donne des styles et on la place dans la lettre
    this.elmImg.style.position = "absolute";
    this.elmImg.style.right = 4 + "px";
    this.elmImg.style.top = 4 + "px";
    this.elmLettre.appendChild(this.elmImg);
  }

  //Créer la méthode activerLettre
  Lettre.prototype.activerLettre = function(evt) {
    //On active la lettre sur l'événement mousedown et on le désactive sur l'élément mouseup
    if (evt.type == 'mousedown') {
      if (Lettre.lettreActif != null) {
        //On sort de la fonction
        return;
      } else {
        //On met un contour pour illusrer que l'élément est actif
        this.elmLettre.style.border = '3px solid darkred';
        //On permet à la lettre de modifier son échelle
        this.minuterie = setInterval(this.modifierRotation.bind(this), 40);
        //Et on enregistre que cette lettre est activée et possiblement en glissement
        Lettre.lettreActif = this;
        Lettre.lettreEnGlissement = this;
      };
    } else {
      //On enlève la minuterie et la référence à la lettre active
      clearInterval(this.minuterie);
      this.elmLettre.style.border = '2px solid black';
      Lettre.lettreActif = null;
    };
  };

  //fonction pour faire tourner la lettre avec les touches
  Lettre.prototype.modifierRotation = function() {

    if (Touches.droite == true) {
      this.rotation += 22.5;
    };

    if (Touches.gauche == true) {
      this.rotation -= 22.5;
    };
    //Pour s'assurer que l'angle de rotation soit toujours comprise entre 0 et 360
    if (Math.abs(this.rotation) == 360) {
      this.rotation = 0;
    }
    //On transforme l'élément HTML
    this.elmLettre.style.transform = "rotate(" + this.rotation + "deg)";
    Lettre.rotation = this.rotation;
  };

  //fonction pour avoir la rotation de l'objet
  //utiliser pour confirmer si la rotation et bonne et accepter la lettre
  Lettre.getRotation = function() {
    return Lettre.rotation;
  };

  //fonction pour désactiver la lettre qui a bien été placé.
  Lettre.desactiverLettreActif = function() {
    //S'il y a une lettre active, on le désactive et on enlève ses écouteurs
    if (Lettre.lettreEnGlissement != null) {
      clearInterval(Lettre.lettreEnGlissement.minuterie);
      Lettre.lettreEnGlissement.elmLettre.style.border = '2px solid black';
      //On enlève les écouteurs
      Lettre.lettreEnGlissement.elmLettre.removeEventListener('mousedown', Lettre.lettreEnGlissement.laFonctionEcouteur, false);
      Lettre.lettreEnGlissement.elmLettre.removeEventListener('mouseup', Lettre.lettreEnGlissement.laFonctionEcouteur, false);
      //Maintenant, il n'y a plus de lettre active en glissement, ni actif
      Lettre.lettreEnGlissement = null;
      Lettre.lettreActif = null;
    };
  }

  window.Lettre = Lettre;
}(window));
