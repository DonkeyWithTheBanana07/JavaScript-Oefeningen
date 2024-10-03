const prompt = require("prompt-sync")();

let tekst = prompt("geef een tekst in ");
let lengte = tekst.length;

for(let i = lengte; i >= 1; i--){
    console.log(tekst[i - 1]);
}