var map;
var mapCenter = {lat: -34.397, lng: 150.644};
var tweets = [];
var locationCenter;

function initMap() {
	if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition(function(position) {
            mapCenter = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
		});
    } else {
        alert("You don't support this");
    }

	var map = new google.maps.Map(document.getElementById('map'), {
	  center: mapCenter,
	  zoom: 6
	});
}
