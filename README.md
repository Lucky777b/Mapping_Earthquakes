# Mapping Earthquakes 

## Overview 

The overview of this project was to create an interactive map visualization by using the latest GeoJSON data on earthquakes occurring around the world. The purpose was to use javascript, leaflet, mapbox, d3, and geoJSON data to create a visualization that would allow a user to filter between different base map layer styles, and be able to choose which of the three geoJSON datasets they wanted to see visualized on the map. The data was then able to be plotted onto a mapbox map style using MapBox API request.

## Resources 
* Visual Studio Code 
* HTML
* JavaScript
* D3
* leaflet
* Mapbox
* Data: 
  * [USFS Earthquake geoJSON Data](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)
  * [USGS Major Earthquake geoJSON Data](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson)
  * [Tectonic Plate geoJSON Data](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json)
  

## Results 

Using the map layer filters, located in the upper right-hand side, the user can switch between different map layers. There are 3 different map layers to choose from: 'Streets', 'Satellite', and 'Night Navigation'. Below the map layer choices, is another box that the user can click on/off depending on whether they wanted to see all 3 earthquake data visualizations, or just one or two. The 3 options to choose from are: 'Earthquakes', 'Tectonic Plates', and 'Major Earthquakes', as shown in 'Fig. A' below. 

Fig. A)

![Map Layer & Filter Choices](https://github.com/Lucky777b/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/images/layerFilters.png)

There is also a legend, located in the bottom right-hand corner of the map, which describes what the colors of the earthquake circles mean. The colors are in reference to the size of the earthquake, or what is known as the magnitude. I made two legends, one for the 'Earthquakes' map layer, and one for the 'Major Earthquakes' map layer. I did this so that the user can further specify whether the magnitude of each earthquake marker was on the lower scale, magnitude of 5 or less (Fig. B), and between the major earthquakes, which have magnitudes of 5 or higher (Fig. C). 

Fig. B)

![EQ legend](https://github.com/Lucky777b/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/images/EQLegend.png)


Fig. C)

![Major EQ legend](https://github.com/Lucky777b/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/images/majorEQLegend.png)

As shown in 'Fig. D' below, this is an example of how the earthquake map will look once webpage is initially opened: 

Fig. D) 

![Initial_webpage_load](https://github.com/Lucky777b/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/images/initial_webpage_EQ.png)

I have also provided examples of how the map will look when in 'Night Navigation', (Fig. E), and 'Satellite', (Fig. F), map layers. 

Fig. E) 

![Night Navigation](https://github.com/Lucky777b/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/images/allEQ_night_nav.png)

The satellite layer also includes how the map looks when the user clicks on one of the earthquake markers, in which a pop-up comes up that provides information about the magnitude of that earthquake and the location of where it occurred. 

Fig. F) 

![Satellite](https://github.com/Lucky777b/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/images/allEQ_satellite.png)

Here is an example of how the map will look if the user decides they would only like to see the tectonic plate fault line, but not the earthquake markers (Fig. G):

Fig. G) 

![tectonicFaultLine](https://github.com/Lucky777b/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/images/tectonicPlates_satellite.png)

I have also provided an example of what one would see if they tried to click on the tectonic plate fault line boundary lines within the map, it will provide the name of what that tectonic fault line is named, as shown below (Fig. H):

Fig. H) 

![faultName](https://github.com/Lucky777b/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/images/plate_boundary_name.png)

