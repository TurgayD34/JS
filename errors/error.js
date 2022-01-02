// try{
//     alerd("javascript");
// }catch(e){
//     document.getElementById('result').innerHTML = e.message;
// }

function errors(){
    var message, inputValue;
    inputValue = document.getElementById('data').value;
    message = document.getElementById('result');
    message.innerHTML = "";
    try{
        if(inputValue == "") throw "Bu alani bos birakamazsiniz.";
        if(isNaN(inputValue)) throw "Bu alana sadece sayi girmelisiniz.";
        inputValue = Number(inputValue);
        if(inputValue <= 5){
            throw "Girilen deger 5 den kucuk olamaz";
        }else if(inputValue >= 15){
            throw "Girilen deger 15 den buyuk olamaz.";
        }else{
            throw "Tebrikler";
        }
    }catch(err){
        message.innerHTML = err;
    }finally{
        document.getElementById('data').value = "";
    }
}