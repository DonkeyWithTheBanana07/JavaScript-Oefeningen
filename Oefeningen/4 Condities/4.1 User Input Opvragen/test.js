const prompt = require("prompt-sync")(); // makt het mogelijk om een prompt() te gebruiken

let naam = prompt("Wat is je naam? "); // hier typt de gebruiker zijn naam. het zal dan vervolgens worden opgeslagen
console.log("Je naam is " + naam + ".");