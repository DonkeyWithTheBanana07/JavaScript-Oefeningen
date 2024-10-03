const prompt = require("prompt-sync")();

let invoer = Number(prompt("geef een getal"));
let regel = "*";

for(i = 1; i <= invoer; i++){
    console.log(regel);
    regel += ("*");
}