function init()
    {
        var lat;
        var lng;
        var pos;
        if(navigator.geolocation) 
        {
                navigator.geolocation.getCurrentPosition(function(position) {
                    pos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                    lat = position.coords.latitude;
                    lng = position.coords.longitude;
                    }, 
            function() 
            {
              handleNoGeolocation(true);
            });
            } else {
                handleNoGeolocation(false);
                console.log("Error");
            }
            
            function handleNoGeolocation(errorFlag) {
                lat = 41.832035;
                lng = -88.91234;
                if (errorFlag) {
                    var content = 'Error: The Geolocation service failed.';
                } else {
                    var content = 'Error: Your browser doesn\'t support geolocation.';
                }
                var options = {
                    map: map,
                    position: new google.maps.LatLng(60, 105),
                    content: content
                };
                var infowindow = new google.maps.InfoWindow(options);
                map.setCenter(options.position);
            }
        var myLocation = new google.maps.LatLng(lat, lng);
        var mapOptions = {
                center: myLocation,
                 zoom: 9,
                 mapTyoeId: google.maps.MapTypeId.SATELLITE,
                 zoomControl:false,
                 streetViewControl:false,
                 mapTypeControl:true,
                 mapTypeControlOptions:{
                    style:google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                    position:google.maps.ControlPosition.TOP_CENTER
                 }
        };
        var iitmap = new google.maps.Map(document.getElementById("iitmap"),mapOptions);
        var markerImage= '../images/marker4.png';
        var markerOptions = 
            {
                position: myLocation,
                map: iitmap,
                icon:markerImage,
                title:"Current Location",
                animation: google.maps.Animation.DROP
            }
         var marker = new google.maps.Marker(markerOptions);

        // var windowContent = 'Latitude: '+ position.coords.latitude +
        //                      ' Longitude: ' + position.coords.longitude;

        var windowContent = "Current Position";
        var infoWindowOptions = {
            content: windowContent
        };

        var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

        google.maps.event.addListener(marker, 'click', function()
        {
            infoWindow.open(iitmap, marker);
        });
    }
window.onload = init;