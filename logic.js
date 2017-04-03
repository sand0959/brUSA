var mapKey = "AIzaSyANiTNnqGnd6RBhUylmCbKiyNONnEipbS8";
var newLocationValue = '';
var cityStateLocation = '';


function generateMap() {};

$('body').on('click', '#addLocation', function(event) {
    event.preventDefault();

    cityStateLocation = $("#searchResults").val();
    console.log(cityStateLocation);
    csStringwithPlus = cityStateLocation.replace(/ /g, '+');
    console.log(csStringwithPlus);
    queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + csStringwithPlus + "&sensor=false";
    console.log(queryURL);
    $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function(results) {
            // for (var i = 0; i < results.location; i++) {
            //         console.log(results.location[i]);
            //       }
            console.log(results.geometry);
        })
});
