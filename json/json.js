const myJSON = '{"name":"John", "age":30, "car":null}';
const myObj = JSON.parse(myJSON);

document.getElementById('result').innerHTML = myObj.name + " " + myObj.age + " " + myObj.car;

const myJSON2 = '{"langs": [{"firstName":"Node", "lastName":"JS"},{"firstName":"React", "lastName":"JS"},' + 
'{"firstName":"Vue", "lastName":"JS"}]}';
const myObj2 = JSON.parse(myJSON2);

document.getElementById('result2').innerHTML = myObj2.langs[0].firstName + " " + myObj2.langs[0].lastName + "<br>" +
myObj2.langs[1].firstName + " " + myObj2.langs[1].lastName + "<br>" + myObj2.langs[2].firstName + " " + myObj2.langs[2].lastName;

let data = {
    kisiler:[   {name: "Turgay", surname: "Demir", age: 36},
                {name: "Omur", surname: "Demir", age: 34},
                {name: "Okan Mirza", surname: "Demir", age: 6},
                {name: "Meral Beyza", surname: "Demir", age: 2}
            ],
    islemler:"get"
        }
// console.log(data.kisiler[0].name);
// console.log(typeof data);
var kayit = JSON.parse;
console.log(kayit);