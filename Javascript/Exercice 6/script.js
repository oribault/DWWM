// /**
//  * mettre mes valeurs statiques pour calculer plus tard le prix des articles
//  * récupérer les valeurs entré dans le formulaire
//  * afficher le prix total
//  * ajouter des évènement sur les élément
//  */

// //Déclaration de variable
// let qte1 = 0;
// let prixU1 = 0;

// //Récupérer l'lélémént HTML de type input lié à la quantité de l'article 1
// let quantity1= document.getElementById("txtqte1").value;
// //Récupérer l'élément HTML de type input lié au prix unitaire de l'article 1
// let unitPrice1 = document.getElementById("prix1").value;
// //Recuperer l'élément HTML de type input lié au prix total pour les articles 1
// let prixCalculArticle = document.getElementById("textprixdesarticle1");

// //Ajouter un l'écoute d'évènementde type input sur l'élément qte1
// //addEventListener prend 2 paramètre : une string pour definir le type d'évènement à écouter et une fonction qui sera executé à chaque fois que l'évènement à lieu
// quantity1.addEventListener("input", function (event) {
    
//  //event.target est la cible    /l'element  HTML sur lequel a eu lieu l'évènement.  .value récupère la valeur de l'attribut value de l'élément sur lequel a eu lieu l'évenement
//     qte1 = event.target.value;
//  //qte1 = quantite1.value
 
//  //Calcul du prix total des articles 1.
//     prixArticle1 = qt1 * prixU1;
// //Ajouter la valeur calculée au niveau de l'élément corespondant.
//     prixCalculrArticle1.value = prixArticles1;
// })

// unitPrix.addEventListener("input", function (event) {
//     prixU1 = event.target.value;
//     event.target.value = prixU1;
//     prixArticle1.value = prixArticle1;
// })
// /*quantity1.addEventListener("click", (event) => {
    
// })
// */

// /*
// quantity1.addEventListener("click", faireUnTruc)
// function faireUnTruc(event){
//  console.log("Faire quelque chose")
// }
// */

function Calcul()
{
    document.querySelector("#pt1").value = Number(document.querySelector("#txtqte1").value) * Number(document.querySelector("#pu1").value);
    document.querySelector("#pt2").value = Number(document.querySelector("#txtqte2").value) * Number(document.querySelector("#pu2").value);
    document.querySelector("#prixtotal").value = Number(document.querySelector("#pt1").value)  + Number(document.querySelector("#pt2").value);
}

function control(_element_input)
{
    let monControl = true;
    let chaine = _element_input.value
    if (isNaN(chaine) && chaine.length> 0)
    {
        monControl = false;
        alert(chaine + ": n'est pas valide")
       _element_input.value = " ";
        _element_input.focus();
        monControl = false
    }

    return monControl;

}

document.querySelectorAll("input[type=text]").forEach(item => {
    item.addEventListener("input", function (event) {
        if(control(item)==true) Calcul();
    })
});

