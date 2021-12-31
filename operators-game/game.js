let num1, num2, operator, result, answer, True = 0, False = 0;
num1 = document.getElementById('Number1');
num2 = document.getElementById('Number2');
operator = document.getElementById('operator');
result = document.getElementById('result');
answer = document.getElementById('answer');
True = document.getElementById('True');
False = document.getElementById('False');

// Random sayi uretme fonksiyonu
function randomNum(min, max){
    var number = Math.floor(Math.random() * (max-min)) + min;
    return number;
}
// Oyun baslangicinda veya soru tahmini sonrasi yeni soru olusturma fonksiyonu
function newQuestion(){
    var operation = ["+", "-", "*", "/"];
    operator.textContent = operation[randomNum(0,4)]; // Opeator secimi
    num1.textContent = randomNum(0, 50);
    num2.textContent = randomNum(0, 50);
    // Kalansiz bolme islemi yapacak kosul
    if(operator.textContent == "/"){
        while(true){
            num2.textContent = randomNum(0, 50);
            if(num1.textContent % num2.textContent == 0){
                break;
            }
        }
    }
}
// Sayfa yuklendiginde yeni soru soran fonksiyon calsitir.
window.onload = function(){
    newQuestion();
}
// Sonuc gostesgesi esitleme
answer.onclick = function(){
    var ans, n1, n2;
    n1 = Number(num1.textContent);
    n2 = Number(num2.textContent);
    switch(operator.textContent){
        case "+" : ans = n1 + n2; break;
        case "-" : ans = n1 - n2; break;
        case "*" : ans = n1 * n2; break;
        case "/" : ans = n1 / n2; break;
        default: break;
    }
    if(result.value == ans){
        True.textContent = Number(True.textContent) + 1;
    }else{
        False.textContent = Number(False.textContent) + 1;
    }
    newQuestion();
}

