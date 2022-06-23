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

function genererchoix_cpu() {
    const randomNumber = Math.floor(Math.random() * choix_possibles.length) + 1
    console.log(randomNumber);

    if (randomNumber === 1) {
        choix_cpu = 'pierre'
    }
    if (randomNumber === 2) {
        choix_cpu = 'papier'
    }
    if (randomNumber === 3) {
        choix_cpu = 'ciseaux'
    }
    afficher_choix_cpu.innerHTML = choix_cpu
}

function regle_pierre_papier_ciseaux(c1,c2) {
    if (c1 == c2) {
        resultat = "EGALITE"
    }
    if (c1 == 'pierre' && c2 == 'papier') {
        resultat = "VICTOIRE"
    }
    if (c1 == 'ciseaux' && c2 == 'papier') {
        resultat = "DEFAITE"
    }
    if (c1 == 'ciseaux' && c2 == 'pierre') {
        resultat = "VICTOIRE"
    }
    if (c1 == 'papier' && c2 == 'pierre') {
        resultat = "DEFAITE"
    }
    if (c1 == 'papier' && c2 == 'ciseaux') {
        resultat = "VICTOIRE"
    }
    if (c1 == 'pierre' && c2 == 'ciseaux') {
        resultat = "DEFAITE"
    }
    afficher_resultat.innerHTML = resultat
    
}