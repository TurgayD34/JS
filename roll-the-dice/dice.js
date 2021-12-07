// Burada math random kullanacagiz.
// Ama bir durum var ki o da sudur random bize her zaman 0 ile 1 arasinda deger verir. Bu sebepden dolayi floor methodunu 
// kullandik. Floor degeri float number dan integer degere cevirir. Ve bu sayede degerimiz decimal deger olmaz.

let dice1 = Math.random();
let dice2 = Math.random();

if(dice1 < 1){
    dice1 = (dice1 + 1) * 6;
    dice2 = (dice2 + 1) * 6;
    // Burda yapilan sey ise zarimizin 0 degeri vermemisini saglamak olmustur.

    dice1 = Math.floor(dice1);
    dice2 = Math.floor(dice2);

    if(dice1 > 6){
        dice1 %= 6;
    }
    if(dice2 > 6){
        dice2 %= 6;
    }
}
console.log(dice1);
console.log(dice2);