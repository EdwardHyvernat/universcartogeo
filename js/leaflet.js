/*
var mymap = L.map('mapid').setView([48.5, 2], 5);

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
	marqueurBleu = new Marqueur({iconUrl: "img/leaflet/marqueur_bleu-01.png"}),
	marqueurJaune = new Marqueur({iconUrl: "img/leaflet/marqueur_jaune-01.png"}),
	marqueurOrange = new Marqueur({iconUrl: "img/leaflet/marqueur_orange-01.png"}),
	marqueurVert = new Marqueur({iconUrl: "img/leaflet/marqueur_vert-01.png"}),
    marqueurViolet = new Marqueur({iconUrl: "img/leaflet/marqueur_violet-01.png"});
//Localisation des marqueurs	
var marker = L.marker([49.04211, 1.57195], {icon: marqueurRouge}).addTo(mymap)
	marker.bindPopup("<b>Résidence</b><br/>7 rue de la charrière - 78270 Bennecourt").openPopup;
var marker = L.marker([48.83102, 2.34052], {icon: marqueurViolet}).addTo(mymap)
	marker.bindPopup("<b>Travail</b><br/>14 rue Ferrus - 75014 Paris").openPopup;
var marker = L.marker([48.8439, 2.42658], {icon: marqueurVert}).addTo(mymap)
	marker.bindPopup("<b>Naissance</b><br/>30/01/1985 - Hôpital Bégin").openPopup;
var marker = L.marker([49.6498, 0.92926], {icon: marqueurVert}).addTo(mymap)
	marker.bindPopup("<b>Mariage</b><br/>15/08/2015 - Ectot l'Auber").openPopup;
var marker = L.marker([48.84466, 2.34258], {icon: marqueurBleu}).addTo(mymap)
	marker.bindPopup("<b>Licence</b><br/>Géographie et Aménagement - Paris Sorbonne (Paris IV)").openPopup;
	
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("coordonnées " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);
*/
//test de LayerGroup
var rouge = new L.LayerGroup();
var violet = new L.LayerGroup();
var vert = new L.LayerGroup();
var bleu = new L.LayerGroup();

	L.marker([49.04211, 1.57195]).bindPopup('Résidence').addTo(rouge),
	L.marker([48.83102, 2.34052]).bindPopup('Travail').addTo(violet),
	L.marker([48.8439, 2.42658]).bindPopup('Vie privée').addTo(vert),
	L.marker([49.6498, 0.92926]).bindPopup('Vie privée').addTo(vert),
	L.marker([48.84466, 2.34258]).bindPopup('Etudes').addTo(bleu);


	var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';

	var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
		streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});

	var map = L.map('mapid', {
		center: [48.5, 2],
		zoom: 7,
		layers: [grayscale, rouge, violet, vert, bleu]
	});

	var baseLayers = {
		"Grayscale": grayscale,
		"Streets": streets
	};

	var overlays = {
		"Résidence": rouge,
		"Travail": violet,
		"Vie privée": vert,
		"Etudes": bleu
	};

	L.control.layers(baseLayers, overlays).addTo(map);
