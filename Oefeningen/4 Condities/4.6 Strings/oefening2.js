const prompt = require("prompt-sync")();

let zin = prompt("geef een zin a oueleh");
let laatste = zin.substring(zin.length, zin.length - 1);

if(laatste == "."){
nieuwe = zin.toUpperCase();
}else{
    nieuwe = (zin + ".").toUpperCase();
}

console.log(nieuwe);