console.log('Welcome to my Irrational Number\'s Calculator!');

const ps = require("prompt-sync");
const prompt = ps();

let input = prompt('How many input would you like to run for? : ');

console.log(`The algorithm will run for ${input} iterations`);

console.log(`pi: ${computePi(input)}`);
console.log(`ln(2) ${computeLnTwo(input)}`);
console.log(`√2: ${computeSqrtTwo(input)}`);
console.log(`e: ${computeEulersNumber(input)}`);
console.log(`phi ${computePhi(input)}`);

function computePi(input){
    let denom = 1;
    let total = 0
    for(let i = 0; i < input; i++){
        let sign = (i%2 === 0) ? 1 : -1;
        total += (sign)*(1/denom);
        denom+=2
    }
    return total*4;
}

function computeLnTwo(input){
    let total = 0;
    let denom = 1
    for(let i =0; i < input; i++){
        let sign = (i%2 === 0) ? 1 : -1;
        total += (sign)*1/denom;
        denom++;
    }
    return total
}

function computeSqrtTwo(input){
    
    if(input > 87){
        //javascript simply cannot handle any factorial > than 87
        //which is needed to calculate sqrt2
        input = 87;
    }

    let total = 1;

    for(let i = 1; i < input; i++){
        let numerator = (Math.pow((-1),(i-1))) * factorial((2*i)-2);
        let denom = factorial(i) * factorial(i-1) * Math.pow(2,((2*i)-1))
        total += numerator/denom;
       // console.log(total);
    }

    return total;
}

function computeEulersNumber(input){
    let total=1;
    if(input > 87){
        //javascript simply cannot handle any factorial > than 87
        //which is needed to calculate sqrt2
        input = 87;
    }

    for(let i =1; i < input-1; i ++){
        total+= (1)/factorial(i)
    }
    return total;


}

function computePhi(input){
    if(input > 85){
        //javascript simply cannot handle any factorial > than 87
        //which is needed to calculate sqrt2
        input = 84;
    }
    
    let total = 13/8;
    //phi can be first "well approximated" by rationals 
    //but anything more than 13/8 is done via the following algorithm
    for(let i = 0; i < input; i++){
        let numerator = Math.pow((-1),(i+1)) * factorial((2*i)+1);
        let denom = factorial(i+2) * factorial(i) * Math.pow(4,(2*i)+3);
        total+= numerator/denom
    }
    return total;
}

function factorial(n){
    //if this function is called recursively, 
    //it reaches the call stack when calculating sqrt2
    // so sadly i had to do it iteratively :(
    let totalValue = 1
    while(n > 0){
        totalValue *= n;
        n--;
    }
    return totalValue;
}