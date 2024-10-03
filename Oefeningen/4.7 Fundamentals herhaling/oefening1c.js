const prompt = require("prompt-sync")();

let invoer = Number(prompt("geef een getal"));
let regel = "*";



for(i = 0; i <= invoer; i++){
    regel = "";
    
    for(let j = 1; j <= invoer - i; j++){
        regel += " ";
    }
    for(let k = 1; k <= i; k++){
        regel += "*";
    }
    for(let k = 0; k <= i; k++){
        regel += "*";
    }
    for(let j = 1; j <= invoer - i; j++){
        regel += " ";
    }
    console.log(regel);
}

