var mapKey = "AIzaSyANiTNnqGnd6RBhUylmCbKiyNONnEipbS8";
var newLocationValue = '';
var cityStateLocation = '';
var longitude = '';
var latitude = '';
var coords = {};
var cityName = '';
var cityNameWithPlus = '';


function generateMap() {};

$('body').on('click', '#addLocation', function(event) {
    event.preventDefault();

    cityStateLocation = $("#searchBar").val();
    // console.log(cityStateLocation);
    csStringwithPlus = cityStateLocation.replace(/ /g, '+');
    console.log(csStringwithPlus);
    queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + csStringwithPlus + "&sensor=false";
    console.log(queryURL);
    $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function(longlat) {

            latitude = parseFloat(longlat.results[0].geometry.location.lat);
            longitude = parseFloat(longlat.results[0].geometry.location.lng);
            cityName = longlat.results[0].address_components[0].short_name;
            coords = { lat: latitude, lng: longitude };
            cityNameWithPlus = cityName.replace(/ /g, '+');
            initMap();
            // initMarker();
            console.log("http://api.brewerydb.com/v2/locations?key=464c2923de039584755184680e90203c&locality=" + cityNameWithPlus);
            console.log("http://api.brewerydb.com/v2/locations?key=464c2923de039584755184680e90203c&locality=Durham");
        });

    function initMap() {
        map = new google.maps.Map(document.querySelector('#map'), {
            zoom: 15,
            center: coords
        });
    }
})
$('body').on('click', '#addLocation', function(event) {
    
    event.preventDefault();
    
    breweryURL = "http://api.brewerydb.com/v2/locations?key=464c2923de039584755184680e90203c&locality=" + cityNameWithPlus;
    $.ajax({
            url: breweryURL,
            method: 'GET',
            crossDomain: 'true',
            headers: {
                Accept: "application / json",
                'Access - Control - Allow - Origin': ' * '
            }
        })
        .done(function(brewery) {

            console.log(brewery.data.longtitude);
            console.log(csStringwithPlus);

        })
        // for (var i = 0; i < 10; i++) {
        //     [i]
        // }
        //     })
});
