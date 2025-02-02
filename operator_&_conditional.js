//comparison operator
let ax= 3;
let bx= 5;
console.log("a=!b" , ax != bx );

let cx = 5;
let dx = "5"; /*string -> int ;akhane string er moddhe kabol jodi int thake tahole javaScript 
automatic setake int e convert kore nai*/
console.log(cx == dx)//true return korbe

// ata maintain korar jonno er strict version use kora hoi "===" use kore
let cy = 5;
let dy = "5"; 
console.log(cx === dx) //false return korbe

// ternary conditions
// condition? true:false
let age = 16;
let result =age>18? "adult" : "not adult";
console.log(result);

// it can be use as similar as if else condition

age>= 18? "adult": "not adult";
