// fonctions pour controler certaines animations


	//animationEnCours, au départ, l'animation joue
	var animationEnCours=true;

	//variable des éléments animés
	var divsAnime = document.getElementsByClassName("anime");

	//variable du bouton Joue/Pause
	var boutonPause = document.getElementById("boutonPause");

	//variable du ciel
	var lesNuages = document.getElementById("nuage");

	//variable de la scene
	var laScene = document.getElementById("scene");
	
	//pour controler l'état pause play en cliquant le bouton Pause
	boutonPause.addEventListener("click", jouerAnimationOuNon, false);	
	
	//pour crée un nuage au début de la scene
	fCreeNuage();

	//pour ajouter des nuages à la scene à chaque x sec
	window.setInterval(fCreeNuage,8000);

	//function pour mettre sur pause ou jouer
	function jouerAnimationOuNon(evenement){
		// Changer la valeur de la variable pour la prochaine fois...
		 animationEnCours = !animationEnCours;

		
		//Si la variable est à true, l'animation joue, sinon, pause.
		if (animationEnCours == true) {
			for(i=0; i<divsAnime.length; i++){
				divsAnime[i].style.animationPlayState = "running";
				divsAnime[i].style.WebkitAnimationPlayState = "running";
				boutonPause.innerHTML = "Pause";
			}	
		}else{
			//mettre tous les éléments sur pause
			for(i=0; i<divsAnime.length; i++){
				divsAnime[i].style.animationPlayState = "paused";
				divsAnime[i].style.WebkitAnimationPlayState = "paused";
				boutonPause.innerHTML = "Jouer";
			}
		}
		//appeler la fonction pour mettre l'animation de pause
		fEcranPause();
	 };
	
	//fonction écran de pause
	//Met une animation d'écran de pause
	function fEcranPause(){
			if(animationEnCours == false){
				
				//Créer le filtre
				var filtrePause = document.createElement("div");
				
				//lui ajouter la class ecranPause
				filtrePause.classList.add("filtrePause");
				
				//mettre l'element dans la scene
				laScene.appendChild(filtrePause);
				
				//Ajouter du blur aux objets lors de la pause
				for(i=0; i<divsAnime.length; i++){
					divsAnime[i].classList.add("ajouteFlou");
				}					
			}else{
				var filtrePause = document.getElementsByClassName("filtrePause")[0];
				filtrePause.classList.remove("filtrePause");
				laScene.removeChild(filtrePause);
				
				//enleve le flou
				for(i=0; i<divsAnime.length; i++){
					divsAnime[i].classList.remove("ajouteFlou");
				}	
				
			}
	}

	//fonction pour créer les nuages
	function fCreeNuage(){
		
		//Les nuages ne doit pas apparaitre quand l'animation est en pause.
		if(animationEnCours == true){
			//Créer le conteneur du nuage
			var contUnNuage = document.createElement("div");

			//créer le nuage
			var unNuage = document.createElement("div");

			//Attribuer la class nuage à l'objet créé
			unNuage.classList.add("nuage");
			unNuage.classList.add("anime");

			//Déterminer en Y au hasard
			var posY = Math.random()*lesNuages.offsetHeight;

			unNuage.style.right ="-150px";
			unNuage.style.top = posY + "px";

			//Ajouter le conteneur du nuage dans la scène
			lesNuages.appendChild(unNuage);


			//Enleve le nuage quand l'animation est finie
			unNuage.addEventListener("animationend", enleverNuage, false);
		}
		
	}
		//fonction pour enlever les nuages lors de la fin de l'animation
        function enleverNuage(evenement){
			//Identifier le nuage à enlever
			unNuage = evenement.target;
			
			//Enlever ce nuage du ciel
			lesNuages.removeChild(unNuage);
        }