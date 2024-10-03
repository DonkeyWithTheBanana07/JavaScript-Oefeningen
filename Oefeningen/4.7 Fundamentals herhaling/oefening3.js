let getal = "";
invul = "";

for(i = 1; i <= 100; i++){
    if((i % 3 == 0) && (i % 5 == 0)){
        //getal.replace(getal, "fizzbuzz");
        getal = "fizzbuzz";
    }
    else if((i % 3 == 0) && (i % 5 != 0)){
        //getal.replace(getal, "fizz")
        getal = "fizz";
    }
    else if((i % 3 != 0) && (i % 5 == 0)){
        //getal.replace(getal, "buzz")
        getal = "buzz";
    }
    else{
        getal = i;
    }
    //invul += getal;
    console.log(getal);
}