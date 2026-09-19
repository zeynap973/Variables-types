const prompt = require("prompt-sync")();
let vitesse = Number(prompt("Entrer la vitesse en Km/h: "));
let vitesseConvertie = vitesse * 0.27778;

console.log(`La vitesse en m/s est: ${vitesseConvertie}`);