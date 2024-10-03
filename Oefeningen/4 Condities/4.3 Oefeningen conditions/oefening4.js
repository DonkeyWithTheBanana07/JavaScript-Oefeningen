const prompt = require("prompt-sync")();

let jaar = Number(prompt("Geef een jaar in"));
let maand = Number(prompt("Geef een maand in"));

if (maand == 2){
    if((jaar % 4 == 0 && jaar % 100 != 0) || (jaar % 400 == 0)){
        console.log("februari in een schrikkeljaar");
    }else{
        console.log("februari in een normaal jaar")
    }
}

if(jaar % 4 == 0){
    if(maand = 2){
        console.log("februari in een schrikkeljaar")
    }
}