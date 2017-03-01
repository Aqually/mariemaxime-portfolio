(function(window) {
  "use strict";
  //Objet de contrôle du jeu
  var Controleur = function Controleur(pConteneur, pDestination, pNbLettre, pTemps, pHauteurLettre, pLargeurLettre, pLettre) {
    this.conteneur = pConteneur
    this.nbLettre = pNbLettre;
    this.largeurLettre = pLargeurLettre;
    this.hauteurLettre = pHauteurLettre;
    this.destination = pDestination;
    this.temps = pTemps;
    this.classe = pLettre
    this.departLettre = this.nbLettre
    this.departTemps = this.temps;
    this.debutPartie();
  }

  //variable du score de la partie en cours;
  Controleur.prototype.score = 0;

  //variable du nombre de lettre accepter
  Controleur.prototype.nbLettreEnPlace = 0;

  //variable du niveau actuel
  Controleur.prototype.niveau = 1;

  //variable du nombre de lettre au départ du jeu
  Controleur.prototype.departLettre;

  //variable de la limite de temps au départ du jeu
  Controleur.prototype.departTemps;

  //fonction pour afficher le score
  Controleur.prototype.afficheScore = function() {
    var classeScore = document.getElementsByClassName("score");
    for (var i = 0; i < classeScore.length; i++) {
      classeScore[i].innerHTML = this.score;
    }
    //Vérifier si le meilleur score à été battu
    if (localStorage.escargoScore < this.score) {
      localStorage.escargoScore = this.score;
      //le mettre à jour sur la page
      $(".meilleurScore").html(localStorage.escargoScore);
    }
    //Détermine si la partie est fini,
    //lorsque le nombre de lettre placé dans le dépot est égal au nombre de lettre instanciée.
    if (this.nbLettreEnPlace == this.nbLettre) {
      //On enlève les écouteurs pour ne pas de faire de conflit plus tard
      clearInterval(this.minuterieFinTemps);
      clearInterval(this.minuterieScore);
      clearInterval(this.minuterieTemps);
      //On appelle la fonction pour continuer à jouer
      this.prochainNiveau();
    }
  }

  //fonction qui affiche le temps et le met à jour
  Controleur.prototype.afficheTemp = function() {
      var classeTemps = document.getElementsByClassName("leTemps");
      this.temps -= 1;
      for (var i = 0; i < classeTemps.length; i++) {
        classeTemps[i].innerHTML = this.temps;
      }
    }
    //fonction qui affice le niveau actuel
  Controleur.prototype.afficheNiveau = function() {
    var niveau = document.getElementsByClassName("niveau");
    for (var i = 0; i < niveau.length; i++) {
      niveau[i].innerHTML = this.niveau;
    }
  }

  //fonction qui gère les setInterval
  Controleur.prototype.lesMinuteries = function() {
    //pour que le score se mettre à jour continuellement
    this.minuterieScore = setInterval(this.afficheScore.bind(this), 40);
    //pour que le temps soit afficher et à jour
    this.minuterieTemps = setInterval(this.afficheTemp.bind(this), 1000);
    //quand le compte à rebourd se termine, on termine la partie.
    this.minuterieFinTemps = setTimeout(this.finPartie.bind(this), (this.temps) * 1000);
  }

  //fonction pour changer l'état du jeu et passé d'un affichage à l'autre.
  Controleur.prototype.changeEtat = function change(etatJeux) {
    switch (etatJeux) {
      case 0:
        $("#intro").css('display', 'block');
        $("#finPartie").css('display', 'none');
        $("#leJeu").css('display', 'none');
        break;
      case 1:
        $("#intro").css('display', 'none');
        $("#finPartie").css('display', 'none');
        $("#leJeu").css('display', 'flex');
        break;
      case 2:
        $("#intro").css('display', 'none');
        $("#finPartie").css('display', 'block');
        $("#leJeu").css('display', 'none');
        break;

      default:
        $("#intro").css('display', 'block');
        $("#finPartie").css('display', 'none');
        $("#leJeu").css('display', 'none');
    }
  }

  //fonction qui commence la partie et instancie les lettres
  Controleur.prototype.debutPartie = function() {
      //enlève les écouteurs sur les boutons
      document.getElementById("rejouerPartie").removeEventListener('click', this.laFonctionEcouteur1, false);
      document.getElementById("quitterPartie").removeEventListener('click', this.laFonctionEcouteur2, false);
      //cacher le bloc qui permet de lancer une nouvelle partie
      $("#partieGagne").css('display', 'none');
      //allez vers l'écran de jeu
      this.changeEtat(1);
      //affiche le temps
      this.afficheTemp();
      //active les minuteries
      this.lesMinuteries();
      this.afficheNiveau();
      //détermine la taille de la zone où les lettres peuvent être instanciées.
      var hauteurConteneur = (this.conteneur.offsetHeight - this.hauteurLettre);
      var largeurConteneur = (this.conteneur.offsetWidth - this.largeurLettre);

      //instancie les lettres dans le conteneur avec une position aléatoire.
      for (var i = 0; i < this.nbLettre; i++) {
        var posX = Math.random() * (largeurConteneur);
        var posY = Math.random() * (hauteurConteneur);
        var uneLettre = new Lettre(this.conteneur, posX, posY, this.largeurLettre, this.hauteurLettre, this.classe)
      }
      //ajoute les symboles à la zone dépot
      //pourrait être amélioré pour placer les symboles au hasard pour augmenter la difficulté
      for (var k = 0; k < this.destination.length; k++) {
        //on crée l'image
        this.elmImg = document.createElement("img");
        //on lui donne une largeur proportionnelle à son parent
        this.elmImg.style.width = this.largeurLettre / 3 + 'px';
        //on lui donne l'image du symbole
        this.elmImg.src = "img/symbol" + parseInt(k + 1) + ".png";
        // on définit sont emplacement
        this.elmImg.style.position = "absolute";
        this.elmImg.style.right = 4 + "px";
        this.elmImg.style.top = 4 + "px";
        //on met l'image dans son conteneur parent
        this.destination[k].appendChild(this.elmImg);
      }
      //rend les éléments glissable
      this.activeGlissable();
    }
    //fonction pour continuer à jouer, en passant au prochain niveau
  Controleur.prototype.prochainNiveau = function() {
    //Réinitie le nombre de lettre déposée dans la zone dépot
    this.nbLettreEnPlace = 0;
    //Augmente le niveau
    this.niveau += 1;
    //Affiche le niveau actuel
    this.afficheNiveau();
    //Augmente la diffculté - 3 lettres de plus!
    this.nbLettre += 3;
    //Donne un peu de temps pour aider ;)
    this.temps += 25;
    //Affiche l'écran de victoire
    $("#partieGagne").css('display', 'block');
    //Met des écouteurs sur les deux boutons
    this.laFonctionEcouteur1 = this.debutPartie.bind(this);
    //Continuer à jouer au prochain niveau
    document.getElementById("rejouerPartie").addEventListener('click', this.laFonctionEcouteur1, false);
    this.laFonctionEcouteur2 = this.finPartie.bind(this);
    //Arrêter de jouer
    document.getElementById("quitterPartie").addEventListener('click', this.laFonctionEcouteur2, false);
  }

  //fonction qui active les glissable et les destinations (drag&drop)
  Controleur.prototype.activeGlissable = function() {
      //pour pouvoir utiliser le "this" dans certaines fonctions jquery qui le remplace.
      var objThis = this;
      //les glissables
      $(".lettre").draggable({
        //fait en sorte que jquery mettre à jour la position de l'objet plus souvent
        refreshPositions: true,
        cursor: 'move',
        revert: 'invalid',
        zIndex: '100',
        stack: ".colisDepot",
        cursorAt: {
          top: this.hauteurLettre / 2,
          left: this.largeurLettre / 2
        },
        stop: function() {
          //Le dernier objet séléctionné va être en haut de la pile de lettres quand relacher dans la zone départ des lettres
          var lesElms = document.getElementsByClassName("lettre")
          for (var i = 0; i < lesElms.length; i++) {
            lesElms[i].style.zIndex = 0;
          }
          (this).style.zIndex = 1;
        }
      });

      //la zone départ
      $("#colisDepart").droppable({
        tolerance: 'fit'
      });

      //la zone de destination
      $(".depot").droppable({
        hoverClass: "survolDepot",
        tolerance: 'fit',
        accept: function(objetUI) {
          //accepte l'objet si la rotation et le data-set correspond
          return (objetUI.data('symbole') == $(this).data('timbre') && (Lettre.getRotation() == 0));
        },
        drop: function(evt, objetUI) {
          //Désactive la lettre lorsque celle-ci est bien placé
          Lettre.desactiverLettreActif();
          //Ajoute des points
          objThis.score++;
          //Ajoute 1 au compte des lettres placés
          objThis.nbLettreEnPlace++;
          var bonSymbole = objetUI.draggable;
          var destination = $(this);
          $(this).css('background-color', '');
          bonSymbole.css({
            'zIndex': '100'
              //quand l'élément glissable est désactivé
          }).draggable("disable").position({
            //on le place au centre de la zone dépot et on le fait disparaitre avec une animation.
            my: "center center",
            at: "center center",
            of: destination,
            using: function(objetPositions) {
              bonSymbole.animate(objetPositions, 'fast').animate({
                "opacity": "0"
              }, "fast");
            }
          })
        }
      })
    }
    //fonction qui contrôle la fin de la partie
  Controleur.prototype.finPartie = function() {
    //enleve les écouteurs des boutons et les minuteries
    document.getElementById("rejouerPartie").removeEventListener('click', this.laFonctionEcouteur1, false);
    document.getElementById("quitterPartie").removeEventListener('click', this.laFonctionEcouteur2, false);
    clearInterval(this.minuterieScore);
    clearInterval(this.minuterieTemps);
    //détruire les lettres
    for (var i = 0; i < Lettre.arrayLettre.length; i++) {
      this.conteneur.removeChild(Lettre.arrayLettre[i]);
    }
    //Réinitier le tableau qui contient les lettres instanciées
    Lettre.arrayLettre = Array();
    //changer l'état à l'écran de fin de partie
    this.changeEtat(2);
    //pour utiliser le this dans une fonction jquery
    var objThis = this;
    //bouton pour commencer une nouvelle partie et retourner à l'écran d'accueil
    //.one permet de faire un addEventListener qui ne marche qu'une seule fois
    $("#nouvellePartie").one("click", function() {
      //remettre les valeurs initials
      objThis.nbLettreEnPlace = 0;
      objThis.score = 0;
      objThis.niveau = 1;
      objThis.changeEtat(0);
      objThis.temps = objThis.departTemps;
      objThis.nbLettre = objThis.departLettre;
      //mettre un écouteur sur le bouton pour commencer la partie
      $("#debutPartie").one("click", function() {
        objThis.debutPartie();
      });
    });
  }

  window.Controleur = Controleur
}(window));
