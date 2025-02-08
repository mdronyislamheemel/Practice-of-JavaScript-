/*function declare: 
function functionName(parameters){
do some work
}
function call: functionName();*/

function sum(x,y){
    s = x+y;
    return s;
}
let output = sum(5,10);
console.log(output);

/*arrow function
(parameters) =>{
}
r ata print korar jonno akta variable er moddhe rakhte hobe tahole hobe
let/const variable_name = (parameter) =>{
}*/

let mul = (x,y) =>{
    console.log(x*y);
}

// let count vowel in a string
let vowelCount = (str) => {
    let count = 0;
    for(const char of str){
        if(char === "a"||
            char === "e"||
            char === "i"||
            char === "o"||
            char === "u"            
        ){
            count ++;
        }
    }
    console.log(count);
}