// Contact Page Maps Plugins

function initMap() {

    // london bubble
    var LondonBubble =
        '<div id="content" class="text-center">' +
            '<h3>Axetay Head Office</h3>' +
            '<p>101 London Bridge, SE88 0EB, London, United Kingdom</p>' +
            '<p>Phone: (044)800 283 1232</p>' +
        '</div>';

    // Cairo bubble
    var CairoBubble = '<div id="content" class="text-center">' +
        '<h3>Axetay - Cairo Office</h3>' +
        '<p>101 Abbas Al Akaad Street, Nasr City</p>' +
        '<p>Cairo, Egypt' +
        '</div>';

    // DubaiBubble
    var DubaiBubble = '<div id="content" class="text-center">' +
        '<h3>Axetay - Dubai Office</h3>' +
        '<p>101 Somewhere Street</p>' +
        '<p>Dubai, UAE' +
        '</div>';

    // Dubai bubble
    var AlexandriaBubble = '<div id="content" class="text-center">' +
        '<h3>Axetay - Alexandria Office</h3>' +
        '<p>101 Gamal Abdelnasser Street, Bolkly</p>' +
        '<p>Alexandria, Egypt' +
        '</div>';

    var locations = [
        // [LondonBubble, 51.487407, -0.013643, 1],
        // [DubaiBubble, 25.117539, 55.133324, 2],
        [AlexandriaBubble, 31.232116, 29.956815, 3]
        // [CairoBubble, 30.059139, 31.337543, 4]
    ];

    // Map Styling
    var styledMapType = new google.maps.StyledMapType(
        [{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural.terrain","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"poi.government","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry.fill","stylers":[{"color":"#ded3c7"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#d2e5c7"}]},{"featureType":"poi.place_of_worship","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#e6dfd8"}]},{"featureType":"poi.sports_complex","elementType":"geometry.fill","stylers":[{"color":"#cbbcac"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"saturation":"16"},{"lightness":"25"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"lightness":"100"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"saturation":"0"},{"lightness":"29"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"hue":"#9d00ff"},{"saturation":"25"},{"lightness":"5"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#9fdbf4"},{"lightness":"5"}]}]
    );
    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var map = new google.maps.Map(document.getElementById('axetayMap'), {
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeIds: ['styled_map', 'roadmap']
        }
    });

    var marker, i;
    var infowindow = new google.maps.InfoWindow({});
    var bounds = new google.maps.LatLngBounds();

    // Looping on locations array and pin markers
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        var markerforbound = new google.maps.LatLng(locations[i][1], locations[i][2]);

        bounds.extend(markerforbound);

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    map.fitBounds(bounds);

    marker.setMap(map);

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('axetayMap', styledMapType);
    map.setMapTypeId('axetayMap');
};