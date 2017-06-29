//**CARTE 1**
//var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';
//var mbUrl = 'https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpbG10dnA3NzY3OTZ0dmtwejN2ZnUycjYifQ.1W5oTOnWXQ9R1w8u3Oo1yA'

var map = L.map('mapid', {center: [48.5, 2], zoom: 7});

L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZWR3YXJkaCIsImEiOiJjaXpxd3h3MDkwMDE3MzJxdTF1enljZ2ViIn0.ewaeb0hRCWBOrQZv4kfuvw',
	{id: 'mapbox.light'}).addTo(map);
	
function setBounds() {
        }
        function geoJson2heat(geojson, weight) {
          return geojson.features.map(function(feature) {
            return [
              feature.geometry.coordinates[1],
              feature.geometry.coordinates[0],
              feature.properties[weight]
            ];
          });
        }
        function pop_perimetresepfifportail0(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id_secteur'] !== null ? Autolinker.link(String(feature.properties['id_secteur'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">secteur</th>\
                        <td>' + (feature.properties['secteur'] !== null ? Autolinker.link(String(feature.properties['secteur'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['id_sifow'] !== null ? Autolinker.link(String(feature.properties['id_sifow'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['code_dep'] !== null ? Autolinker.link(String(feature.properties['code_dep'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['insee'] !== null ? Autolinker.link(String(feature.properties['insee'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['nom_com'] !== null ? Autolinker.link(String(feature.properties['nom_com'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['sign_conv'] !== null ? Autolinker.link(String(feature.properties['sign_conv'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['nb_avenant'] !== null ? Autolinker.link(String(feature.properties['nb_avenant'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['acte'] !== null ? Autolinker.link(String(feature.properties['acte'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['statut'] !== null ? Autolinker.link(String(feature.properties['statut'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['date_sign'] !== null ? Autolinker.link(String(feature.properties['date_sign'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['date_fin'] !== null ? Autolinker.link(String(feature.properties['date_fin'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['type_perim'] !== null ? Autolinker.link(String(feature.properties['type_perim'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['classement'] !== null ? Autolinker.link(String(feature.properties['classement'])) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['affichage'] !== null ? Autolinker.link(String(feature.properties['affichage'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent);
        }

        function style_perimetresepfifportail0(feature) {
            switch(feature.properties['classement']) {
                case 'maitrise foncière':
                    return {
                pane: 'pane_perimetresepfifportail0',
                opacity: 1,
                color: 'rgba(255,0,4,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0, 
                fillOpacity: 0,
            }
                    break;
                case 'veille foncière':
                    return {
                pane: 'pane_perimetresepfifportail0',
                opacity: 1,
                color: 'rgba(0,242,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0, 
                fillOpacity: 0,
            }
                    break;
                default:
                    return {
                pane: 'pane_perimetresepfifportail0',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fillOpacity: 1,
                fillColor: 'rgba(135,135,135,0.701960784314)',
            }
                    break;
            }
        }
        map.createPane('pane_perimetresepfifportail0');
        map.getPane('pane_perimetresepfifportail0').style.zIndex = 600;
        map.getPane('pane_perimetresepfifportail0').style['mix-blend-mode'] = 'normal';
    var layer_perimetresepfifportail0 = new L.geoJson(json_perimetresepfifportail0, {
        attribution: '<a href=""></a>',
        pane: 'pane_perimetresepfifportail0',
        onEachFeature: pop_perimetresepfifportail0,
        style: style_perimetresepfifportail0
    });
        bounds_group.addLayer(layer_perimetresepfifportail0);
        map.addLayer(layer_perimetresepfifportail0);
        function pop_igndepartements20151(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['code_dep'] !== null ? Autolinker.link(String(feature.properties['code_dep'])) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent);
        }

        function style_igndepartements20151() {
            return {
                pane: 'pane_igndepartements20151',
                opacity: 1,
                color: 'rgba(0,0,0,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2.0, 
                fillOpacity: 0,
            }
        }
        map.createPane('pane_igndepartements20151');
        map.getPane('pane_igndepartements20151').style.zIndex = 601;
        map.getPane('pane_igndepartements20151').style['mix-blend-mode'] = 'normal';
    var layer_igndepartements20151 = new L.geoJson(json_igndepartements20151, {
        attribution: '<a href=""></a>',
        pane: 'pane_igndepartements20151',
        onEachFeature: pop_igndepartements20151,
        style: style_igndepartements20151
    });
        bounds_group.addLayer(layer_igndepartements20151);
        map.addLayer(layer_igndepartements20151);
        var osmGeocoder = new L.Control.OSMGeocoder({
            collapsed: false,
            position: 'topright',
            text: 'Search',
        });
        osmGeocoder.addTo(map);
        var baseMaps = {};
        L.control.layers(baseMaps,{'<img src="legend/igndepartements20151.png" /> ign_departements_2015': layer_igndepartements20151,'perimetres_epfif_portail<br /><table><tr><td style="text-align: center;"><img src="legend/perimetresepfifportail0_maitrisefoncire0.png" /></td><td>maitrise foncière</td></tr><tr><td style="text-align: center;"><img src="legend/perimetresepfifportail0_veillefoncire1.png" /></td><td>veille foncière</td></tr><tr><td style="text-align: center;"><img src="legend/perimetresepfifportail0_2.png" /></td><td></td></tr></table>': layer_perimetresepfifportail0,}).addTo(map);
        setBounds();
        map.addControl(new L.Control.Search({
            layer: layer_perimetres_epfif_portail0,
            initial: false,
            hideMarkerOnCollapse: true,
            propertyName: 'secteur'}));


/*L.geoJSON(json_perimepfif, {
    onEachFeature: onEachFeature
}).addTo(map);*/

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


  

