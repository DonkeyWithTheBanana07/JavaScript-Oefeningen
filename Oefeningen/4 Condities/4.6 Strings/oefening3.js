const prompt = require("prompt-sync")();

let zin = prompt("Gelieve een zin in te geven kifesh");

let was = zin.replace("is", "was");
console.log(was);