var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
    // set up the map
	var map = new L.Map('mapblog');
	var wmsLayer = L.tileLayer.wms('http://demo.opengeo.org/geoserver/ows?', {layers: 'nasa:bluemarble'}).addTo(map);

    // create the tile layer with correct attribution
    //var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    //var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    //var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});

    // start the map in Paris
    map.setView(new L.LatLng(48.9, 2.5),3);
    map.addLayer(osm);
}

initmap();