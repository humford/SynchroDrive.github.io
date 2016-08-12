var map;
var mapCenter = {lat: -34.397, lng: 150.644};
var tweets = [];
var myCircle;
var circleOrigin;
var circleRadius = 300;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  center: mapCenter,
	  zoom: 16
	});

	checkLocation();
};

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	console.log("Couldn't do this!");
};

function checkLocation() {
	if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition(function(position) {
            mapCenter = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

			map.setCenter(mapCenter);

			console.log(mapCenter);

			circleOrigin.setMap(null);
			myCircle.setMap(null);

			circleOrigin = new google.maps.Circle({
				strokeColor: '#00C0FF',
				strokeOpacity: 1,
				strokeWeight: 2,
				fillColor: '#00C0FF',
				fillOpacity: 1,
				map: map,
				center: mapCenter,
				radius: 10
			});

			myCircle = new google.maps.Circle({
            	strokeColor: '#00C0FF',
            	strokeOpacity: 0.8,
            	strokeWeight: 2,
            	fillColor: '#1CD100',
            	fillOpacity: 0.35,
            	map: map,
            	center: mapCenter,
            	radius: circleRadius
          	});
		}, function() {
			console.log("wtf bro");
		});
    } else {
        alert("You don't support this");
    }
};
