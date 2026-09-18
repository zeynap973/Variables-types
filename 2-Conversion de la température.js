const prompt = require("prompt-sync")()
let temperatureCelsius = Number(prompt("Entrez la température en degrés Celsius: "));
let temperatureKelvin = temperatureCelsius + 273.15;

console.log(`La température en degrés Kelvin est: ${temperatureKelvin}`)