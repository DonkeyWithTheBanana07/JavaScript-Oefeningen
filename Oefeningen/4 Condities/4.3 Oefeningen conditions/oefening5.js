const prompt = require("prompt-sync")();

let inkomen = Number(prompt("wat is je inkomen?"));
if(inkomen < 10000){
    inkomen2 = inkomen;
    belasting = 0;
}else if(inkomen >= 10000 && inkomen < 20000){
    inkomen2 = inkomen - inkomen * 0.1;
    belasting = inkomen * 0.1;
}else if(inkomen >= 20000 && inkomen < 50000){
    inkomen2 = inkomen - inkomen * 0.2;
    belasting = inkomen * 0.2;
}else if(inkomen >= 50000){
    inkomen2 = inkomen - inkomen * 0.3;
    belasting = inkomen * 0.3;
}
console.log("Je nieuwe inkomen is " + inkomen2);
console.log("Je betaalt " + belasting + " aan belastingen");