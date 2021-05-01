import {initMap} from "./map.js";
import {addLegend} from "./addLegendtoMap.js";
import {showAllAirports} from "./showAllAirports.js";

let map = initMap();
addLegend(map);
showAllAirports(map);