import "leaflet";

export function addLegend(map)
{
    let legend = L.control({position: "bottomleft"});

    legend.onAdd = function(map)
    {
        let div = L.DomUtil.create("div","legend");

        div.innerHTML += "<h4>Aviation Stack</h4>";
        div.innerHTML += '<a id="show-allairports" class="waves-effect waves-teal btn-flat">Show all airports</a>';

        return div;
    };

    legend.addTo(map)

}