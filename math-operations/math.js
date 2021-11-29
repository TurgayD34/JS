// Addition
function add(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    result = n1 + n2;
    document.getElementById("BoxResult").innerHTML = "Result : " + result;
}

// Subtration
function sub(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    result = n1 - n2;
    document.getElementById("BoxResult").innerHTML = "Result : " + result;
}

// Multiplication
function multi(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    result = n1 * n2;
    document.getElementById("BoxResult").innerHTML = "Result : " + result;
}

// Division
function div(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    result = n1 / n2;
    document.getElementById("BoxResult").innerHTML = "Result : " + result;
}

// Remainder
function rem(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    result = n1 % n2;
    document.getElementById("BoxResult").innerHTML = "Result : " + result;
}