var map;
var mapCenter = [34.397, 150.644];
var tweets = [];
var myCircle;
var circleOrigin;
var circleRadius = 300;

var tweetData = [
	{
		locationa : [-37, 100],
		tweet : "Yo what's up #tweetsweepASC",
		pic : "pokemon.com",
		distance: 0
	},
	{
		locationa : [-34.397, 150.644],
		tweet : "loser's up #tweetsweepASC",
		pic : "pokemon.com",
		distance : 0
	}
];

var useValue = 0;

function initMap() {
	var createdOrigin = new google.maps.LatLng(mapCenter);

	map = new google.maps.Map(document.getElementById('map'), {
	  center: createdOrigin,
	  zoom: 16
	});

	var opt = { minZoom: 13, maxZoom: 20 };
	map.setOptions(opt);

	checkLocation();
};

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	console.log("Couldn't do this!");
};

function checkLocation() {
	if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition(function(position) {
            mapCenter = [
              position.coords.latitude,
              position.coords.longitude
		  	];

			var createdOrigin = new google.maps.LatLng(mapCenter);

			map.setCenter(createdOrigin);

			console.log(createdOrigin);

			if (useValue == 1) {
				circleOrigin.setMap(null);
				myCircle.setMap(null);
			}
			else {
				useValue = 1
			}

			circleOrigin = new google.maps.Circle({
				strokeColor: '#00C0FF',
				strokeOpacity: 1,
				strokeWeight: 2,
				fillColor: '#00C0FF',
				fillOpacity: 1,
				map: map,
				center: createdOrigin,
				radius: 10
			});

			myCircle = new google.maps.Circle({
            	strokeColor: '#00C0FF',
            	strokeOpacity: 0.8,
            	strokeWeight: 2,
            	fillColor: '#1CD100',
            	fillOpacity: 0.35,
            	map: map,
            	center: createdOrigin,
            	radius: circleRadius
          	});
		}, function() {
			console.log("wtf bro");
		});

		checkTweets();
    } else {
        alert("You don't support this");
    }
};

function checkTweets() {
	var chosenTweet = [];

	for (var i = 0; i < tweetData.length; i++) {
		mapCenter = [32.959, 150.644];

		console.log(tweetData[i].locationa);
		console.log(mapCenter);

		var latLngA = new google.maps.LatLng(tweetData[i].locationa);
		var latLngB = new google.maps.LatLng(mapCenter);

		var madeDistance = google.maps.geometry.spherical.computeDistanceBetween( latLngB , latLngA );
		console.log(madeDistance);
		if (madeDistance < circleRadius) {
			chosenTweet.push(tweetData[i]);

			console.log("PUSHED MY G");
		}
	}
};
