// strings
let str = "Rony islam";
let str2 = 'Heemel';
console.log(str, str.length);
console.log(str2,str2.length);
// string indices
console.log(str[0]);

/* template literals: a way to have embedded expressions in strings

string test $[expressions] string test*/
let obj = {
    item: "pen",
    price: 10
}

console.log("The item is", obj.item, "and its price", obj.price); 
// atakei jodi string literal diye print korte chai tahole
let output = `The item is ${obj.item} and its price ${obj.price}`

// string literal just ` ` atake bole r er moddhe ${expression} thakle setake
// string Interpolation bole

// escape character
console.log( "This is my collage \n and I love my collage");
console.log( "This is my collage \t and I love my collage");

// some in-built function in string
let str3 = "   This is a String   ";

let uppercase = str3.toUpperCase();
console.log(uppercase);
let lowercase = str3.toLowerCase();
console.log(lowercase);

// string trim (remove whitespace from before starting a string and after ending)
let trimStr = str3.trim();
console.log(trimStr);

// string slice str.slice(start, end); => end include hoi na
let sliceStr = "Hellolololo";
console.log(sliceStr.slice(1,5));

// 2 string jora lagate hole str1.concate(str2);
console.log(str.concat(str2));
// atake just + diyei javaScript e kora jai
console.log(str + str2);
// string replace
console.log(sliceStr.replace("H", "Y"));
console.log(sliceStr.replace("lo", "p"));
console.log(sliceStr.replaceAll("lo", "Y")); //replaceAll korle sob matching value replace hoye jabe




