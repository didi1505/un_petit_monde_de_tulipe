window.onload = function() {
	alert("Bienvenue dans le petit monde de Tulipe !");
	
	let sport = "";
	while(sport != "tennis") {
		sport = prompt("Quel est le sport préféré de Stephen Malkmus, le chanteur de Pavement ?");
	};

	let moina = document.createElement("a");
	moina.href = "https://moina-v.github.io/tennis/";
	moina.textContent = "Lien";
	let lien = document.getElementById("malkmus");
	let div = document.getElementById("pavement")
	div.insertBefore(moina, lien);
}
