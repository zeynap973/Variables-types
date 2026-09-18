const prompt = require("prompt-sync")()
let temperatureCelsius = prompt("Entrez la température en degrés Celsius : ");
let temperatureFahrenheit = temperatureCelsius + 273.15;
console.log(`La température en degrés Fahrenheit est : ${temperatureFahrenheit}`)