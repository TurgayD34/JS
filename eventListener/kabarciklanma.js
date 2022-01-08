let p1, p2, div1, div2;

p1 = document.querySelector('#p1');
p2 = document.querySelector('#p2');
div1 = document.querySelector('#div1');
div2 = document.querySelector('#div2');

p1.addEventListener("click", function(){
    alert(`P1 paragrafi tikladin...`);
},false);

div1.addEventListener("click", function(){
    alert(`div1 elementine tikladin...`);
},false);
p2.addEventListener("click", function(){
    alert(`P2 paragrafi tikladin...`);
},true);

div2.addEventListener("click", function(){
    alert(`div2 elementine tikladin...`);
},true);

// p1 ve div1 baglanti yonu false oldugundan iceriden disariya kabarciklanma olayi gerceklesir.
// Yani kod okuma duzeni iceriden disa dogru okunur. Once p1 sonra div1.

// true oldugunda ise once div2 sonra da p2 okunur.

// Ve burda 3 tane parametre alir. 