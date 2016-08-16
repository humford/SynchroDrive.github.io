var mapCenter
var polygonThere = false;
var mapPolygon;

var markerGroup = {};

var config = {
	'apiKey': "AIzaSyCK1lD1GXri_mI-1KeNk2-1cMcxZxKTKkU",
  	'authDomain': "tweetsweep-d70a2.firebaseapp.com",
	'databaseURL': 'https://tweetsweep-d70a2.firebaseio.com',
	'storageBucket': "tweetsweep-d70a2.appspot.com",
};

firebase.initializeApp(config);

var database = firebase.database().ref();

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

	if (polygonThere){
		map.removePolygon(mapPolygon);
	};

	mapPolygon = map.drawCircle({
		lat: mapCenter.lat,
		lng: mapCenter.lng,
		editable: true,
		draggable: true,
		radius: 200,
		strokeColor: '#00C0FF',
		fillColor: '#A3FF9F',
		fillOpacity: 0.5,
	});

	google.maps.event.addListener(mapPolygon, 'center_changed', checkDatabase());

	polygonThere = true;

	checkDatabase();
};

function distance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }
	return dist
};

function checkDatabase() {
	database.on('value', function(snapshot) {
	  var dataSnap = snapshot.val();
	  var arr = Object.keys(dataSnap).map(function(k) { return dataSnap[k] });
	  console.log(arr);

	  for (var i = 0; i < arr.length; i++) {

		  var myDistance = (distance(mapCenter.lat, mapCenter.lng, arr[i].coordinates.coordinates[0], arr[i].coordinates.coordinates[1]));

		  if (myDistance < mapPolygon.radius) {
			  var marker = map.addMarker({
				  position: {lat: arr[i].coordinates.coordinates[0], lng: arr[i].coordinates.coordinates[1]}
			  });

		  }
	  }

	});
};


checkLocation();
