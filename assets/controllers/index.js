import {initMap} from "./map.js";
import {addLegend} from "./addLegendtoMap.js";
import {showAllAirports} from "./showAllAirports.js";
import { hideAllAirports } from "./hideAllAirports.js";

let map = initMap();
addLegend(map);
document.getElementById("hide-allairports").disabled = true;
showAllAirports(map);
hideAllAirports(map);
