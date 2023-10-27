const changeur = document.getElementById("changeur");
const body = document.querySelector("body");
const titleH1 = document.querySelector('.header h1');
const zoneJeu = document.querySelector('.zone-jeu');
const zoneJeuH2 = document.querySelector('.zone-jeu .question h2');
const zoneJeuH3 = document.querySelector('.zone-jeu .question h3');
const inputReponse = document.querySelector('.zone-jeu .inter input');
const btn = document.querySelector('.zone-jeu .inter .btn button');
const footer = document.querySelector('.footer-container .footer h5');
const icon = document.querySelector('.icon i');

changeur.onclick = function(){
    changeur.classList.toggle('active');
    body.classList.toggle('active');
    titleH1.classList.toggle('active');
    zoneJeu.classList.toggle('active');
    zoneJeuH2.classList.toggle('active');
    zoneJeuH3.classList.toggle('active');
    inputReponse.classList.toggle('active');
    btn.classList.toggle('active');
    footer.classList.toggle('active');
    icon.classList.toggle('active');
}