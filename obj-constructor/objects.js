// let person = {
//     firstname: "Turgay",
//     lastname: "Demir",
//     age: 36,
//     nationality: "Turkish",
//     fullname: function(){
//         return this.firstname + " " + this.lastname;
//     }
// }
// document.getElementById('result').innerHTML = person.fullname();

// let person = new Object();
// person.firstname = "Turgay";
// person.lastname = "Demir";
// person.age = 36;
// person.fullname = person.firstname + " " + person.lastname;

// document.getElementById('result').innerHTML = person.fullname;
// Tabiki bu tercih edilen bir durum degildir.

// Constructor ___ ONEMLI
// Bizler yuslerce nesne birden olusturacagiz ondan dolayi constructor kullanmak daha uygundur...

function person(fname, lname, age, nationality){
    this.firstname = fname;
    this.lastname = lname;
    this.age = age;
    this.nationality = nationality;
    this.fullname = function(){
        return this.firstname + " " + this.lastname;
    }
    this.changeName = function(name){
        return this.firstname = name;
    }
}
let message = "", x, y, message2 = "";
var people = new person("Turgay", "Demir", 36, "Turkish");
// document.getElementById('result').innerHTML = 
// people.firstname + " " + 
// people.lastname + " " + 
// people.age + " " + 
// people.nationality ;
people.hair = true;  // Bu sekilde de nesne ekleyebiliriz.
// for(x in people){
//     message += people[x] + "<br>";
// }
// delete people.nationality;  // Burda listemiz icinde bir nesneyi silmemize yardimci olur.
// for(y in people){
//     message2 += people[y] + "<br>";
// }
// document.getElementById('result').innerHTML = message + "<br>" + message2;

people.changeName("Omur");
document.getElementById('result').innerHTML = people.firstname;

