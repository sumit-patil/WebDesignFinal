function init()
	{
		var myLocation = new google.maps.LatLng(41.832035, -88.91234)
		var mapOptions = {
				center: myLocation,
				 zoom: 6,
				 mapTyoeId: google.maps.MapTypeId.SATELLITE,
				 zoomControl:true,
				 streetViewControl:true,
				 mapTypeControl:true,
				 mapTypeControlOptions:{
				 	style:google.maps.MapTypeControlStyle.DROPDOWN_MENU,
				 	position:google.maps.ControlPosition.TOP_CENTER
				 }
		};
		var iitmap = new google.maps.Map(document.getElementById("iitmap"),mapOptions);
		var markerImage= '../images/marker.png';
		var markerOptions = 
			{
				position: myLocation,
				map: iitmap,
				icon: "../images/marker4.png",
				title:"This is Rice Campus",
				animation: google.maps.Animation.DROP
			}
		 var marker = new google.maps.Marker(markerOptions);

		 var windowContent = '<div id="main-info"><h2>Rice Campus</h2><p>3300 South Federal Street, Chicago, IL 60616</p></div>';
		//var windowContent: '<IMG BORDER="0" ALIGN="Left" SRC="../images/infoWindow.jpg"> <div id="main-info"><h2>Rice Campus</h2><p>3300 South Federal Street, Chicago, IL 60616</p></div>';
		// var windowContent: '<IMG BORDER="0" ALIGN="Left" SRC="../images/infoWindow.jpg">';
		var infoWindowOptions = {
			content: windowContent
		};

		var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

		google.maps.event.addListener(marker, 'click', function(){
			infoWindow.open(iitmap, marker);
		});
	}
window.onload = init;