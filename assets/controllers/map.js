import "leaflet";

let map = L.map("map", {
    minZoom: 1,
    maxZoom: 1,
});

let cartodbAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';

let positron = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);

map.setView([0, 0], 0);