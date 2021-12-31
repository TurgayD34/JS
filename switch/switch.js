function day(){
    let day;
    let d = new Date().getDate();
    switch(d){
        case 0: day = "Pazar"; break;
        case 1: day = "Pazartesi"; break;
        case 2: day = "Sali"; break;
        case 3: day = "Carsamba"; break;
        case 4: day = "Persembe"; break;
        case 5: day = "Cuma"; break;
        case 6: day = "Cumartesi"; break;
        default: day = "Boyle bir gun yok"
    }
    show('result', day);
}
function show(par1, par2){
    document.getElementById(par1).innerHTML = par2;
}
day();