import "leaflet";

export function initMap()
{
    let map = L.map("map", {
        minZoom: 1,
        maxZoom: 19,
    });

    let cartodbAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>';

    let positron = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: cartodbAttribution
    }).addTo(map);

    map.fitWorld().zoomIn();

    map.on('resize', function(e) {
        map.fitWorld({reset: true}).zoomIn();
    });

    return map;
}
