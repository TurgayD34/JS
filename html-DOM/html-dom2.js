function getDOM(){
    let findElement, i, message = "", result;
    findElement = document.forms["frmDom"];
    for(i = 0; i < findElement.length; i++){
        message += findElement[i].value;
    }
    result = document.querySelector('#result');
    result.innerHTML = message;
}
// alert(document.anchors[3].innerHTML);    // Anchors <a></a>
// alert(document.body.innerHTML);     // body

// Bu sekilde nesnelere ulasmamiza yardimci olur. Bunun listesini de note bolumunde bulabilirsiniz.

function changeCSS(){
    let chngCss = document.querySelector('#changeCss');
    chngCss.style.color = "white";
    chngCss.style.backgroundColor = "green";
    chngCss.style.padding = "16px";
}