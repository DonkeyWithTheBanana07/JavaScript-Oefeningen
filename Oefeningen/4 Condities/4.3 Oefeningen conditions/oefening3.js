const prompt = require("prompt-sync")();

let score1 = Number(prompt("Wat is waarde 1? "));
let score2 = Number(prompt("Wat is waarde 2? "));

if(score1 > 50 && score2 > 50){
    console.log("Beide scores zijn goed");
}else if(score1 < 50 && score2 < 50){
    console.log("beide scores zijn slecht");
}
else if(score1 < 50 || score2 < 50){
    console.log("Eén score is goed");
}