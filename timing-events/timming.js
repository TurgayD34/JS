let result, times, result2;
result = document.getElementById('result');
result2 = document.getElementById('result2');

function process(){
    result.innerHTML = `setTimeout ile js kullanimi...`
}
function process2(){
    let d = new Date();
    result2.innerHTML = d.toLocaleString();
}
times = setInterval(process2, 1000);
// 1000 dedigimiz de her saniyede bir dongu saglar ama biz onu 3000 olursa 3 saniyede bir dongu olur.