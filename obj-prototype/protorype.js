let people;
function Person(fname, lname, age, nationality){
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
Person.prototype.hairColor = "Brown";
Person.prototype.changeLastname = function(name){
    return this.lastname = name;
}
people = new Person("Turgay", "Demir", 36, "Turkish");
document.getElementById('result').innerHTML = people.firstname;