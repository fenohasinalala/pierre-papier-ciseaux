//script here
const afficher_choix_cpu= document.getElementById('choix_cpu')
const afficher_choix_joueur= document.getElementById('choix_joueur')
const afficher_resultat= document.getElementById('resultat')
const choix_possibles = document.querySelectorAll('button')
let choix_joueur
let choix_cpu
let resultat

choix_possibles.forEach(choix_possible => choix_possible.addEventListener('click', (e) => {
    choix_joueur = e.target.id
    afficher_choix_joueur.innerHTML = choix_joueur
    genererchoix_cpu()
    regle_pierre_papier_ciseaux(choix_cpu, choix_joueur)
}))