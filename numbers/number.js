// Javascript in tek bir sayi turu vardir. Sayilar ondalikli veya ondaliksiz yazilabilinir.
// Bircok programlama dilinde long, float vb sayi turleri vardir ama js de bunlar sadece sayi olarak gecer.
// Tam sayilar 15 haneye kadar yazdirilir.
// Javacripte ondalikli sayilarin toplamlari 100% dogru degildir. Ornegin 0.1 + 0.2 = 0.3 olmasi lazim ken 0.3000000000000004
// gibi bir deger ile karsi karsiya kalabiliriz. Tabiki de bunun bir onlemi olamsi lazim 

function printScreen(){
    let x = 7;  // Number
    let y = 3.14; // Number
    let a = 5e3; // 5 * 10^3 = 5000
    let b = 5e-3 // 5 * 10^-3 = 0.005
    let c = 0.1;
    let d = 0.2;
    let e = ((c * 10) + (d * 10)) / 10; // Tabiki bunun gibi yazmak lazim.
    let f = "Result = " + x + y; 
    // Burda ise sonucu 10.14 beklerke bize cevap su olacak sonuc=73.14 cunku sitring ile number toplaninca js onlari string algilar 
    // ve o sekilde toplar. Bu sebepden istegimiz degeri ulasamayiz.
    console.log(x);
    console.log(y);
    console.log(a);
    console.log(b);
    console.log(e);
    console.log(f);

}
// printScreen();
// *******************************************************************

// isNaN kullanimi
function  printScreen2(){
    let num = document.getElementById('number').value;
    if(isNaN(num)){ // Burda sayi degerlendirmesi yapiyoruz. isNaN anlami is Not a Number?
        document.getElementById('result').innerHTML = "Lutfen bir sayi giriniz."
    }else{
        document.getElementById('result').innerHTML = "Girginiz deger : " + num;
    }
}
function printScreen3(){
    let x = 128;
    a = x.toString(16);  // Hexadecimal 16
    b = x.toString(8);  // Octal 8
    c = x.toString(2);  // Binary 2
    document.getElementById('result2').innerHTML = 
    `Onluk sitem: ${x} <br>
    Hexadecimal ${a} <br>
    Octal sistem ${b} <br>
    Binary sistemi ${c}`;
}
printScreen3();

// Sayilar nesne olabilir
function printScreen4(){
    let x, y;
    x = 700;  // Bu bir sayidir
    y = new Number(700);  // Ama bu ise bir nesnedir.
    console.log(typeof x);
    console.log(typeof y);
    // Uste belirttigimiz gibi x bir sayidir ve y ise nesnedir.
}
printScreen4();
// *******************************************************************
// JS Number Methods
// toString() => Bu method ile sayiyi string e cevirir.
function ToString(){
    let x = 123;
    console.log(x);  // Number
    console.log(x.toString());  // String
    console.log((123).toString());  // String
    console.log((100 + 23).toString());  // String
}
ToString();

// toExponensial() => Ondalik sayilarda noktadan sonraki decimal degerleri tanimlar yani kac basamak olacagini belitir.
// ve son deger 1-4 arasinda ise asagi yuvarlar. 5-9 arasinda ise yukari yuvarlar.
function ToExponensial(){
    let x = 9.656;
    console.log(x.toExponential(2)); // Iki basamak atar 9.66e+0 olur
    console.log(x.toExponential(4)); // Dort basamak atar 9.6560e+0 olur 
    console.log(x.toExponential(6)); // Alti basamak atar 9.656000e+0 olur
}
ToExponensial();

// toFixed => Verilen degerin basamagini 1-4 arasinda ise asagi yuvarlar. 5-9 arasinda ise yukari yuvarlar ve kac basamakli oldugunu belirler.
// Aslinda bu method toExponensial ile ayni gibi ama matematiksel islemlerde bu daha fazla kullanilir.
// toFixed(2) parayla calismak icin idealdir. Yani 12.32 tl, 15.99 kr gibi
function ToFixed(){
    let x = 9.656;
    console.log(x.toFixed(2)); // Iki basamak atar 9.66 olur
    console.log(x.toFixed(4)); // Dort basamak atar 9.6560 olur 
    console.log(x.toFixed(6)); // Alti basamak atar 9.656000 olur
}
ToFixed();

// valueOf() => Object olarak dondurulen sayiyi Number olarak dodurebilir.
// Butun js ler data degeri olarak valueOf() ve toString() methodu kullanir.
function ValueOf(){
    let x;
    x = new Number(7);  
    console.log(typeof x);  // Object
    console.log(typeof x.valueOf());  // Number
}
ValueOf();

// Number() => String olan sayi degerlerini Number a cevirir.
function numbers(){
    document.getElementById('result3').innerHTML =  
    Number(true) + "<br>" +
    Number(false) + "<br>" +
    Number(new Date()) + "<br>" +
    Number("7") + "<br>" +
    Number("70 ") + "<br>" +
    Number(" 50 ") + "<br>" +
    Number("7 60") + "<br>" +
    Number("JS");
}
numbers();

// parseInt() => Butun degerleri integer a cevirir. Ama soyle bir durum varki stringle baslayanlari cevirmez.
function ParseInt(){
    document.getElementById('result4').innerHTML =  
    parseInt("7") + "<br>" +
    parseInt("70 ") + "<br>" +
    parseInt(" 50 ") + "<br>" +
    parseInt("7 60") + "<br>" +
    parseInt("3.14") + "<br>" +
    parseInt("7 days") + "<br>" +
    parseInt("days 7") + "<br>" +
    parseInt("JS");
}
ParseInt();

// parseFloat() =>
function ParseFloat(){
    document.getElementById('result5').innerHTML =  
    parseFloat("7") + "<br>" +
    parseFloat("70 ") + "<br>" +
    parseFloat(" 50 ") + "<br>" +
    parseFloat("7 60") + "<br>" +
    parseFloat("3.14") + "<br>" +
    parseFloat("7 days") + "<br>" +
    parseFloat("days 7") + "<br>" +
    parseFloat("JS");
}
ParseFloat();

// *******************************************************************
// Number Properties
// MAX-VALUE => Js te mumkun olan en buyuk sayiyi dondurur.
// MIN-VALUE => Js te mumkun olan en kucuk sayiyi dondurur.
// NEGATIVE-INFINITIY => Negative sonsuzlugu geri dondurur.
// NaN => Not a Number degerini dondurur.
// POSITIVE-INFINITY => Posotive sonsuzlugu geri dondurur.