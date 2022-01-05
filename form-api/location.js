const loc = document.getElementById('demo');
function goLocation(){
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(showPosition);
    }else{
        loc.innerHTML = "Location is not found...";
    }
}
function showPosition(){
    loc.innerHTML = "latitide:" + position.coords.latitude + "<br>Longitude:" + position.coords.longtide; 
}