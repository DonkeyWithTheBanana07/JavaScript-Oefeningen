const prompt = require("prompt-sync")();

let zin = prompt("vul een zin in");
lengte = zin.length;

if(lengte > 10){
    console.log("dit is een lange zin")
}else{
    console.log("dit is een korte zin")
}