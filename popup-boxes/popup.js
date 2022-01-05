let sonuc;
sonuc = document.getElementById('result');

function boxes(){
    let message;
    if(confirm("Silmek isteginize emin misiniz?") == true){
        message = "Secilen oge silindi...";
    }else{
        message = "Ogeyi silmekten vazgectiniz...";
    }
    sonuc.innerHTML = message;
}
let result;
result = document.getElementById('result2');

function boxes2(){
    let mesage, getValue;
    getValue = prompt("Lutfen dersin adini giriniz?");
    if(getValue == null || getValue == ""){
        mesage = `Bu alani bos birakamazsiniz...`;
    }else if(getValue == "Javascript"){
        mesage = `Dersin adini ${getValue} olarak girdiniz ve dogru bildiniz...`;
    }else{
        mesage = `Bu dersin neresinde ${getValue} yazilim dilini gordunuz. Lutfen dersi tekrar dinleyin...`;
    }
    result.innerHTML = mesage;
}