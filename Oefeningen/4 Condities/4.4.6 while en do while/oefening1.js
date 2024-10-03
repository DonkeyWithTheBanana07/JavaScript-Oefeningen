const prompt = require("prompt-sync")();
let sum = 0;
let number = 0;

do {
    let number = Number(prompt("geef een getal in"));
    sum += number;
} while(number > 0);

console.log(sum);