setTimeout(function() {

    // Affiche une alerte après 5 secondes
    alert("Bienvenue dans le petit monde de Tulipe !");
    alert("Répondez à la question suivante pour trouver un nouvel indice :");
    
    let sport = "";

    // Boucle jusqu'à ce que l'utilisateur saisisse "tennis"
    while(sport.toLowerCase() != "tennis") {
        sport = prompt("Quel sport pratique Serena Williams ?");
    }

    // Création d'un lien <a>
    let moina = document.createElement("a");
    moina.href = "https://moina-v.github.io/tennis/";
    moina.textContent = "Visitez le site de Moina";
    alert("Trouve le lien qui vient d'apparaître dans le site !")
    
    // Insertion du lien dans la page
    let lien = document.getElementById("malkmus");
    let div = document.getElementById("pavement");
    div.insertBefore(moina, lien);

}, 10000);
