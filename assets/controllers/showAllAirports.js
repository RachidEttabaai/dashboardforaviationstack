let $ = require("jquery");

export function showAllAirports(){

    document.querySelector("#show-allairports").addEventListener("click",function(){

        $.ajax({
            type: "GET",
            url: "/api/airports/all",
            error:function(err){
                console.error(err)
            },
            success:function(data) {
    
                console.log(data);

            }
        });
    });

}

