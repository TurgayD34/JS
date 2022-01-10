let elementNodes = document.querySelector('#DivParent').children;
let i, len = elementNodes.length, result = "";
for(i = 0; i < len; i++){
    // result += elementNodes[i].firstChild.nodeValue + "\n";
    // result += elementNodes[i].innerHTML + "\n";
    result += elementNodes[i].textContent + "\n";
}
alert(result);
// Butun elemanlarin kirmizi renge dondurme...
// Eger biz += kullanmadigimiz da ise sadece son degeri bize dondurur.