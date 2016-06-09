// Implement Google Map API
//function initMap() {
	var mapOptions = {
		center: new google.maps.LatLng(42.34852, -71.08230),
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	new google.maps.Map(document.getElementById('map'), mapOptions);

	// Create Marker
	var markerOptions = {
    	position: new google.maps.LatLng(42.34852, -71.08230)
	};
	var marker = new google.maps.Marker(markerOptions);
	marker.setMap(map);
//}





