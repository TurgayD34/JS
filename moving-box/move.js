function moveBox(){
    let changeCss, position = 0, speed;
    changeCss = document.querySelector('#move');
    speed = setInterval(repeat, 5); // setInterval sonsuz dongu olmasini saglar.
    function repeat(){
        if(position == 550){
            clearInterval(speed);
        }else{
            position++;
            changeCss.style.top = position + "px";
            changeCss.style.left = position + "px";
        }
    }
}