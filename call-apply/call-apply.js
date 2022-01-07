let person = {
    firstName: "Okan Mirza",
    lastName: "Demir",
    age: 6,
    nationality: "Turkish",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
let people = {
    firstName: "Meral Beyza",
    lastName: "Demir"
}
let fname = person.fullName.call(people);
let fName = person.fullName.apply(people);

    document.getElementById('result').innerHTML = fname;
    document.getElementById('result2').innerHTML = fName;

    document.getElementById('result3').innerHTML = Math.max.apply(null,[2,3,5,6,7,8,89,]);
    document.getElementById('result4').innerHTML = Math.min.apply(null,[2,3,5,6,7,8,89,]);



