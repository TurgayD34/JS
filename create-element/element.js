let parentDiv = document.querySelector('#DivParent');
let p3 = document.querySelector('#p3'); // Burda nereye ekleyecegimizi specifik olarak yerini belirlememiz icin.
let p1 = document.querySelector('#p1');

function createElementDOM(){
    let p = document.createElement("p");

    let text = document.createTextNode("Javascript");
    p.appendChild(text);
    // parentDiv.appendChild(p);  // Text degerimizi p ye ekle yani en sona, 
    parentDiv.insertBefore(p, p3);  // text degerimizi p3 den once ekle, sadece nereye eklememz gereken yeri belirtmemiz yeterli
}
// Biz bu sekidle #DivParent icine yani p4 altinda yeni bir tane p elementi oluturmus olduk...
function removeElementDOM(){
    // Eger birseyler kaldirmak istiyorsak kaldiricagimiz ogenin parent ini bilmemiz gerekiyor...
    // parentDiv.removeChild(p3);
    parentDiv.parentNode.removeChild(p3);  // Buda kurnazlik yonu tabiki ebevyn bulmadan direk silme de yardimci olur.
}
function replaceElementDOM(){
    let p = document.createElement("p");
    let text = document.createTextNode("C++");
    p.appendChild(text);
    // Buraya kadar createElement de ki islemler yapilir daha sonra replace islemleri gercejlestirilir.
    parentDiv.replaceChild(p, p1);
}

// remove funtion does not work...