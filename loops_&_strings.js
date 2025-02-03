// for in loops
let student1 = {
    name: "Rony Islam",
    age: 26,
    cgpa: 3.13,
    isPass: true,
};

for(let i in student1){
    console.log("key:",i , "value", student1[i])
}

// practice 1: print all even number from 1 to 100 
// for(let j =0; j<=100; j++){
//     if(j%2 ===0){
//         console.log(j);
//     }
// } 

// practice2: guess a number and if it is equal to the number then congratulate him

// let gameNum = 25;
// let userNum = prompt("Guess the number:");
// while(gameNum !== userNum){
//     userNum = prompt("you guess a wrong number. Try again:")
// }
// console.log("congratulations you entered the right number");