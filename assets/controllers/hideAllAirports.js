let $ = require("jquery");
import "leaflet";

export function hideAllAirports(map){

    document.querySelector("#hide-allairports").addEventListener("click",function(){
        
        let markers = [];

        $.each(map._layers,function(ml){

            if(map._layers[ml]._latlng){
                markers.push([map._layers[ml]._latlng.lat,map._layers[ml]._latlng.lng]);
            }

        });

        console.log(markers);

        for (let index = 0; index < markers.length; index++) {
            map.removeLayer(markers[index]);
        }
        
    });
}
