function getColor() {
	let chainecouleur = "#" + document.querySelector("#rouge").value + document.querySelector("#vert").value + document.querySelector("#bleu").value;
	document.body.setAttribute("style"," background-color:" + chainecouleur)
}
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