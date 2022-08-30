// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// changed the geographical center of the map to the approximate geographical center of the US
//The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7)
// and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level.
// alternative method to using setView() method (creates same map object) above 
// METHOD USEFUL WHEN NEED TO ADD MULTIPLE TILE LAYERS OR BACKGROUND IMAGE OF OUR MAP(will do later in module)
/*
let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });
  */

// We create the tile layer that will be the background of our map.
// The tile layer is used to load and display a tile layer on the map. 
// We have two options to create a tile layer.

// 1st method: create tile layer
  // assigned to 'streets' variable since tile layer will create street-level map
/*
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

 To change the map's style, change the map id using the list of Mapbox ids below:
mapbox/streets-v11
mapbox/outdoors-v11
mapbox/light-v10
mapbox/dark-v10
mapbox/satellite-v9
mapbox/satellite-streets-v11
*/

// module 13: edited URL to replace with MapBox styles API URL copied from leaflet
  // and removed id attribute and map style reference 

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
