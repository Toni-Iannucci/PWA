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
                let button = window.document.createElement('button');

                // Mise en place attributs
                cardChampion.classList.add('card');
                button.classList.add('boutonPopinOuvrir');
                imageChampion.alt="imageChampion";
                titleChampion.classList.add('title');

                // Mise en place des données
                imageChampion.src = `http://ddragon.leagueoflegends.com/cdn/9.19.1/img/champion/${championsData.data[element].image.full}`
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
    window.onload=function(){
        console.log('Document chargé')
        let cards = document.querySelectorAll('.card');
        let popin = document.getElementById('popin');
        let popinContent = document.getElementById('popinContent');
        
       
        let closePopinbutton =  window.document.createElement('button');
        closePopinbutton.setAttribute("id","closePopin");
        closePopinbutton.innerHTML = 'Fermer'

        function openPopin() {
            let boutonOuvrir = document.getElementsByClassName('boutonPopinOuvrir');
            popinContent.innerHTML = this.innerHTML;
            popinContent.appendChild(closePopinbutton);
            
            popin.style.display = 'block';
            

            console.log('ouvert')
        }
        function closePopin(){
            popin.style.display = 'none';
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
        
}
getDataChampions();
// Fin de la récupération et de l'affichage des données de l'API 


// Gestion de l'ouverture



// Fonction pour l'ouverture et la fermeture de la PopIn







