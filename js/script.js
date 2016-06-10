var map;

function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
     center: {lat: 42.34852, lng: -71.08230},
     zoom: 8,
     mapTypeId: google.maps.MapTypeId.ROADMAP
     });
     // Create infoWindow
     var contentString = '<h2>Hello, Katelyn</h2>';
     var infowindow = new google.maps.InfoWindow({
          content: contentString
     });
     // Create marker
     var marker = new google.maps.Marker({
    	position: {lat: 42.34852, lng: -71.08230},
    	map: map,
    	title: 'Hello World!'
     });
     marker.addListener('click', function() {
          infowindow.open(map, marker);
      });
}

