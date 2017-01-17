var mymap = L.map('mapid').setView([48.95, 2], 8);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);
	
//marqueurs popup variables générales
var Marqueur = L.Icon.extend({
	options: {
		iconSize: [15,25]
	}
});
//Collection de marqueurs
var marqueurRouge = new Marqueur({iconUrl: "img/leaflet/marqueur_rouge-01.png"}),
    marqueurViolet = new Marqueur({iconUrl: "img/leaflet/marqueur_violet-01.png"});
//Localisation des marqueurs	
var marker = L.marker([49.04211, 1.57195], {icon: marqueurRouge}).addTo(mymap)
	marker.bindPopup("<b>Résidence</b><br/>7 rue de la charrière - 78270 Bennecourt.").openPopup;
var marker = L.marker([48.83102, 2.34052], {icon: marqueurViolet}).addTo(mymap)
	marker.bindPopup("<b>Travail</b><br/>14 rue Ferrus - 75014 Paris.").openPopup;
	
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("coordonnées " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
