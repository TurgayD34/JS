function checkCookies(){
    let message = "";
    if(navigator.cookieEnabled == false){
        message = "Sitenin duzgun calismasi icin ayarlarinizi aktiflestirmeniz gerekmektedir...";
    }else{
        message = "Cookie aktif...";
    }
    alert(message);
}

// window.onload = function(){
//     let obj = document.querySelector('#result');
//     obj.style.color = "red";
//     obj.innerHTML = "javascript guzel bir dil...";
//     obj.style.fontSize = "32px";
// }