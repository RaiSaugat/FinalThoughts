function initMap() {
   var locations = [
     ['Blue Diamond Society', 27.728208, 85.343310, 4],
     ['Dristi Nepal', 27.721614,85.308924, 4],
     ['Maiti Nepal',27.704128, 85.347244,4],
     ['National Center For AIDS and STD Control',27.695936, 85.305313,4],

    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: new google.maps.LatLng(27.7172,85.3240),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}
