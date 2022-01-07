// Birince Yol

// function squareRoot(){
//     let getNum, result;
//     getNum = prompt('Lutfen sayi giriniz:', "");
//     result = Math.sqrt(getNum);
//     document.querySelector('#result').innerHTML = result;
// }

// -----------------------------------------------------------
// Ikinci Yol

// let Btn = document.querySelector('#Btn');
// Btn.onclick = squareRoot;

// function squareRoot(){
//     let getNum, result;
//     getNum = prompt("Lutfen sayiyi girin:","");
//     result = Math.sqrt(getNum);
//     document.querySelector('#result').innerHTML = result;
// }

// -----------------------------------------------------------
// Ucuncu Yol

let Btn = document.querySelector('#Btn');
    Btn.onclick = function squareRoot(){
    let getNum, result;
    getNum = prompt("Lutfen sayiyi girin:","");
    result = Math.sqrt(getNum);
    document.querySelector('#result').innerHTML = result;
}

// Onclick her turlu HTML nesnesine uygulayabilirsiniz. Yukarida kiler sadece birer ornek.

let getDiv = document.querySelector('#getDiv');
    getDiv.onclick = function(){
        document.querySelector('#getDiv').innerHTML = "Degisti...";
    }
