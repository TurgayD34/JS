// let Btn = document.querySelector('#Btn');
// let result = document.querySelector('#result');
//     // Btn.addEventListener("click",showDate);
//     // function showDate(){
//     //     document.querySelector('#result').innerHTML = "<span>" + Date() + "</span>";
//     // }
//     // Btn.addEventListener("click", function(){
//     //     document.querySelector('#result').innerHTML = "<span>Funtion ile kullanimi...</span>"
//     // });

//     // Btn.addEventListener("click", mClick);
//     // Btn.addEventListener("click", mOtherClick);
//     // function mClick(){
//     //     alert("Bu ilk click olayi...");
//     // }
//     // function mOtherClick(){
//     //     alert("Bu ikinci click olayi...");
//     // }
//     window.addEventListener("resize", function(){
//         document.querySelector('#result').innerHTML = Math.random(); 
//     });

let num1 = 7, num2 = 19;
let Btn = document.querySelector('#Btn');
let result = document.querySelector('#result');
Btn.addEventListener("click", function(){
    process(num1, num2);
});
function process(p1, p2){
    document.querySelector('#result').innerText = p1 * p2;
} 

// let Btn = document.querySelector('#Btn');
// let result = document.querySelector('#result');

// window.addEventListener("resize", function(){
//     document.querySelector('#result').innerHTML = Math.random();
// });