function mOver(obj){
    let x;
    x = document.querySelector('#note');
    x.innerHTML = "Nerdesin Dunya";
}
function mOut(obj){
    let y;
    y = document.querySelector('#note');
    y.innerHTML = "Merhaba Dunya";
}
// Bu sekilde hersey yapilabilinir...
function test(obj){
    obj.style.backgroundColor = "grey";
    obj.style.padding = "12px";
    obj.style.color = "white";
    obj.style.width = "300px";
}