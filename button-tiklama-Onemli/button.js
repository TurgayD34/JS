// Sayfa yukendigi anda
window.onload = function(){
    var getElement = document.createElement("script");
        getElement.type = "text/javascript";
        getElement.src = "js/message.js";
        document.body.appendChild(getElement);
}
// Buttona tiklandiginda
var getJS = document.getElementById('externalJS');
    getJS.onclick = function(){
        var scriptCreate = document.createElement("script");
            scriptCreate.scr = "js/message.js";
            scriptCreate.type = "text/javascript";
            document.body.appendChild(scriptCreate);
            // document.getElementsByTagName("head")[0].appendChild(scriptCreate);
    }
// Inspect ten incelenebilir. Su an yaptiklarimizi script dosyasi olarak atama yapmistir.


