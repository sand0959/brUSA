<<<<<<< HEAD
=======

>>>>>>> 54a552ffed018c51448199a141fc78990381da09
var mapKey = "AIzaSyANiTNnqGnd6RBhUylmCbKiyNONnEipbS8";
var newLocationValue = '';
var cityStateLocation = '';
var longitude = '';
var latitude = '';
var coords = {};
var cityName = '';
var cityNameWithPlus = '';
<<<<<<< HEAD
=======



function generateMap() {};

$('body').on('click', '#addLocation', function(event) {
    event.preventDefault();

    cityStateLocation = $("#searchBar").val();

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

        .done(function(LongLat) {
            // for (var i = 0; i < results.location; i++) {
            //         console.log(results.location[i]);
            //       }
            console.log(LongLat.results[0].geometry.location.lat);
        })
});


>>>>>>> 54a552ffed018c51448199a141fc78990381da09

var breweryKey = "464c2923de039584755184680e90203c";



function generateMap() {};

<<<<<<< HEAD
$('body').on('click', '#addLocation', function(event) {
   event.preventDefault();

    $('html, body').animate({
    scrollTop: $("#map").offset().top
}, 1000);

   cityStateLocation = $("#searchBar").val();

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
           var breweryURL = "http://api.brewerydb.com/v2/locations?key=464c2923de039584755184680e90203c&locality=" + cityNameWithPlus;
           initMap();
           $.ajax({
       url: breweryURL,
       method: 'GET',
       crossDomain: 'true',
      headers: {
           Accept : "application/json",
                  'Access-Control-Allow-Origin': '*'
              }
   })
           .done(function(brewery){
               // for (var i = 0; i < 10; i++) {
               //     brewery.data.longitude[i],
               //     brewery.data.latitude[i]
               //     console.log(brewery.data.longitude)
               console.log(brewery.data.latitude);
               console.log(brewery.data[0].latitude);
               });



            })
           // initMarker();
           //console.log(breweryURL);
           
       });

function initMap() {
       map = new google.maps.Map(document.querySelector('#map'), {
           zoom: 15,
           center: coords
       });
   }
=======

>>>>>>> 54a552ffed018c51448199a141fc78990381da09
