//Constantes

const inputText = document.querySelector('.zone-jeu input');
const btnClear = document.getElementById('clear');
const btnValid = document.getElementById('valid');
const notif = document.getElementById('notification');
const devinetteAfficher = document.getElementById('devinette');

//Tableau contenant les devinettes ainsi que leurs reponses
const devinette = [
    {
        "devinette": "Qu'est-ce qui est jaune et qui attend ?",
        "reponse": "Johnatan"
    },

    {
        "devinette": "Qu'est-ce qui doit être cassé avant qu'on l'utilise ?",
        "reponse": "Un oeuf"
    },

    {
        "devinette": "Quel mois de l'année a 28 jours ?",
        "reponse": "Tous les mois"
    },

    {
        "devinette": "Qu'est-ce qui est toujours devant soi et qu'on ne peut jamais voir ?",
        "reponse": "Son futur"
    },

    {
        "devinette": "Qu'est-ce qui ne peut pas parler mais répond quand on lui parle ?",
        "reponse": "Un écho"
    },

    {
        "devinette": "Je vous suis tout le temps et copie vos mouvements, pourtant vous ne pouvez ni me toucher ni m'attraper, qui suis-je ?",
        "reponse": "Votre ombre"
    },

    {
        "devinette": "Plus il y en a, moins on voit, qu'est-ce que c'est ?",
        "reponse": "L'obscurité"
    }
];

//Création de la fonction pour afficher la devinette
function afficherDevinetteAleatoire() {
    const indexAleatoire = Math.floor(Math.random() * devinette.length);
    const aleatoire = devinette[indexAleatoire];
    devinetteAfficher.textContent = aleatoire.devinette;
    inputText.value = ''; // Réinitialisez l'input
    notif.textContent = ''; // Réinitialisez le résultat
}

//Constante qui va prendre une valeur aleatoire dans le tableau "devinette"
const indexAleatoire = Math.floor(Math.random() * devinette.length);

// J'utilisez l'index aléatoire pour obtenir l'objet aléatoire
const aleatoire = devinette[indexAleatoire];

btnValid.addEventListener("click", () => {
    const reponseUtilisateur = inputText.value.toLowerCase(); // Je convertis la réponse en minuscules
    const devinetteActuelle = devinetteAfficher.textContent;

    const devinetteAssociee = devinette.find(d => d.devinette === devinetteActuelle);

    if (devinetteAssociee && reponseUtilisateur === devinetteAssociee.reponse.toLowerCase()) {
        notif.textContent = "Bravo ! tu as trouvé 🎉";
    } else {
        notif.innerHTML = `Faux ! La réponse était : <span style="color: white;">${devinetteAssociee.reponse}</span>`;

    }
})

//Bouton qui permettra d"actualiser la devinette
btnClear.addEventListener("click", () => {
    inputText.value = '';
    afficherDevinetteAleatoire();
})

//Afficher devinette aleatoire à chaque actualisation de la page
afficherDevinetteAleatoire();

