var mesData = [];

function genererListe(_data)
{
	mesData = _data;
	for (let  i = 0; i < _data.length; i++) {
		let maCommune = _data[i];
		let monOption = new Option();

		monOption.value = maCommune.codeCommune;
		monOption.innerText = maCommune.nomCommune + "CP: " + maCommune.codePostal;
		document.getElementById("codepostal").appendChild(monOption);
	}
}

fetch("commune.json")
.then(response => response.json())
.then(response => genererListe(response))
.catch(error => alert("Erreur : " + error));

let monbtn = document.querySelector("#choix");

monbtn.addEventListener("click", function () {

	let maSelection = document.querySelector("#commune").value;
	console.log(maSelection)
	



	// for (let i = 0; i < mesData.length; i++) {
	// 	if (maSelection == mesData[i].codeCommune)
	// 	{
	// 		
				//boolTrouve=mesdata[i]
				//break
	// 		
	// 	}
		
	// }

	let objrecherche = mesData.find(item => item.codeCommune== maSelection)

	document.querySelector("#ville").innerText += objrecherche.libelleAcheminement;
})
