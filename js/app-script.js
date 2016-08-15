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

			createCircle();
		},
	  	error: function(error) {
			mapCenter = {
				lat: -12,
				lng: -77
			}

	    	map.setCenter(mapCenter);

			createCircle();
		},
	  	not_supported: function() {
			mapCenter = {
				lat: -12,
				lng: -77
			}

	    	map.setCenter(mapCenter);

			createCircle();
		}
	});
};

function createCircle() {
	mapPolygon = map.drawCircle({
		lat: mapCenter.lat,
		lng: mapCenter.lng,
		fillOpacity: 1,
		radius: 500
	});
};
