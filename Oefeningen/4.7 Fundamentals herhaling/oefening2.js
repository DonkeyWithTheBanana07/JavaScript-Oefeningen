const prompt = require("prompt-sync")();

let onder = Number(prompt("Gelieve een ondergrens in te geven"));
let boven = Number(prompt("Gelieve een bovengrens in te geven"));
let nieuwe = 0;

for(i = onder; i<= boven; i++){
    if(i % 3 == 0){
        nieuwe += i;
    }
    else{

    }
}
console.log(nieuwe);