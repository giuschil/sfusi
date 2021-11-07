
/* ----------------- Start Document ----------------- */
$(document).ready(function(){
if(document.getElementById("map") !== null){

	// Touch Gestures
	if ( $('#map').attr('data-map-scroll') == 'true' || $(window).width() < 992 ) {
		var scrollEnabled = false;
	} else {
		var scrollEnabled = true;
	}

	var mapOptions = {
		gestureHandling: scrollEnabled,
	}

	// Map Init
	window.map = L.map('map',mapOptions);
	$('#scrollEnabling').hide();


	// ----------------------------------------------- //
	// Popup Output
	// ----------------------------------------------- //
	function locationData(locationURL,locationImg,locationTitle, locationAddress, locationRating, locationRatingCounter) {
	  return(''+
	    '<a href="'+ locationURL +'" class="leaflet-listing-img-container">'+
	       '<div class="infoBox-close"><i class="fa fa-times"></i></div>'+
	       '<img src="'+locationImg+'" alt="">'+

	       '<div class="leaflet-listing-item-content">'+
	          '<h3>'+locationTitle+'</h3>'+
	          '<span>'+locationAddress+'</span>'+
	       '</div>'+

	    '</a>'+

	    '<div class="leaflet-listing-content">'+
	       '<div class="leaflet-listing-title">'+
	          '<div class="'+infoBox_ratingType+'" data-rating="'+locationRating+'"><div class="rating-counter">('+locationRatingCounter+' reviews)</div></div>'+
	       '</div>'+
	    '</div>')
	}


	// Listing rating on popup (star-rating or numerical-rating)
	var infoBox_ratingType = 'star-rating';

	map.on('popupopen', function () {
		if (infoBox_ratingType = 'numerical-rating') {
			numericalRating('.leaflet-popup .'+infoBox_ratingType+'');
		}
		if (infoBox_ratingType = 'star-rating') {
			starRating('.leaflet-popup .'+infoBox_ratingType+'');
		}
	});


	// ----------------------------------------------- //
	// Locations
	// ----------------------------------------------- //
	var locations = [
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"I Tulipani Bio Shop",'Via della Stazione di Ottavia, 73/F/G, 00135, Roma','3.5', '12' ), 41.96383633503931, 12.405505311644568,1, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/photos/sancosimo/sancosma.jpg',"Biologico - Box 44 Mercato Italia",'Via Catania, 70, 00161, Roma','3.5', '46'), 41.90933069999999, 12.519221699999997, 2, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/photos/',"Biomens",'Viale delle Milizie, 7A, Roma','5', '46'), 41.91088704515757, 12.45776868764405, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio3.jpg',"Bottega Biocé",'Via Erasmo Gattamelata, 129, 00176 Roma','5', '46'), 41.88706540000003, 12.53667479999999, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio2.jpg',"Brutta e Verdura",'Piazza delle Iris, 18b, 00171 Roma','2.5', '12'), 41.88802370000002, 12.566973299999983, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Capo Horn - Altra Bottega",'Via Domenico Purificato, 199, 00125 Roma','2.2', '12'),41.77103099999998, 12.359215999999996 , 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Capoverso Soc. Cooperativa",'Via dei Gonzaga, 34/C, 00163 Roma','3.4', '22'),41.88418020000003, 12.421482800000016 , 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Delizia Point Tuscolana",'Viale S. Giovanni Bosco, 122, 00175 Roma','4.2', '12'),41.85999780000001, 12.562165999999987, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Detersivi alla spina monteverde",'Viale di Villa Pamphili, 57 c, 00152 Roma','4.2', '12'),41.87996600000001, 12.456773200000013 , 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio2.jpg',"Eco&Gea",'Via Pietro Giordani, 26, 00145 Roma','2.2', '12'),41.77103099999998, 12.359215999999996 , 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Eco-Family",'Via Domenico Purificato, 199, 00125 Roma','2.2', '12'),41.77103099999998, 12.359215999999996 , 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Ecoposteria",'Via Galeazzo Sommi Picenardi, 36, 00122 Lido di Ostia','3.2', '12'),41.733159499999985, 12.291349399999998 , 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Habemus Pappa",'Via Montaione, 44, Roma','2.2', '12'),41.95059860000002,12.515930499999985, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"La Capra Rampante",'Via di Porta Castello, 36, 00193 Roma','5', '12'),41.90441369999999, 12.463362799999995, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Negozio Leggero 1",'Via Gadames, 26, 00199 Roma','3.5', '12'),41.93102769999999, 12.518922599999991, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Negozio Leggero 2",'Via Gabriello Chiabrera, 80, 00145 Roma','4.2', '12'),41.8542572,12.479095299999988, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Resto Sfuso",'Via Santa Maria Ausiliatrice, 68, 00181 Roma RM','4.2', '12'),41.87311379999999, 12.527986499999981, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),41.96155649999999, 12.798461000000003, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),45.458072896541985, 9.193174113786624, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),45.458072896541985, 9.193174113786624, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),45.458072896541985, 9.193174113786624, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),45.458072896541985, 9.193174113786624, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),45.458072896541985, 9.193174113786624, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),45.458072896541985, 9.193174113786624, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),45.458072896541985, 9.193174113786624, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),45.458072896541985, 9.193174113786624, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),45.458072896541985, 9.193174113786624, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),45.458072896541985, 9.193174113786624, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),45.458072896541985, 9.193174113786624, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),45.458072896541985, 9.193174113786624, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),45.458072896541985, 9.193174113786624, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),45.458072896541985, 9.193174113786624, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),43.797927, 11.232900, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),43.797927, 11.232900, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),43.797927, 11.232900, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),43.797927, 11.232900, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),43.797927, 11.232900, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),43.797927, 11.232900, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),43.797927, 11.232900, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),43.797927, 11.232900, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),44.500220, 11.399148, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),44.500220, 11.399148, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),44.500220, 11.399148, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),44.500220, 11.399148, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),44.500220, 11.399148, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),44.500220, 11.399148, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),44.500220, 11.399148, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),44.500220, 11.399148, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),40.851400, 14.323516, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),40.851400, 14.323516, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),40.851400, 14.323516, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),40.851400, 14.323516, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),40.851400, 14.323516, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),40.851400, 14.323516, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),40.851400, 14.323516, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),40.851400, 14.323516, 3, '<i class="im im-icon"></i>'],
		[ locationData('listings-single-page.html','images/foto-negozio1.jpg',"Usosfuso",'Via Due Giugno, 13, 00019 Tivoli','2.2', '12'),40.851400, 14.323516, 3, '<i class="im im-icon"></i>'],
		

		

		
];


	// ----------------------------------------------- //
	// Map Provider
	// ----------------------------------------------- //

	// Open Street Map 
	// -----------------------//
	L.tileLayer(
		'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> Contributors',
		maxZoom: 18,
	}).addTo(map);


	// MapBox (Requires API Key)
	// -----------------------//
	// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}@2x.png?access_token={accessToken}', {
	//     attribution: " &copy;  <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> &copy;  <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
	//     maxZoom: 18,
	//     id: 'mapbox.streets',
	//     accessToken: 'ACCESS_TOKEN'
	// }).addTo(map);


	// ThunderForest (Requires API Key)
	// -----------------------//
	// var ThunderForest_API_Key = 'API_KEY';
	// var tileUrl = 'https://tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey='+ThunderForest_API_Key,
	// layer = new L.TileLayer(tileUrl, {maxZoom: 18});
	// map.addLayer(layer);


	// ----------------------------------------------- //
	// Markers
	// ----------------------------------------------- //
        markers = L.markerClusterGroup({
            spiderfyOnMaxZoom: true,
            showCoverageOnHover: false,
          });
       
        for (var i = 0; i < locations.length; i++) {

          var listeoIcon = L.divIcon({
              iconAnchor: [20, 51], // point of the icon which will correspond to marker's location
              popupAnchor: [0, -51],
              className: 'listeo-marker-icon',
              html:  '<div class="marker-container">'+
                       '<div class="marker-card">'+
                          '<div class="front face">' + locations[i][4] + '</div>'+
                          '<div class="back face">' + locations[i][4] + '</div>'+
                          '<div class="marker-arrow"></div>'+
                       '</div>'+
                     '</div>'
            }
          );

            var popupOptions =
              {
              'maxWidth': '270',
              'className' : 'leaflet-infoBox'
              }
                var markerArray = [];
            marker = new L.marker([locations[i][1],locations[i][2]], {
                icon: listeoIcon,
                
              })
              .bindPopup(locations[i][0],popupOptions );
              //.addTo(map);
              marker.on('click', function(e){
                
               // L.DomUtil.addClass(marker._icon, 'clicked');
              });
              map.on('popupopen', function (e) {
              //   L.DomUtil.addClass(e.popup._source._icon, 'clicked');
            

              // }).on('popupclose', function (e) {
              //   if(e.popup){
              //     L.DomUtil.removeClass(e.popup._source._icon, 'clicked');  
              //   }
                
              });
              markers.addLayer(marker);
        }
        map.addLayer(markers);

    
        markerArray.push(markers);
        if(markerArray.length > 0 ){
          map.fitBounds(L.featureGroup(markerArray).getBounds().pad(0.2)); 
        }


	// Custom Zoom Control
	map.removeControl(map.zoomControl);

	var zoomOptions = {
		zoomInText: '<i class="fa fa-plus" aria-hidden="true"></i>',
		zoomOutText: '<i class="fa fa-minus" aria-hidden="true"></i>',
	};

	// Creating zoom control
	var zoom = L.control.zoom(zoomOptions);
	zoom.addTo(map);

}


// ----------------------------------------------- //
// Single Listing Map
// ----------------------------------------------- //
function singleListingMap() {

	var lng = parseFloat($( '#singleListingMap' ).data('longitude'));
	var lat =  parseFloat($( '#singleListingMap' ).data('latitude'));
	var singleMapIco =  "<i class='"+$('#singleListingMap').data('map-icon')+"'></i>";

	var listeoIcon = L.divIcon({
	    iconAnchor: [20, 51], // point of the icon which will correspond to marker's location
	    popupAnchor: [0, -51],
	    className: 'listeo-marker-icon',
	    html:  '<div class="marker-container no-marker-icon ">'+
	                     '<div class="marker-card">'+
	                        '<div class="front face">' + singleMapIco + '</div>'+
	                        '<div class="back face">' + singleMapIco + '</div>'+
	                        '<div class="marker-arrow"></div>'+
	                     '</div>'+
	                   '</div>'
	    
	  }
	);

	var mapOptions = {
	    center: [lat,lng],
	    zoom: 13,
	    zoomControl: false,
	    gestureHandling: true
	}

	var map_single = L.map('singleListingMap',mapOptions);
	var zoomOptions = {
	   zoomInText: '<i class="fa fa-plus" aria-hidden="true"></i>',
	   zoomOutText: '<i class="fa fa-minus" aria-hidden="true"></i>',
	};

	// Zoom Control
	var zoom = L.control.zoom(zoomOptions);
	zoom.addTo(map_single);

	map_single.scrollWheelZoom.disable();

	marker = new L.marker([lat,lng], {
	      icon: listeoIcon,
	}).addTo(map_single);

	// Open Street Map 
	// -----------------------//
	L.tileLayer(
		'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> Contributors',
		maxZoom: 18,
	}).addTo(map_single);


	// MapBox (Requires API Key)
	// -----------------------//
	// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}@2x.png?access_token={accessToken}', {
	//     attribution: " &copy;  <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> &copy;  <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>",
	//     maxZoom: 18,
	//     id: 'mapbox.streets',
	//     accessToken: 'ACCESS_TOKEN'
	// }).addTo(map_single);
	

	// Street View Button URL
	$('a#streetView').attr({
		href: 'https://www.google.com/maps/search/?api=1&query='+lat+','+lng+'',
		target: '_blank'
	});
}

// Single Listing Map Init
if(document.getElementById("singleListingMap") !== null){
	singleListingMap();
}


});