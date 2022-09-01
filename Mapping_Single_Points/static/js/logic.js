// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// changed the geographical center of the map to the approximate geographical center of the US
//The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7)
// and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.
let map = L.map('mapid').setView([40.7, -94.5], 4);

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// want to add a marker using circle() function instead, so edited marker code above
// skill drill: create dark map with lightyellow circle with black line 
// indicating 300 meter radius of Central LA
// couldn't figure out how to create black line? will need to look for more doc later 
/*
L.circle([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillOpacity: "0.4",
    fillColor: '#ffffa1'
 }).addTo(map);
 */

// Alternatively= can create circle using circleMarker() function 
 // difference: circleMarker() fcn measures radius in Pixels (circle() measures in meters) 
 // default radius is set at 10 pixels
L.circleMarker([34.0522,-118.2437],{
    radius: 300,
    color: "black",
    fillColor: '#ffffa1'
}).addTo(map);
    // expected output: circle will be huge at first and then get smaller as you zoom in 


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

    // Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

