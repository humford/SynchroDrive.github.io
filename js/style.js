function geo_success(position) {
  console.log("Lat:", position.coords.latitude)
  console.log("Long:", position.coords.longitude)
}

function geo_error() {
  alert("Sorry, no position available.");
}

var geo_options = {
  enableHighAccuracy: true,
  maximumAge        : 30000,
  timeout           : 27000
};

var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);

