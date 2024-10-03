const prompt = require("prompt-sync")();

let getal = Number(prompt("Geef een getal tussen 1 en 3"));
switch(getal){
    case 1:
        uitkomst = "Eén";
        break;

    case 2:
        uitkomst = "Twee";
        break;

    case 3:
        uitkomst = "Drie";
        break;
}
console.log(uitkomst);