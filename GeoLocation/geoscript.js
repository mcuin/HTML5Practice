var x = document.getElementById("geoDemo");

function geoLocate() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		x.innerHTML = "Browser does not support geolocation.";
	}
} 

function showPosition(position) {
	x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;

	var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";

	document.getElementById("mapholder").innerHTML = "<img src='"+img_url"'>";
} 

function showError(error) {
	switch(code.error) {
		case error.PERMISSION_DENIED:
			x.innerHTML = "User denied the request for geolocation."
			break;
		case error.POSITION_UNAVAILABLE:
			x.innerHTML = "Location information is unavailable."
			break;
		case error.TIMEOUT:
			x.innerHTML = "The request to get user location timed out."
			break;
		case error.UNKNOWN_ERROR:
			x.innerHTML = "An unknown error occured."
			break;
	}
} 
