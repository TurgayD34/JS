let numbers = [13, 12, 11,10], txt = "";
numbers.forEach(myFunction);

function myFunction(value){
    txt += value + "<br>";
}
document.write(txt + "<br>");
document.write(numbers);

// forEach methodu ile butun degerler tek tek cagirlir. 