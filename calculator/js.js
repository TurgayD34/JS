// Genel degiskenleri olusturalim
var optStatus = false, opt = "", result= 0;
var btnNmb = document.querySelectorAll(".btnNmb");
var txtIndex = document.querySelector("#index");
var btnOpt = document.querySelectorAll(".btnOpt");
var process = document.querySelector("#process");
var btnC = document.querySelector(".btn-C");
var btnCE = document.querySelector(".btn-CE");
var btnEqual = document.querySelector(".btn-equal");
var btnDot = document.querySelector(".btn-dot");

btnNmb.forEach(function(element){
    element.onclick = function(e){
        if(txtIndex .textContent == "0" || optStatus)
        txtIndex.textContent = "";
        txtIndex.textContent += this.textContent;
        optStatus = false;
    }
});
btnOpt.forEach(function(element){
    element.onclick = function(e){
        optStatus = true;
        var newOpt = this.textContent;
        process.textContent = process.textContent + " " + txtIndex.textContent + " " + newOpt;

        switch(opt){
            case "+":txtIndex.textContent = (result + Number(txtIndex.textContent)); break;
            case "-":txtIndex.textContent = (result - Number(txtIndex.textContent)); break;
            case "*":txtIndex.textContent = (result * Number(txtIndex.textContent)); break;
            case "/":txtIndex.textContent = (result / Number(txtIndex.textContent)); break;
            default:break;
        }
        result = Number(txtIndex.textContent);
        opt = newOpt;

    }
});
btnC.onclick = function(e){
    txtIndex.textContent = "";
}
btnCE.onclick = function(e){
    txtIndex.textContent = "";
    process.textContent = "";
    result = 0;
    opt = "";
}
btnEqual.onclick = function(e){
    txtIndex.textContent = "";
    optStatus = true;
    switch(opt){
        case "+":txtIndex.textContent = (result + Number(txtIndex.textContent)); break;
        case "-":txtIndex.textContent = (result - Number(txtIndex.textContent)); break;
        case "*":txtIndex.textContent = (result * Number(txtIndex.textContent)); break;
        case "/":txtIndex.textContent = (result / Number(txtIndex.textContent)); break;
        default:break;
    }
    result = Number(txtIndex.textContent);
    txtIndex.textContent = result;
    result = 0;
    opt = "";
}
btnDot.onclick = function(e){
    if(!optStatus && !txtIndex.textContent.includes(".")){
        txtIndex.textContent += ".";
    }else if(optStatus){
        txtIndex.textContent = "0";
    }

    if(!txtIndex.textContent.includes(".")){
        txtIndex.textContent += ".";
    }
    optStatus = false;
}