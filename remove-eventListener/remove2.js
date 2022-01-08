let Btn = document.querySelector('#Btn');
if(Btn.addEventListener){
    Btn.addEventListener("click", mClick, false);
}else if(Btn.attachListener){
    Btn.attachListener("onclick", mClick);
}
function mClick(){
    alert(`Javascript`);
}