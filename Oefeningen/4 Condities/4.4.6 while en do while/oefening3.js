const prompt = require("prompt-sync")();

let getal = Number(prompt("geef me een getal"));

while(getal > 0){
    console.log(getal);
    getal--;
}