let $ = require("jquery");

export function showAllAirports(){

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
                    console.log(airport);
                });

            }
        });
    });

}

