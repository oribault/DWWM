let chaineDate = "";//Créer une variable chaine(local)
let madate = new Date();// Instanciation objet Date
chaineDate += madate.getDate() + "/"+ (madate.getMonth()+1) + "/" + madate.getFullYear();// Utilisation des méthodes de l'objet Date
document.getElementById("txtdate").value = chaineDate;// Recherche la la valeur de l'input de type texte et on lui affecte la variable

let chaineHeure ="" + madate.getHours() + ":" + madate.getMinutes() + ":" + madate.getSeconds();
document.getElementById("txtheure").value = chaineHeure;

