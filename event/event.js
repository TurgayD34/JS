// onchange	=> Bir HTML öğesi değiştirildi
// onclick	=> Kullanıcı bir HTML öğesini tıklatır
// onmouseover	=> Kullanıcı, fareyi bir HTML öğesinin üzerine getirir
// onmouseout	=> Kullanıcı, fareyi bir HTML öğesinden uzaklaştırır
// onkeydown	=> Kullanıcı bir klavye tuşuna basar
// onload	=> Tarayıcı sayfayı yüklemeyi tamamladı

// Javascript HTML sayfalarinda kullanildiginda, js bu etkinliler uzerinden islemlerini yapar.
// Bir HTML event tarayicinin yaptigi veya bir kullanicinin yaptigi birsey olabilir.

function message(){
    alert("Message is Loading...");
    document.getElementById('result').innerHTML = "Message is Loading...";
}
// Onload komutu ile site acilir acilmaz istedigimiz kod otomatikmen calismaya baslar.
// Onchange komutu ise birseyler degistirdigimiz de kullanilan bir komuttur.

function mouseDown(){
    document.getElementById('result2').style.color = "red";
}
function mouseUp(){
    document.getElementById('result2').style.color = "blue";
}
function mouseMove(e){
    let x = e.clientX;
    let y = e.clientY;
    document.getElementById('result').innerHTML = `Kordinatlar x:${x} y:${y}`;
}

