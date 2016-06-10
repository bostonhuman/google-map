var map;

function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
     center: {lat: -34.397, lng: 150.644},
     zoom: 8,
     mapTypeId: google.maps.MapTypeId.ROADMAP
     });
     //Create marker
     var markerOptions = {
	     position: new google.maps.LatLng(-34.397, 150.644)
     };
     var marker = new google.maps.Marker(markerOptions);
     marker.setMap(map);
}