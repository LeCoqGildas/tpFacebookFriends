var leprenom;
var leNom;
function afficherSurCarte(x,y,prenom,nom ){

    lePrenom = prenom;
    leNom = nom;
	var lonLat = new OpenLayers.LonLat( x, y)
        .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
        );
    var zoom=6;
    var markers = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(markers);
    markers.addMarker(new OpenLayers.Marker(lonLat));
    map.setCenter (lonLat, zoom);

 

};
