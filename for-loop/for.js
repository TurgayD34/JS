function show(){
    let i, text = "";

    for(i = 0; i <= 20; i++){
        text += i + "<br>";
        // document.getElementById('result').innerHTML = text;
    }
}
show();
function list(){
    let langs = [
        "Php", 
        "Asp.Net", 
        "JSP", 
        "NodeJS", 
        "Javascript", 
        "Angular JS", 
        "React JS", 
        "Vue JS", 
        "HTML5", 
        "CSS3"];
        let txt = "";
        for(let j = 0; j < langs.length; j++){
            txt += langs[j] + "<br>";
            document.getElementById('result2').innerHTML = txt;
        }
}
list();

function faktoriyel(){
    let take, i, faktor = 1;
    take = Number(document.getElementById('takeNumber').value);
    for(i = 1; i <= take; i++){
        faktor *= i;
    }
    goster('result3', faktor);
}
// faktoriyel();

function nesneler(){
    let message;
    let pc = {name: "Macbook pro", inc: 14, year: 2021, color: "Dark gray"};

    for(x in pc){
        message += pc[x] + " -- ";
    }
    goster('result4', message);
}
function goster(par1, par2){
    document.getElementById(par1).innerHTML = par2;
}
nesneler();