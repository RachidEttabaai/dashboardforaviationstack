let $ = require("jquery");
import "leaflet";

export function showAllAirports(map){

    document.querySelector("#show-allairports").addEventListener("click",function(){

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

                console.log("Count of airports : "+ count);
                
                airports.forEach(airport => {
                    let coord = [parseFloat(airport.latitude),parseFloat(airport.longitude)];
                    let airportname = airport.airport_name;
                    let country = airport.country_name;
                    let countryiso2 = airport.country_iso2;

                    let contentpopup = '<img src="https://www.countryflags.io/'+countryiso2.toLowerCase()+'/flat/32.png" title="'+country+'"/><br>';
                    contentpopup += "<h3>"+airportname+"</h3><br>";
                    contentpopup += "<p>"+country+"</p>";
                    
                    L.marker(coord).addTo(map).bindPopup(contentpopup);
                });

            }
        });
    });

}

