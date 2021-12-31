function break_continue(){
    let takeValue = document.getElementById('take').value;
    let message = "";
    switch(takeValue){
        case "JS": message = `Tebrikler JS girdiniz...`; break;
        case "Java": message = `Tebrikler Java girdiniz...`; break;
        default : message = `Girdginiz yazinin hicbir anlami yoktur...`;
    }
    document.getElementById('result').innerHTML = message;
}
break_continue();

let txt = "";
for(i = 0; i <= 20; i++){
    if(i == 12){
        continue;
    }
    txt += "Sayi: " + i + "<br>";
}
document.getElementById('result2').innerHTML = txt;