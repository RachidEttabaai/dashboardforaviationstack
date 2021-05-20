import "leaflet";

export function addLegend(map)
{
    let legend = L.control({position: "bottomleft"});

    legend.onAdd = function(map)
    {
        let div = L.DomUtil.create("div","legend");

        div.innerHTML += "<h4>Aviation Stack</h4>";
        div.innerHTML += "<hr/>";
        div.innerHTML += '<p><span id="count-airports"></span></p>';
        div.innerHTML += '<p><button id="show-allairports">Show all airports</button></p>';
        div.innerHTML += '<p><button id="hide-allairports">Hide all airports</button></p>';

        return div;
    };

    legend.addTo(map)

}