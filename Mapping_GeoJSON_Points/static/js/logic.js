// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps. 
let baseMaps = {
    Street: streets,
    Dark: dark
};

// Create the map object with center and zoom level, and default layer.
let map = L.map('mapid', {
    center: [30,30],
    zoom: 2, 
    layers: [streets]

});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Lucky777b/Mapping_Earthquakes/Mapping_GeoJSON_Points/Mapping_GeoJSON_Points/majorAirports.json";

// Grabbing our GeoJSON data.
/*
d3.json(airportData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data. 
    L.geoJSON(data).addTo(map);
});
*/



//skill drill - add pop up to markers on map 
let airportMarker = new L.LayerGroup();
// Grabbing out GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data, {
        onEachFeature: function(feature, layer){
            console.log(feature)
            layer.bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2><hr><h2> Airport name: " + feature.properties.name + "</h2>");
        }
    }).addTo(airportMarker);

    airportMarker.addTo(map);
});

// code works both ways (above and code below)
/*
// Grabbing out GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data, {
        onEachFeature: function(feature, layer){
            console.log(feature)
            layer.bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2><hr><h2> Airport name: " + feature.properties.name + "</h2>");
        }
    }).addTo(map);

});

// not sure how to make code below work 

L.geoJSON(airportData, {
    pointToLayer: function(feature, latlng) {
        console.log(feature);
        return L.marker(latlng)
        latlng.bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2><hr><h2> Airport name: " + feature.properties.name + "</h2>");
    }
}).addTo(map);

*/


