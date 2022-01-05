function validateForm(){
    let valueInput, result, message = "";
    result = document.getElementById('result2');
    result.style.display = "block";
    valueInput = document.frmBegin.userName.value;

    if(valueInput == ""){
        message = `Kullanici adi bos birakilamaz...`;
    }else if(isNaN(valueInput)){
        message = `Lutfen bu alana sayi giriniz...`;
    }else if(valueInput < 1 || valueInput > 10){
        message = `Lutfen bu alana 1 ile 10 arasinda bir sayi giriniz...`;
    }else{
        message = "Tebrikler...";
    }
    result.innerHTML = message;
}