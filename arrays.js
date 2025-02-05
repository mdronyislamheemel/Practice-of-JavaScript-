let marks = [26,35,65,68];
console.log(marks);

let sum = 0;
for(let val of marks){
    sum += val;
}
console.log(`Total marks: ${sum}`);
let avg = sum / marks.length;
console.log(`Average marks of the class ${avg}`);

// Practice

let items = [250, 300, 500, 750, 900];

let i = 0;
for(let val  of items){
    let offer = val * 0.1;
    items[i] = items[i] - offer;
    console.log(` Offer price of the items= ${items[i]}`);
    i++;
}

// othoba
for(let i = 0; i< items.length; i++){
    let offer = items[i] * 0.1;
    items[i] -= offer;
}
console.log(`after offer price ${items}`);

// array.push methods: sob somoi end e giye jog hobe
items.push(350);
items.push("Rony");

