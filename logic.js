var mapKey = "AIzaSyANiTNnqGnd6RBhUylmCbKiyNONnEipbS8";
var newLocationValue = '';
var cityStateLocation = '';


function generateMap() {};

$('body').on('click', '#addLocation', function(event) {
    event.preventDefault();

    cityStateLocation = $("#searchBar").val();
    console.log(cityStateLocation);
    csStringwithPlus = cityStateLocation.replace(/ /g, '+');
    console.log(csStringwithPlus);
    queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + csStringwithPlus + "&sensor=false";
    console.log(queryURL);
    $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function(LongLat) {
            // for (var i = 0; i < results.location; i++) {
            //         console.log(results.location[i]);
            //       }
            console.log(LongLat.results[0].geometry.location.lat);
        })
});


var breweryKey = "464c2923de039584755184680e90203c";
var breweryURL = "http://api.brewerydb.com/v2/beer/O3tmVI/breweries/?key="+breweryKey;

$('body').on('click', '#addLocation', function(event){
    event.preventDefault();

    $.ajax({
        url: breweryURL,
        method: 'GET'
    })
    .done(function(brewery) {

        console.log(breweryURL);
    })

});


