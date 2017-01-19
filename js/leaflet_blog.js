//var map;
//var ajaxRequest;
//var plotlist;
//var plotlayers=[];

//function initmap() {
    // set up the map zoom to Paris
	//var map = new L.Map('mapblog',{crs : L.CRS.EPSG4326}).setView(new L.LatLng(48.9, 2.5),7);
	// couches wms
	//L.geoportalLayer.WMS({layer: "OI.OrthoimageCoverage"}).addTo(map);
	//var wmsLayer = L.tileLayer.wms('http://demo.opengeo.org/geoserver/ows?', {layers: 'nasa:bluemarble'}).addTo(map);

    // create the tile layer with correct attribution
    //var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    //var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    //var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});
 
    //map.addLayer(osm);
//}

//initmap();

// Simplification

function go() {
    var map = L.map('mapblog', {
        crs: L.geoportalCRS.EPSG2154,
    }).setView([48.9, 2.5], 12);
    var lyr = L.geoportalLayer.WMTS({
        layer: "CADASTRALPARCELS.PARCELS.L93"
    });
    lyr.addTo(map); // ou map.addLayer(lyr);
}

Gp.Services.getConfig({
    apiKey: "9cxflgtlfpitopej4q3x9wby",
    onSuccess: go
});