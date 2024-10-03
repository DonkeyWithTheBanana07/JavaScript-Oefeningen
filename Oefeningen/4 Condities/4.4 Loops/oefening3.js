const prompt = require("prompt-sync")();

let begin = Number(prompt("Geef een begingetal"));
let eind = Number(prompt("Geef een eindgetal"));

for(let i = begin; i <= eind; i++){
if(i % 2 == 0){
    console.log(i);
}
else{

}
}