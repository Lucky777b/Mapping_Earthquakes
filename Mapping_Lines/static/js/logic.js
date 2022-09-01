// Add console.log to check to see if our code is working.
console.log("working");

// MAP A SINGLE LINE 

// Create the map object with a center and zoom level.
//The setView() method sets the view of the map for the center of the map to be between LAX and SFO, where the first coordinate is latitude (36.1733)
// and the second is longitude (-120.1794). We set the zoom level of "7" on a scale 0–18.
/*
let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Coordinates for each point to be used in the line. 
let line = [
  [33.9416,-118.4085],
  [37.6213,-122.3790]
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "red"
}).addTo(map);


// MAPPING MULTIPLE LINES 

// Create the map object with a center and zoom level.
// change the center of the map to SFO and change the zoom to 5 so that we can see the line.
let map = L.map('mapid').setView([36.6213, -122.3790], 5);

// Coordinates for each point to be used in the POLYLINE.
  // added 2 more airport stops to line variable: Salt Lake City Intl Airport(SLC) and Seattle-Tacoma Intl Airport(SEA)
  let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
  color: "yellow"
}).addTo(map);
*/

// skill drill: create an airline route from SFO to John F. Kennedy International Airport (JFK) with two stops,
  // Austin-Bergstrom International Airport (AUS) and Toronto Pearson International Airport (YYZ)
  // make route with blue dashed line, weight of 4, and opacity of 0.5 on the light map 
let map = L.map('mapid').setView([43.6777,-79.6248], 5);

// coordinates for each point in polyline map
let line = [
  [37.6213, -122.3790],
  [30.1900,-97.6687],
  [43.6777,-79.6248],
  [40.6417,-73.7809]
  
];
// create polyline and make line blue dashed line 
L.polyline(line, {
  color: "blue",
  weight: 4,
  opacity: 0.5,
  dashArray: '5,15'
}).addTo(map);



/* To change the map's style, change the map id using the list of Mapbox ids below:
mapbox/streets-v11
mapbox/outdoors-v11
mapbox/light-v10
mapbox/dark-v10
mapbox/satellite-v9
mapbox/satellite-streets-v11
*/

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
