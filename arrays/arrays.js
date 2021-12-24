let langs = [
    "Php", 
    "Asp.Net", 
    "JSP", 
    "NodeJS", 
    "Javascript", 
    "Angular JS", 
    "React JS", 
    "Vue JS", 
    "HTML5", 
    "CSS3"];
let text, i;
text = "<ul>";
for(i = 0; i < langs.length; i++){
    text += "<li>" + langs[i] + "</li>";
}
text += "</ul>";
// document.getElementById('result').innerHTML = text;

function add(){
    langs.push("Bootstrap");
    // document.getElementById('result').innerHTML = langs;
}
// Burada const kullandim ama hata verdi, onun yerine let veya var kullanilmasi daha uygundur.

function Add(){
    langs[langs.length] = "MySQL";
    document.getElementById('result').innerHTML = langs;
}

//Eger kendi isArray fonksiyonunu olusturmak istersek
function isArray(isHave){
    return isHave.constructor.toString().indexOf("Array") > -1;
}
document.getElementById('result').innerHTML = isArray(langs);

// isHave bir parametredir onun yerine istedigimizi verebiliriz.