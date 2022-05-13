function creerCellTitre(_contenu, _element) {
	let maCell = document.createElement("th");

	_element.appendChild(maCell);
}

function fillTable(_donnees) {
	let montab = document.querySelector("#tabEmployees");
	let entete = montab.createTBody();
	let lignetitre = entete.insertRow();
	let monBody = montab.createTBody();
	for (let i = 0; i < _donnees.length; i++) {
		let maLigne = monBody.insertRow();
		let monObjet = _donnees[i];
		for (let i = 0; i <= 4; i++) {
			switch (i) {
				case 0:
					let cell1 = maLigne.insertCell();
					cell1.innerText = monObjet.employee_id;
					break;
				case 1: let cell2 = maLigne.insertCell();
					cell2.innerText = monObjet.employee_firstname + " " + monObjet.employee_lastname;
					break;
				case 2: 
					let cell3 = maLigne.insertCell();
					cell3.innerText = (monObjet.employee_firstname.substring(0, 1)).toLowerCase() + "." + (monObjet.employee_lastname).toLowerCase() + "@email.com";
					break;

				case 3: let cell4 = maLigne.insertCell();
					cell4.innerText = ((monObjet.employee_salary/12).toFixed(2));
					break;
				
				case 4:
					let cell5 = maLigne.insertCell();
					cell5.innerText = monObjet.employee_hiredate.substring(0, 4);
					break;





				default:
					break;
			}
		}
	}
}



let xhr = new XMLHttpRequest();
xhr.open("GET", "test.json", true);
xhr.responseType = "json";
xhr.send();
xhr.onload = function () {
	if (xhr.status != 200) {
		alert("Erreur" + xhr.status + ":" + xhr.statusText);
	} else {
		let data = xhr.response;
		console.log(data);
		fillTable(data);
	}
}