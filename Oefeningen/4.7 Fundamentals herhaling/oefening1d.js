
// !!!  OPGELET  !!!  deze oefening is nog niet volledig, men is gewoon doorgegaan naar de volgende oefening.








const prompt = require("prompt-sync")();

let invoer = Number(prompt("geef een getal"));
let regel = "*";
let interval = 5;

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
    for(let j = 1; j <= invoer - i; j+=interval){
        if(i % interval ==0){
            regel = regel.replace("*", "@");
        }
        
        
    }
    console.log(regel);
}
