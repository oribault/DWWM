function creerCellTitre(_contenu,_element)
{
	let maCell =  document.createElement("th");
	maCell.innerText = _contenu;
	_element.appendChild(maCell)
}


function fillTable(_donnees)
{
	let tabcarte = document.querySelector("#tabcarte")
	let entete = tabcarte.createTHead();
	let lignetitre = entete.insertRow();
	for (const key in _donnees[0]) {
		creerCellTitre(key, lignetitre);
	}
	
	let monBody = tabcarte.createTBody();

	for (let i = 0; i < _donnees.length; i++) {
		
		let maligne = monBody.insertRow();
		let monObj = _donnees[i];
		for (var key in  monObj) {
		
			let macellule = maligne.insertCell();
			macellule.innerText = monObj[key];
			maligne.appendChild(macellule);
		}
	}
	
}
function rechercherMaxAttack(_data) {
	let max = _data[0].attack;
	let numCarte = _data[0].id;
	console.log(max);
	for (let i = 0; i < _data.length; i++) {
			
		
		if (_data[i].attack > max) {
			max = _data[i].attack;
			numCarte = _data[i].id;
		}
	}
	return _data[numCarte - 1];
}

function rechercherMaxDefense(_data) {
		let max = _data[0].armor;
		let numCarte = _data[0].id;
		console.log(max);
		for (let i = 0; i < _data.length; i++) {


			if (_data[i].armor > max) {
				max = _data[i].armor;
				numCarte = _data[i].id;
			}
		}
		return _data[numCarte - 1];
}
function rechercherMaxPlayed(_data) {
	let max = _data[0].played;
	let numCarte = _data[0].id;
	console.log(max);
	for (let i = 0; i < _data.length; i++) {


		if (_data[i].played > max) {
			max = _data[i].played;
			numCarte = _data[i].id;
		}
	}
	return _data[numCarte - 1];
}

function rechercherMaxVictory(_data) {
	let max = _data[0].victory;
	let numCarte = _data[0].id;
	console.log(max);
	for (let i = 0; i < _data.length; i++) {


		if (_data[i].victory > max) {
			max = _data[i].victory;
			numCarte = _data[i].id;
		}
	}
	return _data[numCarte - 1];
}

let xhr = new XMLHttpRequest();
xhr.open("GET", "test.json", true);
xhr.responseType = "json";
xhr.send();

xhr.onload = function () {
	//Si le statut HTTP n'est pas 200...
	if (xhr.status != 200) {
		//...On affiche le statut et le message correspondant
		alert("Erreur " + xhr.status + " : " + xhr.statusText);
		//Si le statut HTTP est 200, on affiche le nombre d'octets téléchargés et la réponse
	} else {
		const btndefense = document.querySelector("#btn_attack");
		const btnattack = document.querySelector("#btn_defense");
		const btnplayed = document.querySelector("#btn_played");
		const btnvictory = document.querySelector("#btn_victory");
		const btnreset = document.querySelector("#reset");

		let data = xhr.response;
		console.log(data);
		fillTable(data);
			//console.log(rechercheMaxAttack)
	
		let monObj = rechercherMaxAttack(data);
		console.log(monObj);
		btndefense.addEventListener("click", function () {
			//alert("test");
			document.getElementById("nom").innerText = monObj.name;
			document.querySelector("#idpower").innerText = monObj.power;
			document.querySelector("#idattack").innerText = monObj.attack;
			document.querySelector("#iddefense").innerText = monObj.armor;
			document.getElementById("score").innerText = "Played: " + monObj.played + " | " + "Victoires:" + monObj.victory;
		});
		let obj = rechercherMaxDefense(data);
		console.log(obj);
		btnattack.addEventListener("click", function () {
			//alert("test");
			document.getElementById("nom").innerText = obj.name;
			document.querySelector("#idpower").innerText = obj.power;
			document.querySelector("#idattack").innerText = obj.attack;
			document.querySelector("#iddefense").innerText = obj.armor;
			document.getElementById("score").innerText = "Played: " + obj.played + " | " + "Victoires:" + obj.victory;
		});
		
		let played  = rechercherMaxPlayed(data);
		console.log(played);
		btnplayed.addEventListener("click", function () {
			//alert("test");
			document.getElementById("nom").innerText = played.name;
			document.querySelector("#idpower").innerText = played.power;
			document.querySelector("#idattack").innerText = played.attack;
			document.querySelector("#iddefense").innerText = played.armor;
			document.getElementById("score").innerText = "Played: " + played.played + " | " + "Victoires:" + played.victory;
		});

		btnreset.addEventListener("click", function () {
			//alert("test");
			document.getElementById("nom").innerText = "character ";
			document.querySelector("#idpower").innerText = "";
			document.querySelector("#idattack").innerText = " ";
			document.querySelector("#iddefense").innerText = " ";
			document.getElementById("score").innerText = " ";
		});
		let victory = rechercherMaxVictory(data);
		console.log(victory);
		btnvictory.addEventListener("click", function () {
			//alert("test");
			document.getElementById("nom").innerText = victory.name;
			document.querySelector("#idpower").innerText = victory.power;
			document.querySelector("#idattack").innerText = victory.attack;
			document.querySelector("#iddefense").innerText = victory.armor;
			document.getElementById("score").innerText = "Played: " + victory.played + " | " + "Victoires:" + victory.victory;
		});
	}
	
};

