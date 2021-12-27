function show(par1, par2){
    document.getElementById(par1).innerHTML = par2;
};
const x = true, y = false;
function verify(){
    show('result', x);
    show('result2', y);
};
