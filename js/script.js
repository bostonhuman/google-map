var map;

function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
<<<<<<< HEAD
     center: {lat: -34.397, lng: 150.644},
     zoom: 8,
     mapTypeId: google.maps.MapTypeId.ROADMAP
||||||| merged common ancestors
     center: {lat: -34.397, lng: 150.644},
     zoom: 8
=======
     center: {lat: 42.34852, lng: -71.08230},
     zoom: 8
>>>>>>> 0bc17376ad02d14f14af41067ec5cc1c97c51e1e
     });
<<<<<<< HEAD
     //Create marker
     var markerOptions = {
	     position: new google.maps.LatLng(-34.397, 150.644)
     };
     var marker = new google.maps.Marker(markerOptions);
     marker.setMap(map);
}
||||||| merged common ancestors
}
=======
}
>>>>>>> 0bc17376ad02d14f14af41067ec5cc1c97c51e1e
