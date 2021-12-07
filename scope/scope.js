// Fonksiyon faliyet alani
// 1. Local faliyet alani
// 2. Global faliyet alani

function scope(){
    let name = "Node JS";
}
document.getElementById('result').innerHTML = name;
// Bir fonksiyon aklani icinde tanimlanan degiskenlere, fonksiyonun disinda erisilemez. Bu bize bir hata vermez ama ulasilmasi mumkun degildir.

let Scope = "React JS";

// Function disinda verilen degerler Global olur ve buna istedimiz yerden ulasabilinir. Ama tabiki uygun degildir cunku bizim ulasabilidgimiz
// global verilere kotu niyetli kullanicilar da ulasir ve siteye zarar verebilirler. Yani mecbur kalmadikca Global degiskenler olusturmayin.

function scope2(){
    name2 = "Java";
}
document.getElementById('result').innerHTML = name2;
// Eger burda bilidirim yapmasak ve name ismi ile iliskilendirildiginde bu local degisken olmaz global degisken olur.

// Local degiskenler omru bildirildiginde baslar ve omru bittginde silinir. O yuzden Local degiskenler Global degiskenlerden daha kullanislidir.