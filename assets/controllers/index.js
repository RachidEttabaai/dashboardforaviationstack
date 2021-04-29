import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import {initMap} from "./map.js";
import {addLegend} from "./addLegendtoMap.js";

let map = initMap();
addLegend(map);