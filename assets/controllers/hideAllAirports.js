let $ = require("jquery");
import "leaflet";

export function hideAllAirports(map){

    document.querySelector("#hide-allairports").addEventListener("click",function(){
        
        let markers = [];

        $.each(map._layers,function(ml){

            console.log(map._layers[ml]);

            if(map._layers[ml].feature){
                markers.push($(this));
            }

        });

        console.log(markers);
        
    });
}
