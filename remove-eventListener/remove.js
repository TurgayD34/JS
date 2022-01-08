let text = document.querySelector('#text');
text.addEventListener('mousemove', rastgele, false);

function rastgele(){
    document.querySelector('#result').innerText = Math.random();
};
let Btn = document.querySelector('#Btn');
    Btn.onclick = function(){
    text.removeEventListener('mousemove', rastgele);
}