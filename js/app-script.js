var mapCenter = [];

var map = new GMaps({
	el: '#map',
	lat: -12,
	lng: -77
});

function checkLocation(){
	GMaps.geolocate({
	  success: function(position) {

	    map.setCenter(position.coords.latitude, position.coords.longitude);

		mapCenter = [position.coords.latitude, position.coords.longtitude];

		var cityCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: mapCenter,
            radius: Math.sqrt(citymap[city].population) * 100
          });
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
