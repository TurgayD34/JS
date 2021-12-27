const x = 7;
function verify(){
    return show('result', x === "7");
}
function show(par1, par2){
    document.getElementById(par1).innerHTML = par2;
};
verify();

const note = 59, message = "", result;

function verify2(){
    result = note>60 ? Passec : Failed;
}