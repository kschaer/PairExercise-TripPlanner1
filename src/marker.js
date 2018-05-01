const mapboxgl = require("mapbox-gl");

const iconUrls = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png",
};

module.exports = {
  buildMarker : function(type, coordinates){
    const newMarker = document.createElement("div");
    newMarker.style.height = "40px";
    newMarker.style.width = "32px";
    newMarker.style.backgroundImage = `url(${iconUrls[type]})`;
    //alert("type: ", iconUrls[type]);
    console.log("i'm alive");
    //return newMarker;
    return new mapboxgl.Marker(newMarker).setLngLat(coordinates);

  }
};
