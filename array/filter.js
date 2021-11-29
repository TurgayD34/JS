let numbers = [19, 12, 43, 4, 10, 23, 18];
let over18 = numbers.filter(myFunction);
let over = numbers.map(myFunction);

function myFunction(value){
    return value > 18;
}

document.write(over18 + "<br>");
document.write(over);

// Yani burda goruldugu gibi filter verilen degerleri filtreleme isine yariyor.
// Ama onun yerine baska statement kullanildigi zaman true false sonucunu aliyoruz.
