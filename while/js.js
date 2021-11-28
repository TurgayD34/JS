let counter = 0, value = 5, result = 0;
while(counter < 20){
    result += counter * value;
    document.write(value * counter + "<br>");
    counter += 1;
}
console.log(result);