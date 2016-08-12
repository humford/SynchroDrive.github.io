var map;
var mapCenter = {lat: -34.397, lng: 150.644};
var tweets = [];
var locationCenter;
var myCircle;

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
	  center: mapCenter,
	  zoom: 6
	});

	checkLocation();
};

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	console.log("Couldn't do this!");
};

function checkLocation() {
	if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition(function(position) {
            locationCenter = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

			map.panTo(locationCenter);

			console.log(locationCenter);

			myCircle = new google.maps.Circle({
            	strokeColor: '#FF0000',
            	strokeOpacity: 0.8,
            	strokeWeight: 2,
            	fillColor: '#FF0000',
            	fillOpacity: 0.35,
            	map: map,
            	center: locationCenter,
            	radius: 10
          	});
		}, function() {
			console.log("wtf bro");
		});
    } else {
        alert("You don't support this");
    }
};
