const prompt = require("prompt-sync")();
let distanceKm = Number(prompt("Entrer la distance en Km: "));
let distanceYards = distanceKm * 1093.61;

console.log(`la distance en Yards est: ${distanceYards}`)