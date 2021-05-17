let $ = require("jquery");
import "leaflet";

export function hideAllAirports(map,markers){

    //console.log(markers)
    for(let i=0;i<markers.length;i++) {
        map.removeLayer(markers[i]);
    }  
    
}
