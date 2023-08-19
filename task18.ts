//making array
let places =["Fance", "Australia","USA", "UK","Singapore","Canada"];
//Printing array order
console.log("Orignal Order");
console.log(places);
// printing array in alphabetical order
console.log("Alphabetical Order");
let sort_places=["Fance", "Australia","USA", "UK","Singapore","Canada"];
sort_places.sort();
console.log(sort_places);
// prnting orignal order
console.log("Orignal order");
console.log(places);

console.log("Reverse Order");
//printing reverse order
let reverse_string= places.slice().reverse();
console.log(reverse_string);
console.log("Orignal Order");
console.log(places);
// printing reverse alphabetical order
let reverse_alphabetical= places.slice().sort((a,b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order");
console.log(reverse_alphabetical);
console.log("Orignal Array");
console.log(places);


