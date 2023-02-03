let urlChampions = 'https://ddragon.leagueoflegends.com/cdn/13.1.1/data/fr_FR/champion.json';
let container = document.getElementById('container');
// Variables pour la popin
// let popinContainer =window.document.createElement('div');
//     let popinContent = window.document.createElement('div');
//     let imageChampionPopin = window.document.createElement('img');
//     let nameChampionPopin = window.document.createElement('h2');
//     let titleChampionPopin = window.document.createElement('p');
//     let descriptionChampionPopin = window.document.createElement('p');
//     let boutonFermer =window.document.createElement('button');




// Récupérer et Afficher les données de l'API 
async function getDataChampions(){
    try{
        const response = await fetch(urlChampions);
        if (response.ok){
            const championsData = await response.json();
            
           /* for(let champion of champions){
                container +=  `<div><p>${champion.data}</p></div>`
            }*/
            /*
            console.log(championsData)
            console.log(championsData.Aatrox.name)*/
           /* let key = Object.keys(championsData)[3];
            let value = Object.values(championsData)[3];
            let entree =  Object.entries(championsData)[3]*/
           
            // Convertir objet en tableau avec Object.entries
                //Redonne la kley et la valeur
            //Parcourir l'objet à partir de la 4eme entrée (data)

            // Récup des éléments 
            for (const element in championsData.data){ 
                // Création des variables et des balises
                let cardChampion = window.document.createElement('div');
                let imageChampion = window.document.createElement('img');
                let nameChampion = window.document.createElement('h2');
                let titleChampion = window.document.createElement('p');
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


// Mise en place de la popin

// Gestion de l'ouverture
function openPopin() {
 
    // popinContent.appendChild(popinContainer);
    // popinContent.appendChild(imageChampionPopin);
    // popinContent.appendChild(nameChampionPopin);
    // popinContent.appendChild(titleChampionPopin);
    // popinContent.appendChild(descriptionChampionPopin);
    // popinContent.appendChild(boutonFermer);
    // popinContainer.style.display = "block";
    let cards = document.querySelectorAll('.card');
let popin = document.getElementById('popin');
let popinContent = document.getElementById('popinContent');
let closePopinbutton = document.getElementById('closePopin');
    // console.log('popinouverte')
    cards.forEach(card => {
        card.addEventListener('click', function() {
        //   popinContent.innerHTML = this.innerHTML;
        //   popin.style.display = 'block';
          console.log('coucou')
        });
      });
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
};


// window.onload=function(){
//     for (var i = 0; i < buttonOpen.length; i++) {
//         buttonOpen[i].addEventListener("click", openPopin)
            
//         };
//     }





// Test pour chacune des popIn



// Attendre que tout charge 




// Fermer Popin quand échap
// window.addEventListener("keydown", function(event) {
//     if (event.key === "Escape") {
//       closePopin();
//     }
//   });


