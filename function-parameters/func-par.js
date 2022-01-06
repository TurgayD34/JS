function showMax(){
    let i, Max = -Infinity;
    for(i = 0; i < arguments.length; i++){
        if(arguments[i] > Max){
            Max = arguments[i];
        }
        return Max;
    }
}
function print(x){
    document.getElementById('result').innerHTML = x;
}
// print(showMax(4,6,10,2,5,9));

function showMin(){
    let j, Min = Infinity;
    for(j = 0; j < arguments.length; j++){
        if(arguments[j] < Min){
            Min = arguments[j];
        }
        return Min;
    }
}
print(showMin(4,5,10, 34, 3,60));
// Min degeri calismadi SORULACAK