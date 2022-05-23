function creerCellTitre(_contenu, _element) {
	let maCell = document.createElement("th");

	_element.appendChild(maCell);
}
let mesDonnees = [];

let init = false;

function fillTable(_donnees) {
	
	mesDonnees = _donnees;
	let montab = document.querySelector("#tabEmployees");
	

	
		
	
	let monBody = montab.createTBody();
	
	monBody.setAttribute("id", "corps");
		for (let i = 0; i < _donnees.length; i++) {
			let monObjet = _donnees[i];
			let maLigne = monBody.insertRow();
			maLigne.setAttribute("id", "maLigne" + monObjet.employee_id);
			for (let i = 0; i <= 5; i++) {
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
						cell4.innerText = ((monObjet.employee_salary / 12).toFixed(2));
						break;

					case 4:
						let cell5 = maLigne.insertCell();
						cell5.innerText = monObjet.employee_hiredate.substring(0, 4);
						break;

					case 5:
						let cell6 = maLigne.insertCell();
						let monBtnd = document.createElement("input");
						monBtnd.setAttribute("type", "button");
						monBtnd.setAttribute("class", "btn btn-primary");
						monBtnd.setAttribute("id", "btnd" + monObjet.employee_id);
						monBtnd.value = "Duplicate";
						cell6.appendChild(monBtnd);

						let monbtnde = document.createElement("input");
						monbtnde.setAttribute("type", "button");
						monbtnde.setAttribute("id", "btnde" + monObjet.employee_id);
						monbtnde.setAttribute("class", "btn btn-danger");
						monbtnde.value = "Delete";
						cell6.appendChild(monbtnde);
						break;

					default:
						break;
				}
			}
			document.getElementById("btnd" + monObjet.employee_id).addEventListener("click",function ()
			{
				let row = document.getElementById("maLigne" + monObjet.employee_id);
				console.log(row)

				let clone = row.cloneNode(true);
				clone.setAttribute("id", "clone" + monObjet.employee_id);
				monBody.appendChild(clone);
			})
			document.getElementById("btnde" + monObjet.employee_id).addEventListener("click", function ()
			{
				let remove1 = document.getElementById("maLigne" + monObjet.employee_id);
				remove1.remove();
			})
		}

	let footer = montab.createTFoot();
	footer.setAttribute("id", "pied");
		let derligne = footer.insertRow();
		for (let i = 0; i <= 5; i++) {
			if (i == 0) {
				let total = _donnees.length;
				let maCell = derligne.insertCell();
				maCell.innerText = total;
			} else if (i == 3) {
				let somme = 0;
				for (let j = 0; j < _donnees.length; j++) {
					somme += _donnees[j].employee_salary;
				}
				let cellsomme = derligne.insertCell();
				cellsomme.innerText = somme + " €";
			} else {
				let cellvide = derligne.insertCell();
				cellvide.innerText = " ";
			}
		
}
		}	

	



function trierData(_mesDonnees) {
	let sorties = _mesDonnees.sort(function (a, b) {

		return a.employee_salary - b.employee_salary;
	})

	return sorties;
}

function trierDatadecroissant(_mesDonnees) {
	let sorties = mesDonnees.sort(function (b, a) {
		return a.employee_salary - b.employee_salary;
	})
	return sorties;
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
		// console.log(data);	
		fillTable(data);
	}
}
let btntrie = document.getElementById("trie");
btntrie.addEventListener("click", function () {
	let reservoir = trierData(mesDonnees);
	let tabBody = document.querySelector("#corps");
	tabBody.remove();
	let tabPied = document.querySelector("#pied");
	tabPied.remove();
	fillTable(reservoir);
});
btntrie.addEventListener("dblclick", function () {
	let reservoir = trierDatadecroissant(mesDonnees);
	let tabBody = document.querySelector("#corps");
	tabBody.remove();
	let tabPied = document.querySelector("#pied");
	tabPied.remove();
	fillTable(reservoir);
});
// document.getElementById("croissant").addEventListener("click", function () {
// 	let reservoir = trierData(mesDonnees);
// 	//console.log(reservoir);
// 	let tabBody = document.querySelector("#corps");
// 	tabBody.remove();
// 	let tabPied = document.querySelector("#pied");
// 	tabPied.remove();
// 	fillTable(reservoir);
// })
// 	document.getElementById("decroissant").addEventListener("click", function () {
// 		let reservoir = trierDatadecroissant(mesDonnees);
// 		let tabPied = document.querySelector("#pied")
// 		tabPied.remove();
// 		let tabBody = document.querySelector("#corps");
// 		tabBody.remove();
// 		fillTable(reservoir);
// 	})
