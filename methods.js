const numbers = [1, 2, 3, 4];


// forEach method array k change kore na.. ata puro array k represent kore
// Using forEach to log each number

numbers.forEach(num => console.log(num)); // Outputs: 1, 2, 3, 4


// map method array k change kore notun array return korte pare
// Using map to create a new array with doubled numbers

const mapNumbers = numbers.map(num => num * 2); 

console.log(mapNumbers); // Outputs: [2, 4, 6, 8]

// filter method array r moddho theke amra ja chai ta filter kore ane dite pare
const filterNumbers = numbers.filter((num) => {
    return (num % 2 ===0)
    });
console.log(filterNumbers);

// reduce method: ata onekta filter method er moto kaj kore
// tobe er syntax alada
// numbers.reduce(result, current)

const output = numbers.reduce((prev , current) =>{
    return prev > current ? prev : current;

});

console.log(output);
