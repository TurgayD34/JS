// function validationForm(){
//     let valueInput, resultTrue, resultFalse, message ="";
//     valueInput = document.getElementsByTagName('number');
//     resultTrue = document.getElementById('result-true');
//     resultFalse = document.getElementsByTagName('result-false');

//     if(!valueInput.checkValidity()){
//         // Burda hata veriyor sorulacak...
//         resultTrue.style.display = "none";
//         resultFalse.style.display = "block";
//         resultFalse.innerHTML = valueInput.validationMessage;
//     }else{
//         resultFalse.style.display = "none";
//         resultTrue.style.display = "block";
//         resultTrue.innerHTML = "Hic bir sorun gozukmuyor...";
//     }
// }

function myFunction(){
    const inpObj = document.getElementById('demo');
    if(inpObj = document.checkValidity()){
        document.getElementById('num').innerHTML = inpObj.validationMessage;
    }
}