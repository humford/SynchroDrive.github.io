var map;
var mapCenter = {lat: -34.397, lng: 150.644};
var tweets = [];
var locationCenter;

function initMap() {
	if (navigator.geolocation) {

		var map = new google.maps.Map(document.getElementById('map'), {
		  center: mapCenter,
		  zoom: 6
		});

		navigator.geolocation.getCurrentPosition(function(position) {
            locationCenter = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
		});

		map.setCenter(locationCenter);

		console.log(locationCenter)
    } else {
        alert("You don't support this");
    }
}
