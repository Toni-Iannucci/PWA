let urlChampions = 'https://ddragon.leagueoflegends.com/cdn/13.1.1/data/fr_FR/champion.json';
let container = document.getElementById('container');

// Récupérer et Afficher les données de l'API 
async function getDataChampions(){
    try{
        const response = await fetch(urlChampions);
        if (response.ok){
            const championsData = await response.json();

            // Récup des éléments 
            for (const element in championsData.data){ 
                // Création des variables et des balises
                let cardChampion = window.document.createElement('div');
                let imageChampion = window.document.createElement('img');
                let nameChampion = window.document.createElement('h2');
                let titleChampion = window.document.createElement('p');
                let descriptionChampionPopin = window.document.createElement('p');
                let button = window.document.createElement('button');

                // Mise en place attributs
                cardChampion.classList.add('card');
                button.classList.add('boutonPopinOuvrir');
                imageChampion.alt="imageChampion";

                // Mise en place des données
                imageChampion.src = `http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${championsData.data[element].image.full}`
                nameChampion.innerHTML= `${championsData.data[element].name}`;
                titleChampion.innerHTML= `${championsData.data[element].title}`;
                button.innerHTML="Ouvrir";

                // Mise en place des parents et enfants
                container.appendChild(cardChampion);
                cardChampion.appendChild(imageChampion);
                cardChampion.appendChild(nameChampion);
                cardChampion.appendChild(titleChampion);
                cardChampion.appendChild(button);
            }
        }
    }
    catch(err){
        console.log(err)
    }
}
getDataChampions();
// Fin de la récupération et de l'affichage des données de l'API 


// Gestion de l'ouverture
function openPopin() {
    popinContent.innerHTML = this.innerHTML;
    popin.style.display = 'block';
    console.log('coucou')
}

// Attendre chargement du contenue 
window.onload=function(){
let cards = document.querySelectorAll('.card');
let popin = document.getElementById('popin');
let popinContent = document.getElementById('popinContent');
let closePopinbutton = document.getElementById('closePopin');

// récup les élements pour chaque carte
 cards.forEach(card => {
    card.addEventListener('click', function() {
      popinContent.innerHTML = this.innerHTML;
      popin.style.display = 'block';
      console.log('coucou')
    });
  })
  window.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            console.log('fermer')
           closePopin();
         }
      })
};




function closePopin(){
    popin.style.display = 'none';
}






// Fermer Popin quand échap
// window.addEventListener("keydown", function(event) {
//     if (event.key === "Escape") {
//       closePopin();
//     }
//   });J


