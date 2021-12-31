function scoreResult(){
    let midTermScore, finalScore, message, avarage;
    midTermScore = Number(document.getElementById('midTerm').value);
    finalScore = Number(document.getElementById('finalScore').value);
    avarage = midTermScore * 0.3 + finalScore * 0.7;

    if(isNaN(midTermScore)){
        message = "Vize notunu sayisal olarak giriniz."
    }else if(isNaN(finalScore)){
        message = "Final notunu sayisal olarak giriniz."
    }else{
        message = (avarage >= 60) ? "Dersi gectiniz" : "Dersten kaldiniz";
        // if else methodunun kisatilmis hali.
    }
    document.getElementById('result').innerHTML = message;
}