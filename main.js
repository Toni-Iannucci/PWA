let urlChampions = 'https://ddragon.leagueoflegends.com/cdn/9.19.1/data/fr_FR/champion.json';
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
            let buttonCardOpen = window.document.createElement('button');
            let championDescription = window.document.createElement('p');
            let bigImageChampion = window.document.createElement('img');

            // Mise en place attributs
            cardChampion.classList.add('card');
            championDescription.classList.add('description');
            buttonCardOpen.classList.add('boutonPopinOuvrir');
            buttonCardOpen.setAttribute('aria-haspopup','true');
            buttonCardOpen.setAttribute('role','button');
            imageChampion.alt="imageChampion";
            imageChampion.classList.add('imageChampion');
            bigImageChampion.classList.add('bigImageChampion');
            bigImageChampion.alt="bigImageChampion"
            titleChampion.classList.add('title');
            nameChampion.classList.add('name');

            // Mise en place des données
             imageChampion.src = `http://ddragon.leagueoflegends.com/cdn/9.19.1/img/champion/${championsData.data[element].image.full}`;
            bigImageChampion.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championsData.data[element].id}_0.jpg`
            
            nameChampion.innerHTML= `${championsData.data[element].name}`;
            titleChampion.innerHTML= `${championsData.data[element].title}`;
            championDescription.innerHTML = `${championsData.data[element].blurb}`;
            buttonCardOpen.innerHTML="Ouvrir";

            // Mise en place des parents et enfants
            cardChampion.appendChild(imageChampion);
            cardChampion.appendChild(bigImageChampion);
            cardChampion.appendChild(nameChampion);
            cardChampion.appendChild(titleChampion);
            cardChampion.appendChild(buttonCardOpen);
            cardChampion.appendChild(championDescription)
            container.appendChild(cardChampion);
            championDescription.style.display = 'none';
            imageChampion.style.display ='none';   
            titleChampion.style.display ="none";
            nameChampion.style.display="none";

                 }
    }
}
catch(err){
    console.log(err)
}

}
getDataChampions();

window.onload = function(){

console.log('Document chargé'); // Vérfier que le document est bien chargé 

// Création des variables pour la popin
let cards = document.querySelectorAll('.card');
let popin = document.getElementById('popin');
let popinContent = document.getElementById('popinContent');
let boutonCards = document.querySelectorAll(".boutonPopinOuvrir");
let closePopinbutton =  window.document.createElement('button');


// Mise en place des attributs sur le bouton Fermer
closePopinbutton.setAttribute("id","closePopin");
closePopinbutton.setAttribute("role","button");
closePopinbutton.innerHTML = 'Fermer';


//Fonction pour ouvrir la popin
function openPopin() {
let copieCarte = this.cloneNode(true); // Cloner la carte
let boutonPopinOpen = copieCarte.querySelector('.boutonPopinOuvrir'); // Trouver le bouton dans la copie
let descriptionChampion = copieCarte.querySelector('.description');
let imageChampion = copieCarte.querySelector('.imageChampion');
let bigImageChampion = copieCarte.querySelector('.bigImageChampion');
let titleChampion = copieCarte.querySelector('.title');
let nameChampion = copieCarte.querySelector('.name');

if (boutonPopinOpen) {
    boutonPopinOpen.remove();// Supprimer le bouton de la copie
    descriptionChampion.style.display = 'block'
    imageChampion.style.display ='block';
    titleChampion.style.display ="block";
    nameChampion.style.display="block"
    bigImageChampion.remove();
}
popinContent.innerHTML = copieCarte.innerHTML; // Ajouter le contenu de la carte sans le bouton à la popin
popinContent.appendChild(closePopinbutton);
popin.style.display = 'block'; // Afficher la popin



closePopinbutton.setAttribute("tabindex","1"); // Permet la tabulation direction sur le bouton Fermer

// Enlever le tab sur les cards
boutonCards.forEach(boutonCard=> {
boutonCard.setAttribute("tabindex","-1");
    
    });
console.log('ouvert')
}

function closePopin(){
popin.style.display = 'none';
boutonCards.forEach(boutonCard=> {
    boutonCard.setAttribute("tabindex","0");
    
    });

}

// récup les élements pour chaque carte
cards.forEach(card => {
card.addEventListener('click', openPopin)
})
//Fermeture de la PopIn
window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        console.log('fermer')
        closePopin();            
        }
    })
    closePopinbutton.addEventListener('click',closePopin)
};
    



