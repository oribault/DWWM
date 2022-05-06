var tabMois=['janvier','fevrier','mars','avril','mai','juin','juillet','aout','septembre','octobre','novembre','decembre'];
function afficherMois() 
{
    let opt = document.createElement('option');
    opt.textContent = "mois";
    opt.value = "";
    document.querySelector("#mois").appendChild(opt);
    
    for (let i = 0; i < tabMois.length; i++) 
    {
    opt = document.createElement("option");
    opt.textContent = tabMois[i];
    opt.value = i + 1;
    document.querySelector("#mois").appendChild(opt);
    }
}


function afficherJour() 
{
    let opt2 = document.createElement('option');
    opt2.textContent = "jour";
    opt2.value= "";
    document.getElementById("jour").appendChild(opt2);
    

    for (let i = 1; i <= 31; i++)
    {
        opt2 = document.createElement('option');
        if(i<10) 
        {
            opt2.textContent ="0"+i;
        }
        else 
        {
            opt2.textContent = i;
        }
        
            opt2.value = i ;
            document.querySelector("#jour").appendChild(opt2);
    }
    
    
    
}
    
function afficherAnnee() 
{
        let opt3 = document.createElement('option');
        opt3.textContent = "annee";
        opt3.value = "";
        document.getElementById("annee").appendChild(opt3)
    
    for (let i = 1970; i <= 2022; i++)
    {
        opt3 = document.createElement("option");
        opt3.textContent = i;
        opt3.value = i;
        document.querySelector("#annee").appendChild(opt3);
    }

}

    afficherAnnee();

    afficherJour();

afficherMois();

function valNum(_champ){
    let chaine=_champ.toUpperCase();
    let somme=0;
    for (i=0; i<_champ.length; i++){
        somme+=chaine.charCodeAt(i)-64;
    }
    return somme;
}
var tabSignes=["Capricorne","Verseau","poisson","Belier","Taureau","Gémeaux","Cancer","Lion","Vierge","Balance","Scorpion","Sagittaire"]



function verif(){

    let nom=document.querySelector("#nom").value;
    nom=nom.trim();
    
     let prenom=document.querySelector("#prenom").value;
    prenom=nom.trim();
    
     let mois=document.querySelector("#mois").value;
    
let verifBool=false;

if (nom!="" && prenom!="" && mois.length>0) {
    
    verifBool=true;
    
}
return verifBool;

}
function calculerPseudo(){
   
   if (verif() == true) {
      
    let numMois=document.querySelector("#mois").value;
    let signe=tabSignes[numMois-1];

    signe+= (valNum(document.querySelector("#nom").value)+valNum(document.querySelector("#prenom").value));
document.getElementById("pseudo").value= signe;
document.querySelector("#erreur").textContent="";   
    
document.getElementById("validation").disabled = false;
 } 
 else{
     document.getElementById("erreur").textContent="veuillez remplir tout les champs";
 }  
}


document.querySelectorAll("input[type=text]").forEach( item=>item.addEventListener( "blur", function ()
 {console.log('test');

     calculerPseudo();
 
} ) )

document.querySelectorAll("select").forEach( item=>item.addEventListener( "change", function ()
 {console.log('test');
 
     calculerPseudo();
 
}))

//function nbJourAnniv() {

//}

function setCookie(_nom,_valeur){
    let datejour=new Date();
    let dateExp=new Date(datejour.getFullYear(),datejour.getMonth(),(datejour.getDate()+1));
    let expiration=dateExp.toUTCString(); 
    document.cookie=_nom + "="+_valeur + ";expires="+expiration+";SameSite=Strict";


}
function calculJourAnniv(_mois,_jour) {
	let dateJour = new Date()
	let dateAnniv = new Date(dateJour.getFullYear(), _mois - 1, _jour);
	let jourAnniv = 0;
	if (dateJour < dateAnniv) {
		 jourAnniv = Math.ceil((dateAnniv - dateJour) / (24 * 60 *60* 1000));
	}
	else {
		dateAnniv = new Date(dateJour.getFullYear() + 1, _mois - 1, _jour)
		jourAnniv = Math.ceil((dateAnniv - dateJour) / (24 * 60 *60*1000));
	}
	return jourAnniv;
}

function valider(){
setCookie("monnom",document.getElementById("nom").value);
setCookie("monprenom",document.getElementById("prenom").value);
setCookie("monmois", document.getElementById("mois").value);
setCookie("monannee", document.getElementById("annee").value);
setCookie("monjour", document.getElementById("jour").value);
setCookie("monpseudo", document.getElementById("pseudo").value);
setCookie("maville", document.getElementById("ville").value);
setCookie("jourAnniv", calculJourAnniv(document.getElementById("mois").value, document.getElementById('jour').value));

	let jour = (document.getElementById("jour").value < 10) ? "0" + document.getElementById("jour").value : document.getElementById("jour").value;
	let monmois = (document.getElementById("mois").value < 10) ? "0" + document.getElementById("mois").value : document.getElementById("mois").value;
	let dateNaissance = jour + "/" + monmois + "/" + document.getElementById("annee").value;
	setCookie("naissance", dateNaissance);


	window.location.href = "accueil.html";

}

document.querySelector("#validation").addEventListener("click", function () {

valider();

});

