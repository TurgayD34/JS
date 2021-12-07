function sum(num1, num2){
    return num1 + num2;
}
function toCelcius(x){
    return (5/9)*(x-32);
}
console.log(toCelcius(63));

// Javascript islevi, belirli bir gorev gerceklestirmek icin tasarlanmis bir kod blogudur.
// Bir javascript islevi "bir sey onu cagirdiginda" yurutulur.
// Functionlar parametreler de icerebilir, ornegin funtion name(fname, lname); ve bu parametreleri suslu parantez icinde kullanilir.
// Ve ne zaman biz bu function i cagirdigimiz da bu parametreleri vermezsek bu function kesinlikle calismaz.
// Bu function lari kullanirken return methodunu da kullanmaliyiz cunku bu deger cagirildigizda sonuc olarak karsimiza cikacak.
// Bir javascript islevi icinde bildirilen degiskenler, islev icin local olur.
// Local degiskenler yanlizca function icinden erisilebilir.

function getName(fname, lname){
    return fname + " " + lname;
}
console.log(getName("Turgay", "Demir"));
console.log(sum(3, 5));

// Sadece bir function yazildiktan onu istedigimiz kadar kullanabiliriz.
function calculate(num1, num2){
    return num1 * num2;
}

document.getElementById("result1").innerHTML = calculate(4,1);
document.getElementById("result2").innerHTML = calculate(4,2);
document.getElementById("result3").innerHTML = calculate(4,3);
document.getElementById("result4").innerHTML = calculate(4,4);
document.getElementById("result5").innerHTML = calculate(4,5);


