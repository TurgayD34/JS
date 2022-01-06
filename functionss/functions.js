function show(x){
    document.getElementById('result').innerHTML = x;
}
// show('result', process(6,9,5));

function multi(x,y){
    return x * y;
}
function process(x,y,z){
    return multi(x,y)+z;
}
function multiplication(x,y){
    return arguments.length;
}
function sumAll(){
    let sum = 0, i;
    for(i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
show(sumAll(3,4,5,6));

// Asagida ki function kendi kendini cagiriyor, disarda bir yerde kendisini cagirmadigimiz halde...
(function(){
    alert("Kendi kendimi cagirdim...")
})();
