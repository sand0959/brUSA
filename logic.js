var mapKey = "AIzaSyANiTNnqGnd6RBhUylmCbKiyNONnEipbS8";
var newLocationValue = '';
var cityStateLocation = '';
var longitude = '';
var latitude = '';
var coords = {};
var cityName = '';
var cityNameWithPlus = '';
var brewlong = [];
var brewlat = [];
var breweryKey = "464c2923de039584755184680e90203c";
var marker = [];
var content = [];
var infowindow = new google.maps.InfoWindow();
var currWindow = false;


var config = {
    apiKey: "AIzaSyBLNHAGO_HaDLnnnVM_gUsFlAL_1uw_xcg",
    authDomain: "brusa-2c58a.firebaseapp.com",
    databaseURL: "https://brusa-2c58a.firebaseio.com",
    projectId: "brusa-2c58a",
    storageBucket: "brusa-2c58a.appspot.com",
    messagingSenderId: "1071659915633"
};
firebase.initializeApp(config);
var database = firebase.database();

$('body').on('click', '#addLocation', function(event) {
    event.preventDefault();
    $('html, body').animate({
   scrollTop: $("#map").offset().top
}, 1000);

    cityStateLocation = $("#searchBar").val();
    database.ref().push({
        cityState: cityStateLocation
    });

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
                    Accept: "application/json",
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .done(function(brewery) {
                for (var i = 0; i < brewery.data.length; i++) {
                    brewlong = brewery.data[i].longitude,
                        brewlat = brewery.data[i].latitude
                    brewcoords = { lat: brewlat, lng: brewlong }
                    brewname = brewery.data[i].brewery.name
                    brewweb = brewery.data[i].brewery.website
                    brewaddy = brewery.data[i].streetAddress

                    marker[i] = new google.maps.Marker({
                        position: brewcoords,
                        map: map,
                    });
                    marker[i].index = i
                    marker[i].content = '<div id="iw_container">' + '<div class="iw_title">' + brewname + '</div>' + '<div class="iw_content">Address:' + brewaddy + '</div>' + '<div class="iw_content">' + '<a href= "' + brewweb + '"target=_blank"' + ' ">Website</a>' + '</div>' + '</div>';

                    google.maps.event.addListener(marker[i], 'click', function() {
                        infowindow.close();
                        infowindow.setContent(marker[this.index].content);
                        infowindow.open(map, marker[this.index]);
                        map.panTo(marker[this.index].getPosition());

                    });


                };



            });

    });


    function initMap() {
        map = new google.maps.Map(document.querySelector('#map'), {
            zoom: 15,
            center: coords
        });
    }
});
