const numbers = [45, 109, 23, 12, 4, 43, 90];
    document.getElementById('result').innerHTML = numbers;
    // document.getElementById('result2').innerHTML = numbers.sort();
    
function Show(par1, par2){
    document.getElementById(par1).innerHTML = par2;
}
function sortingArray(){
    numbers.sort(function(x,y){
        return y - x;
    });
    Show('result2', numbers[0]);
};
function maxArray(take){
    // Diziler de max elemani bulma fonksiyonu
    return Math.max.apply(null, take);
};
function minArray(take){
    // Diziler de min elemani bulma fonksiyonu
    return Math.min.apply(null, take);
}
sortingArray();
Show('result3', maxArray(numbers));
Show('result4', minArray(numbers));

