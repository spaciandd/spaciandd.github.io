var map;

$(document).ready(function() {
    map_bounds = [[-40, -40], [40, 40]];
    map = L.map('map', {
        minZoom: 5,
        maxZoom: 5,
        maxBounds: map_bounds
    }).setView([0, 0], 5);
    map.on('drag', function() {
        map.panInsideBounds(map_bounds, { animate: false });
    });

    var image_url = 'assets/img/blur-bg.jpg';
    L.imageOverlay(image_url, [[-180, -90], [180, 90]]).addTo(map);

    var cv_icon = L.divIcon({ 
        iconSize: new L.Point($('#CV').outerWidth(), $('#CV').outerHeight()),
        className: 'cv-divicon',
        iconAnchor: [1000, 1000],
        html: $('#CV').html()
    });
    map.on('click', function(e) {
        console.log(e.latlng);
    });
    
    L.marker([0, 0], {icon: cv_icon}).addTo(map);
})