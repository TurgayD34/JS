const date = new Date();
const date2 = new Date("Aug 08, 2015")
const date3 = new Date();
const date4 = new Date();
// document.getElementById('result').innerHTML = date;
document.getElementById('result2').innerHTML = date2.toString();
document.getElementById('result3').innerHTML = date3.toDateString();

const days = ["Pazar", "Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi"];
document.getElementById('result4').innerHTML = days[date.getDay()];

date.setDate("23");
date.setHours("13");
date.setMinutes("54");
document.getElementById('result').innerHTML = date;

