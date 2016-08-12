var map;
var mapCenter = {lat: -34.397, lng: 150.644};
var tweets = [];
var locationCenter;

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: mapCenter,
	  zoom: 6
	});

	if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition(function(position) {
            locationCenter = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

			map.setCenter(locationCenter);

			console.log(locationCenter);
		}, function() {
			console.log("wtf bro");
		});
    } else {
        alert("You don't support this");
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	console.log("Couldn't do this!");
}
