//variable declaration
age =25;
age = age + 1;
price = 99.99;
Name = "Rony islam";
x = null;
y = undefined;
isFollow = true;
//or this can be false

console.log(age);
console.log(price);
console.log(Name);
console.log(x);
console.log(y);
console.log(isFollow);

// there are 3 types of variable declaration in javascript
// 1. var: can be re-declared and updated. A global scope variable.
// 2. let: can be updated but not re-declared. A block scope variable.
// 3. const: can not be updated and re-declared. A block scope variable.

var a = 10;
var a = 20;
var a = 30;
console.log(a);
// tobe 2015 er por theke var var use kora hoi na.

let b = 10;
//  abar let b = 20; hobe na karon same variable duibar declare kora jabe na
b = 20;
console.log(b);

const c = 10;
const d = 20;
// akhane sudhu c = 30; ba const c = 30; dile error asbe karon const variale re-declare kora jabe na

// data types
// 1. primitive data types
// number, string, boolean, null, undefined, symbol
// 2. non-primitive data types
// object, array, function

let num = 10;
const str = "I love JS";
const isTrue = true;
const rony = null;
let p;

// abar object declare korar jonno const or let diye declare kora jai. niche amra dekhi
const student ={
    id : 15,
    FullName: "Rony Islam",
    session: 2018
}

// akhane amra 2 vabe object er vitorer jekono variable print korte pari
console.log("student id:",student.id);
console.log("student id:", student["id"]);