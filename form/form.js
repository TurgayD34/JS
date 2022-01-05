function printScreen(){
    let valueForm, result = "";
    result = document.getElementById('result');
    result.style.display = "block";
    valueForm = document.formBegin.username.value;
    result.innerHTML = valueForm;
}
    // valueForm = document.forms[0].pass.value;
    // valueForm = document.formBegin.username.value;
    // valueForm = document.formBegin.pass.name; // Burada ise id pass olan inputun name ni cekiyoruz.
    // valueForm = document.forms[0].elements[0].value;  // Elementlerin icerigine ulasmamizi saglar. index numarasi degiskendir.
    // valueForm = document.getElementById('username').value;
    // valueForm = document.forms["formBegin"]["pass"].value; -> Zaten bu cok fazla kullanilmiyor...
    
    // Burda farkli farkli yontemler vardir ve istediginizi kullanabilirsiniz.