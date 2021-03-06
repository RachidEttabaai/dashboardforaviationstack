let $ = require("jquery");
import "leaflet";
import { hideAllAirports } from "./hideAllAirports.js";

export function showAllAirports(map){

    let airportmarkers = [];

    document.querySelector("#show-allairports").addEventListener("click",function(event){
        event.preventDefault();
        $.ajax({
            type: "GET",
            url: "/api/airports/all",
            dataType: "json",
            async: true,
            error:function(err){
                console.error(err)
            },
            success:function(result) {

                let airports = result.data;
                let count = result.pagination.count;

                $("#count-airports").html("Count of airports : "+ count);
                
                airports.forEach((airport,index) => {
                    let coord = [parseFloat(airport.latitude),parseFloat(airport.longitude)];
                    let airportname = airport.airport_name;
                    let country = airport.country_name;
                    let countryiso2 = airport.country_iso2;

                    let contentpopup = '<img src="https://flagcdn.com/h40/'+countryiso2.toLowerCase()+'.png" title="'+country+'"/><br>';
                    contentpopup += "<h3>"+airportname+" airport</h3><br>";
                    contentpopup += "<p>"+country+"</p>";

                    let airportmarker = L.marker(coord);
                    airportmarkers.push(airportmarker);
                    map.addLayer(airportmarkers[index]);
                    airportmarker.addTo(map).bindPopup(contentpopup);
                });

            }
        });

        document.getElementById("show-allairports").disabled = true; 
        document.getElementById("hide-allairports").disabled = false;

        document.querySelector("#hide-allairports").addEventListener("click",function(event){
          event.preventDefault();
          hideAllAirports(map,airportmarkers);
          $("#count-airports").empty();

          document.getElementById("hide-allairports").disabled = true;
          document.getElementById("show-allairports").disabled = false;

        });
    });

}

