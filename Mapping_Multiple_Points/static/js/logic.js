// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// changed the geographical center of the map to the approximate geographical center of the US
//The setView() method sets the view of the map with a geographical center, where the first coordinate is latitude (40.7)
// and the second is longitude (-94.5). We set the zoom level of "4" on a scale 0–18.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// To add multiple points to a map, have to nest lat/long in an array 
// can't use marker() function b/c only adds one lat/long to the map 
// To add a marker for each location, have to iterate through the array and add each lat/long to the map 

// An array containing each city's location,state, and population.
/*let cities = [{
  location: [40.7128,-74.0059],
  city: "New York City",
  state: "NY",
  population: 8398748
},
{
  location: [41.8781,-87.6298],
  city: "Chicago",
  state: "IL",
  population: 2705994 
},
{
  location: [29.7604,-95.3698],
  city: "Houston",
  state: "TX",
  population: 2325502 
},
{
  location: [34.0522,-118.2437],
  city: "Los Angeles",
  state: "CA",
  population: 3990456 
},
{
  location: [33.4484,-112.0740],
  city: "Phoenix",
  state: "AZ",
  population: 1660272 
}]; 
*/
// array moved to cities.js file b/c best practice to have data in external file and refer to that file and dataset in the logic.js file 

// Get Data from cities.js 
let cityData = cities;

//Next, we need to iterate through each city object and add each city location to the marker() function, 
// which will, in turn, be added to the map.
  // can iterate through cities array 2 ways 
      // 1. for (let i = 0; i < cities.length; i++)
      // 2. cities.forEach(function(city))

// Loop through the cities array and create one marker for each city.
// add the location of each city to the map when you iterate through the cities array
/*cities.forEach(function(city) {
  console.log(city)
  L.marker(city.location).addTo(map);
});
*/

// b/c moved cities array to cities.js file -> need to update cities.forEach() fcn above to 
  // newly defined cityData variable created 
  // also, don't forget to update index.html file to include <script> file for cities.js

// Loop through the cities array and create one marker for each city. 
/*
cities.forEach(function(city) {
  console.log(city)
  L.marker(city.location)
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
}); 

// Next, change the marker for each city to a circle that has a radius equiv to the city's population
  // replace marker() fcn with circleMarker() in the forEach() fcn 
  // then assign the 'radius' key to the population by using city.population

  cities.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
      radius: city.population
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
  });

  // expected output: map all blue and only pops up with phoenix az when you click anywhere on map, whats the problem? 
    // radii is too large 
    // to fix this -> have to decrease each city's radius so the circle markers fit on the map 
      // divide city.population value by "100000"
    cities.forEach(function(city) {
      console.log(city)
      L.circleMarker(city.location, {
        radius: city.population/100000
      })
      .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
      .addTo(map);
    });
*/

// Skill drill: create orange circle popup marker for each city, with lineweight of 4, radius is decreased by 200,000, and on a dark map 
cities.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/200000,
    color: "orange",
    fillColor: "orange",
    weight: 4
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});


// added toLocaleString() to format population with a thousands separator on city.population in the 
  // bindPopup() method 

/*
To change the map's style, change the map id using the list of Mapbox ids below:
mapbox/streets-v11
mapbox/outdoors-v11
mapbox/light-v10
mapbox/dark-v10
mapbox/satellite-v9
mapbox/satellite-streets-v11
*/



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
