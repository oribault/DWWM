let tabMois = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre'];

function afficherMois() {
	let opt = document.createElement('option');
	opt.textContent = "mois";
	opt.value = "";
	document.querySelector("#mois").appendChild(opt);

	for (let i = 0; i < tabMois.length; i++) {

		opt = document.createElement("option");
		opt.textContent = tabMois[i];
		opt.value = i + 1;
		document.querySelector("#mois").appendChild(opt);
	}
}



function afficherjour() {
let	opt2 = document.createElement('option');
	opt2.textContent = "jour";
	opt2.value= "";
	document.getElementById("jour").appendChild(opt2);

	for (let i = 1; i <= 31; i++){
		opt2 = document.createElement('option');
		if (i<10) {
			opt2.textContent ="0"+i;
		} else {
			opt2.textContent = i;
		}
		
		opt2.value = i ;
		document.querySelector("#jour").appendChild(opt2);
	}

}

function afficherannee() {
	let opt3 = document.createElement('option');
	opt3.textContent = "annee";
	opt3.value = "";
	document.getElementById("annee").appendChild(opt3)

	for (let  i = 1970; i <= 2022;  i++){
		opt3 = document.createElement("option");
		opt3.textContent = i;
		opt3.value = i;
		document.querySelector("#annee").appendChild(opt3);
	}
	
}



afficherjour();
	
	
afficherannee();
	
	
afficherMois();
