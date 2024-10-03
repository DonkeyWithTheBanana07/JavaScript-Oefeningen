const prompt = require("prompt-sync")();
let number = 0;

    while(number < 1 || number > 10){
        number = Number(prompt("geef me een getal, liefst tussen 1 en 10"));
    }
    console.log(number);