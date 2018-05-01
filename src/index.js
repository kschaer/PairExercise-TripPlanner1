const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "PUT YOUR KEY IN HERE";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const firstMarkerElement = document.createElement("div");
firstMarkerElement.style.width = "32px";
firstMarkerElement.style.height = "40px";
firstMarkerElement.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(firstMarkerElement).setLngLat([-74.009, 40.705]).addTo(map);

const {buildMarker} = require("./marker");
// const marker = buildMarker("hotel", [-74, 40.1]);
// marker.addTo(map);

console.log(buildMarker);
const firstMarker = buildMarker("hotels", [-74.008, 40.705]).addTo(map);
