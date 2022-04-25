function getColor() {
	let chainecouleur = "#" + document.querySelector("#rouge").value + document.querySelector("#vert").value + document.querySelector("#bleu").value;
	document.body.setAttribute("style"," background-color:" + chainecouleur)
}

const rouge = document.getElementById("rouge");	
const vert = document.getElementById("vert");
const bleu = document.getElementById("bleu");


	function verifChamps(_champs)
{
	let testbool = false
	let chaine = _champs.value.toUpperCase();
	let regex = /^[0-9A-F]{2}$/;
	if (chaine.match(regex)){
		
		testbool = true
	}else {
		_champs.value = "";
		_champs.focus();
	}
	return testbool;
}
document.querySelector("#rouge").addEventListener("blur", function () {
	if (verifChamps(rouge)) {
		getColor();
	}
});

document.querySelector("#vert").addEventListener("blur", function () {
	if (verifChamps(vert)) {
		getColor();
	}
});
document.querySelector("#bleu").addEventListener("blur", function () {
	if (verifChamps(bleu)) {
		getColor();
	}
});
	let btnrouge = document.querySelector("#btrouge");
	btnrouge.addEventListener("click", function () {
		
	    document.querySelector("#rouge").value = "ff";
		document.querySelector("#vert").value = "00";
		document.querySelector("#bleu").value = "00";
		getColor();
	
	});
	let btnvert = document.querySelector("#btvert");
	btnvert.addEventListener("click", function () {
		
	    document.querySelector("#rouge").value = "00";
		document.querySelector("#vert").value = "ff";
		document.querySelector("#bleu").value = "00";
		getColor();
	
});
		let btnbleu = document.querySelector("#btbleu");
		btnbleu.addEventListener("click", function () {
		
	    document.querySelector("#rouge").value = "00";
		document.querySelector("#vert").value = "00";
		document.querySelector("#bleu").value = "ff";
		getColor();
	
		});



















