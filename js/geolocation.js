// JavaScript source code
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCurrentPosition_successCB, getCurrentPosition_errorCB);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function getCurrentPosition_successCB(successCB) {
    latlng = "getCurrentPosition_successCB: " + "Latitude: " + successCB.coords.latitude + "<br>Longitude: " + successCB.coords.longitude;
    console.log(latlng);
}

function getCurrentPosition_errorCB(errorCB) {
    errorMsg = "getCurrentPosition_successCB: " + errorCB;
    console.log(errorMsg);
}