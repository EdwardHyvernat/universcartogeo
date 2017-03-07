//**CARTE 1**
//var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';
//var mbUrl = 'https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpbG10dnA3NzY3OTZ0dmtwejN2ZnUycjYifQ.1W5oTOnWXQ9R1w8u3Oo1yA'
var mbUrl = 'http://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWR3YXJkaCIsImEiOiJjaXpxd3h3MDkwMDE3MzJxdTF1enljZ2ViIn0.ewaeb0hRCWBOrQZv4kfuvw'

var gris     		  = L.tileLayer(mbUrl, {id: 'mapbox.light'}),
	streets  		  = L.tileLayer(mbUrl, {id: 'mapbox.streets'}),
	dark     		  = L.tileLayer(mbUrl, {id: 'mapbox.dark'}),
	outdoors 		  = L.tileLayer(mbUrl, {id: 'mapbox.outdoors'}),
	pirates           = L.tileLayer(mbUrl, {id: 'mapbox.pirates'}),
	emerald           = L.tileLayer(mbUrl, {id:	'mapbox.emerald'}),
	satellite		  = L.tileLayer(mbUrl, {id:	'mapbox.satellite'}),
	sport             = L.tileLayer(mbUrl, {id: 'mapbox.run-bike-hike'});
		
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
				 "Sport": sport,
				 "Satellite": satellite
				 					};

var couche = {
			  "Résidence": rouge,
			  "Travail": violet,
			  "Vie privée": vert,
			  "Etudes": bleu
				             };

L.control.layers(fond_plan, couche).addTo(map);


//**CARTE 2**
var map;
require(["esri/map", "esri/dijit/BasemapGallery", "esri/arcgis/utils", "dojo/parser", "dijit/layout/BorderContainer", "dijit/layout/ContentPane", "dijit/TitlePane", "dojo/domReady!"], 
function( Map, BasemapGallery, arcgisUtils, parser)
		{
		 parser.parse();
		 map = new Map("mapArcgis", {basemap: "hybrid", center: [-1.8, 48.7], zoom: 10});

		 //add the basemap gallery, in this case we'll display maps from ArcGIS.com including bing maps
		 var basemapGallery = new BasemapGallery({showArcGISBasemaps: true, map: map}, "basemapGallery");
		 basemapGallery.startup();
         basemapGallery.on("error", function(msg) {console.log("basemap gallery error:  ", msg);});
        });


  

