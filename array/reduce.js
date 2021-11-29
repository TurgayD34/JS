let numbers = [45, 19, 29, 12, 99, 4];
let sum = numbers.reduce(Add);
let diff = numbers.reduce(Sub);
let multi = numbers.reduce(Multi);
let div = numbers.reduce(Div);
let sum2 = numbers.reduce(Sum2, 100);

// Burada kullandigimiz reduce default seklinde kullaniliyor. Yani soldan saga dogru ama sagdan sola icinde reduceRight methodu kullanilir.

function Add(total, value){
    return total + value;
}
function Sub(total, value){
    return total - value;
}
function Multi(total, value){
    return total * value;
}
function Div(total, value){
    return total / value;
}
function Sum2(total, value){
    return total + value;
}
document.write(sum + "<br>");
document.write(diff + "<br>");
document.write(multi + "<br>");
document.write(div + "<br>");
document.write(sum2);

// Return de kullandigimiz operator e gore islem yapilir.
// Toplama isareti yerine baska operatorler de kullanabiliriz.
// variable ismi ile function isimleri ayni olamaz. Ornegin let sum2 = numbers.reduce(sum2, 100); bu sekilde oldugun da calismaz.