const prompt = require("prompt-sync")();

let invoer = Number(prompt("geef een getal"));
let regel = " ";
//let spatie = " ";

for(i = 1; i <= invoer; i++){
    regel = "";
    
    for(let j = 1; j <= invoer - i; j++){
        regel += " ";
    }
    for(let k = 1; k <= i; k++){
        regel += "*";
    }
    console.log(regel);
}

