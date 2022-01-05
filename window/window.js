let w, h, result;
result = document.getElementById('result');
w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
result.innerHTML = "Tarayici genisligi = " + w + "<br>" + "Tarayici yuksekligi = " + h;

let resultt, newWindow;
resultt = document.getElementById('result2');


function openWindow(){
    newWindow = window.open("https://www.google.com/", "newWindow", "width=600, height=400");
    // 3 uncu parametre de size ayarlamamiza ragmen calismadi.
    // newWindow.document.write("This window open by JS...");
}
function closeWindow(){
    newWindow.close();
}
function moveToWindow(){
    newWindow.moveTo();
}
function resizeWindow(){
    newWindow.resizeTo(800, 400);
}

let resulttt;
resulttt = document.getElementById('result3');
resulttt.innerHTML = 
    "screen width : " + screen.width + "<br>" +
    "screen height : " + screen.height + "<br>" +
    "screen availWidht : " + screen.availWidth + "<br>" +
    "screen availHeight : " + screen.availHeight + "<br>" +
    "screen colorDepth : " + screen.colorDepth + "<br>" +
    "screen pixelDepth : " + screen.pixelDepth + "<br>";






    
