// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps. 
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
};

// Create the map object with center and zoom level, and default layer.
let map = L.map('mapid', {
    center: [43.7,-79.3],
    zoom: 11, 
    layers: [satelliteStreets]

});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// Accessing the Toronto airline routes GeoJSON URL
let torontoHoods = "https://raw.githubusercontent.com/Lucky777b/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/Mapping_GeoJSON_Polygons/torontoNeighborhoods.json";

// (how to make code easier to read by creating object with style parameters for the lines and assigned to variable myStyle)
// Create a style for the lines. 
let myStyle = {
    color: "blue",
    fillColor: "#ffffa1",
    weight: 1
}

// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data. 
    // add marker popups for each airline and destination, line color of yellow and weight of 2 
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature,layer) {
            layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME + "</h3>");
        }
    }).addTo(map);
});

/*
// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data. 
    // add marker popups for each airline and destination, line color of yellow and weight of 2 
    L.geoJSON(data, {
        style: myStyle,
        onEachFeature: function(feature, layer){
            layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3><hr><h3> Destination: " + feature.properties.dst + "</h3>");
        }
    }).addTo(map);
});


// above: how to make code easier to read by creating object with style parameters for the lines and assigned to variable myStyle
// How to add color and weight inside L.geoJSON function(below)
// Grabbing our GeoJSON data.

d3.json(torontoData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data. 
    // add marker popups for each airline and destination, line color of yellow and weight of 2 
    L.geoJSON(data, {
        color: "#ffffa1",
        weight: 2,
        onEachFeature: function(feature, layer){
            layer.bindPopup("<h2> Airline: " + feature.properties.airline + "</h2><hr><h2> Destination: " + feature.properties.dst + "</h2>");
        }
    }).addTo(map);
});
*/

