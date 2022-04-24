const API_KEY = "8cefc6f3c9f616bb27f196de2c33c2bd";


function getGeoSucess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
}

function getGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(getGeoSucess,getGeoError);