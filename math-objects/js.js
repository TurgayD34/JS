function show(){
    document.getElementById('result').innerHTML = `Math PI: ` + Math.PI;
    const x = Math.round(6.7);
    const y = Math.round(6.3);
    document.getElementById('result2').innerHTML = 
    `Math Round  6.7: ${x} <br> Math Round 6.3: ${y}`;
    document.getElementById('result3').innerHTML = `Math Max: ` + Math.max(120, 200, -199, - 50, -3, 3) + "<br>" + 
    `Math Min: ` + Math.min(120, 200, -199, - 50, -3, 3);
}
show();

function random(){
    document.getElementById('result4').innerHTML = `Math Random: ` + Math.random();
    document.getElementById('result5').innerHTML = `Math Random (0-9):` + Math.floor(Math.random() * 10);
}
random();

function show2(){
    document.getElementById('result6').innerHTML = 
    "Math.E: " + Math.E + "<br>" +
    "Math.PI: " + Math.PI + "<br>" +
    "Math.SQRT2: " + Math.SQRT2 + "<br>" +
    "Math.SQRT1_2 :" + Math.SQRT1_2 + "<br>" +
    "Math.LN2: " + Math.LN2 + "<br>" +
    "Math.LN10: " + Math.LN10 + "<br>" +
    "Math.LOG2E: " + Math.LOG2E + "<br>" +
    "Math.LOG10E: " + Math.LOG10E + "<br>";
}
show2();
getShow3();
function getRandom(min, max){
    return Math.floor(Math.random() * max) + min;  
}
function getShow3(){
    document.getElementById('result7').innerHTML = "Get Random: " + getRandom(1, 100);
}


