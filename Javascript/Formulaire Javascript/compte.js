function getCookies(_nom) {
	let valeur = " cookie non trouvé";

	let tabCookies = document.cookie.split("; ");
	for (let i = 0; i < tabCookies.length; i++) {
		
		let tabParam = tabCookies[i].split("=");
		if (tabParam[0] == _nom) {
			valeur = tabParam[1];
		}
	}


	return valeur;
}

document.querySelector("#nom").textContent = getCookies("monnom");
document.querySelector("#prenom").textContent = getCookies("monprenom");
document.querySelector("#ville").textContent = getCookies("maville");
document.querySelector("#pseudo").textContent = getCookies("monpseudo");
document.querySelector("#naissance").textContent = getCookies("naissance");
document.querySelector("#nbjour").textContent = getCookies("jourAnniv");