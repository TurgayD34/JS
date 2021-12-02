// Arrays

const dog1 = "Tore";
const dog2 = "Clementine";
const dog3 = "Doris";

// An array is kinda like container where we can store stuff if we have more than one value.

const dogs = ["Tore", "Clementine", "Doris"];
console.log(dogs);

// const years = [2004, 2011, 2021];
// console.log(years);

const years = new Array(2001, 2011, 2021, 2031, 2041);
// Diffirent way of creating an array
console.log(years);
console.log(years[3]);

// The first index is always 0. 

console.log(dogs[2]);
console.log(dogs.length);
// This will give us the exact number of elements in the array

console.log(dogs[dogs.length - 1]);
// it means dogs [3 - 1] -> dogs[2];