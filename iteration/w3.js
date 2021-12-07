var i = 5;
for(var i = 0; i < 10; i++){
    console.log(`i = ${i}`);
}
console.log("********************")
let j = 5;
for(let j = 0; j < 10; j++){
    console.log(`j = ${j}`);
}
console.log("********************")
const person = [fName = "Turgay", lNAme = "Demir", age = 36];
let txt = "";
for(let x in person){
    txt += person[x];
    console.log(person[x]);
}
console.log("********************")
const numbers = [45, 4, 9, 16, 25];
let txt2 = "";
numbers.forEach(myFunction);

function myFunction(value, index, array){
    txt2 += value;
    console.log(value);
}
console.log("********************")
const cars = ["BMW", "Volvo", "Mercedes"];
let txt3 = "";
for(let x of cars){
    txt3 += cars;
    console.log(x);
}
console.log("********************")
let lang = "Javascript";

let text = "";
for(let x of lang){
    text += x;
    console.log(x);
}