let urlChampions = 'https://ddragon.leagueoflegends.com/cdn/13.1.1/data/fr_FR/champion.json';
let container = document.getElementById('container');

let popinContainer =window.document.createElement('div');
    let popinContent = window.document.createElement('div');
    let imageChampionPopin = window.document.createElement('img');
    let nameChampionPopin = window.document.createElement('h2');
    let titleChampionPopin = window.document.createElement('p');
    let descriptionChampionPopin = window.document.createElement('p');
    let boutonFermer =window.document.createElement('button');

console.log(container)




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
                let boutonOuvrir = window.document.createElement('button');

                // Mise en place attributs
                cardChampion.classList.add('cards');
                boutonOuvrir.classList.add('boutonPopin');
                imageChampion.alt="imageChampion";

                // Mise en place des données
                imageChampion.src = `http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${championsData.data[element].image.full}`
                nameChampion.innerHTML= `${championsData.data[element].name}`;
                titleChampion.innerHTML= `${championsData.data[element].title}`;
                boutonOuvrir.innerHTML="Ouvrir";

                // Mise en place des parents et enfants
                container.appendChild(cardChampion);
                cardChampion.appendChild(imageChampion);
                cardChampion.appendChild(nameChampion);
                cardChampion.appendChild(titleChampion);
                cardChampion.appendChild(boutonOuvrir);
                
                

            }
        }
    }
    catch(err){
        console.log(err)
    }
}
getDataChampions();

function openPopin() {
 
    popinContent.appendChild(popinContainer);
    popinContent.appendChild(imageChampionPopin);
    popinContent.appendChild(nameChampionPopin);
    popinContent.appendChild(titleChampionPopin);
    popinContent.appendChild(descriptionChampionPopin);
    popinContent.appendChild(boutonFermer);
    popinContainer.style.display = "block";
}

function closePopin(){
    popinContainer.style.display = "none";
}

boutonFermer.addEventListener("click", openPopin);
boutonFermer.addEventListener("click", closePopin);

// Fermer Popin quand échap
window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      closePopin();
    }
  });


