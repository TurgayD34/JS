// Methodlar, nesneler uzerinde gerceklestirilebilecek eylemlerdir.
// Motodlar, fonksiyon tanimlari olarak ozelliklerde saklanir.
let car = {
    name: "Nisan",
    model: "400A",
    color: "Blue",
    start: function(){
        return `${this.name} ${this.model} calistirildi`
    },
    drive: function(){
        return `${this.start()} ve suruluyor.`
    }
};
let phone = {
    name: "Apple",
    model: "Iphone x",
    year: 2021,
    buy: function(){
        return this.name + " sirketi " + this.model + " modelinde ki " + this.year + " yilinda satisa sunmustur.";
    }
};
// document.getElementById('result').innerHTML = phone.buy();
document.getElementById('result').innerHTML = car.drive() + "<br>" + phone.buy();

// Bir nesne tanimi birden cok satira yayilabilir. Kodun okunurlugunu artirir. Aslinda yazilsa daha iyi olur.
// Nesnelere iki sekilde cagirabiliriz. ObjectName.methodName();
// 1. phone.buy();
// 2. phone["buy()"];
// Ama tabiki tercih edilen ilk olandir cunku kullanilmasi daha kolay ve daha anlasilir oldugundan dolayi.

let x = new String();
let y = new Number();
let z = new Boolean();
// Strings, Numbers, Booleans nesneler olarak beyan etmeyin. Bunu bu sekilde kullanmak kodlari karmasik hale getirir. 
// Ve bu sebepler den tavsiye edilmez. Uygulama hizini yavaslatir.