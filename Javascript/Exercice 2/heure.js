// Afficher les la Date
let chaineDate = "";//Créer une variable chaine(local)
let madate = new Date();// Instanciation objet Date

let jour=    (madate.getDate()<10) ? "0"+madate.getDate() : madate.getDate();
let mois= (madate.getMonth()+1<10 ) ? "0"+(madate.getMonth()+1): madate.getMonth()+1  ; 
let annee= madate.getFullYear();     

chaineDate += jour + "/"+  mois + "/" + annee;// Utilisation des méthodes de l'objet Date

let monBouton= document.getElementById("btndate");
monBouton.addEventListener("click", function() 
{ 
document.getElementById("txtdate").value=chaineDate;
} )

//Afficher les Heures
let chaineHeure ="";
let monHeure = new Date();

let second =(monHeure.getSeconds()<10) ? "0" +monHeure.getSeconds() : monHeure.getSeconds();
let minutes = (monHeure.getMinutes()<10) ? "0" +monHeure.getMinutes(): monHeure.getMinutes();
let heures = (monHeure.getHours() <10) ? "0" +monHeure.getHours() : monHeure.getHours();

chaineHeure += heures + ":" + minutes + ":" + second;

let monButton = document.getElementById("btnheure");
monButton.addEventListener("click", function(){
document.getElementById("txtheure").value=chaineHeure;
})





