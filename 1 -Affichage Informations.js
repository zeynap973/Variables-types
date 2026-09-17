const prompt = require('prompt-sync')();
let nom = prompt('quel est ton nom? ');
let prenom = prompt('quel est ton prénom? ');
let age = prompt('quel est ton âge? ');
let sexe = prompt('quel est ton sexe? ');
let email = prompt('quel est ton adresse e-mail? ');

console.log(`ton nom est ${nom},
    ton prénom est ${prenom},
    tu as ${age} ans, 
    ton sexe est ${sexe} et 
    ton adresse e-mail est ${email}.`);

