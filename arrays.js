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

// array.pop methods: sob somoi end theke delete hobe
items.pop("Rony");

// toString method array k string e convert kore dai
console.log(items.toString());
//  array concatanation
let marvelHeroes= ["Ironman","Spiderman", "Thor"]
let dcHeroes = ["Superman", "Batman"];
let Heroes = marvelHeroes.concat(dcHeroes);
console.log(Heroes);

// unshift method: array r begin e add kore
marvelHeroes.unshift("goru");
// shift method: array er befin theke delete kore
marvelHeroes.shift("goru");

//slice(startIndex, endIndex)-> endIndex not included and doesn't change original array
console.log(marvelHeroes);
console.log(marvelHeroes.slice(1,3));
// splice(): change original array(add, remove, replace)
// splice(startIndex, delCount, NewElement);
marvelHeroes.splice(2,2, "Dr. Strange")
