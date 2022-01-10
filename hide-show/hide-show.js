function hideShow(){
    let getElement = document.querySelector('#img');
    if(getElement.style.display == "none"){
        getElement.style.display = "block";
    }else{
        getElement.style.display = "none";
    }
}


let getElement = document.querySelector('#comment');
function hide(){
    getElement.style.display = "block";
}
function show(){
    getElement.style.display = "none";
}
