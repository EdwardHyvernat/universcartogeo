//var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';
//var mbUrl = 'https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpbG10dnA3NzY3OTZ0dmtwejN2ZnUycjYifQ.1W5oTOnWXQ9R1w8u3Oo1yA'
var mbUrl = 'http://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpbTgzcHQxMzAxMHp0eWx4bWQ1ZHN2NGcifQ.WVwjmljKYqKciEZIC3NfLA'

var gris     		  = L.tileLayer(mbUrl, {id: 'mapbox.light'}),
	streets  		  = L.tileLayer(mbUrl, {id: 'mapbox.streets'}),
	dark     		  = L.tileLayer(mbUrl, {id: 'mapbox.dark'}),
	outdoors 		  = L.tileLayer(mbUrl, {id: 'mapbox.outdoors'}),
	pirates           = L.tileLayer(mbUrl, {id: 'mapbox.pirates'}),
	emerald           = L.tileLayer(mbUrl, {id:	'mapbox.emerald'}),
	wheatpaste        = L.tileLayer(mbUrl, {id: 'mapbox.wheatpaste'});
		
var rouge = new L.LayerGroup();
var violet = new L.LayerGroup();
var vert = new L.LayerGroup();
var bleu = new L.LayerGroup();

L.marker([49.04211, 1.57195]).bindPopup('Résidence').addTo(rouge),
L.marker([48.83102, 2.34052]).bindPopup('Travail').addTo(violet),
L.marker([48.8439, 2.42658]).bindPopup('Vie privée').addTo(vert),
L.marker([49.6498, 0.92926]).bindPopup('Vie privée').addTo(vert),
L.marker([48.84466, 2.34258]).bindPopup('Etudes').addTo(bleu);
		
var map = L.map('mapid', {center: [48.5, 2], zoom: 7, layers: [gris, rouge, violet, vert, bleu]});

var fond_plan = {
				 "Gray": gris,
				 "Streets": streets,
				 "Outdoors": outdoors,
				 "Dark": dark,
				 "Pirates": pirates,
				 "Emerald": emerald,
				 "Wheatpaste": wheatpaste
				 					};

var couche = {
			  "Résidence": rouge,
			  "Travail": violet,
			  "Vie privée": vert,
			  "Etudes": bleu
				             };

L.control.layers(fond_plan, couche).addTo(map);
