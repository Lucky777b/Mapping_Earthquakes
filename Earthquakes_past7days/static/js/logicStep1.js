// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satellite = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps. 
let baseMaps = {
    "Streets": streets,
    "Satellite": satellite
};

// Create the map object with center and zoom level, and default layer.
let map = L.map('mapid', {
    center: [39.5,-98.5],
    zoom: 3, 
    layers: [streets]

});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);


// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

// Accessing the Toronto airline routes GeoJSON URL
//let torontoHoods = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// (how to make code easier to read by creating object with style parameters for the lines and assigned to variable myStyle)
// Create a style for the lines. 
let myStyle = {
    color: "blue",
    fillColor: "#ffffa1",
    weight: 1
}

// Retrieve the earthquake GeoJSON data. 
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data){
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJSON(data).addTo(map);
});

/*
// Grabbing our GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
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

*/


