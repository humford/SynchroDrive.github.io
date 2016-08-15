var mapCenter;
var mapPolygon;

var map = new GMaps({
	el: '#map',
	lat: -12,
	lng: -77
});

function checkLocation() {
	GMaps.geolocate({
		success: function(position) {

			mapCenter = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			}

	    	map.setCenter(mapCenter);
		},
	  	error: function(error) {
	    	alert('Geolocation failed: '+error.message);
		},
	  	not_supported: function() {
			alert("Your browser does not support geolocation");
		},
		always: function() {
	    	alert("Done!");
		}
	});
};
