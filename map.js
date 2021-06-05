// Declaring the location of the citys.
const telAviv = {lat: 32.085300, lng: 34.781769};
const ramatGan = {lat: 32.068424, lng: 34.824783};
const givataim = {lat: 32.070808, lng: 34.812881};

// An array of the citys.
const mapArray = [telAviv, ramatGan, givataim];

let map;
let markers = [];

// Adds a marker to the map and push to the array.
function addMarker(location) {
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  markers.push(marker);
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  setMapOnAll(null);
  markers = [];
}

// Initiating the map on the page.
function initMap() {
  let mapOptions = {
    zoom: 13,
    center: mapArray[0],
  };
map = new google.maps.Map(document.getElementById('map'), mapOptions);
addMarker(mapArray[0]);
}

// Counter for the array.
let counter = 0;

// Getting the previous location and disables this button or enables the next button if needed.
function prev() {
  if (counter === 2) {
      document.getElementById("btn2").disabled = false;
  }
  else {
      document.getElementById("btn1").disabled = true;
  }
  counter--;
  map.setCenter(mapArray[counter]);
  deleteMarkers();
  addMarker(mapArray[counter]);
}

// Getting the next location and disables this button or enables the prev button if needed.
function next() {
  if (counter === 0) {
      document.getElementById("btn1").disabled = false;
  }
  else {
      document.getElementById("btn2").disabled = true;
  }
  counter++;
  map.setCenter(mapArray[counter]);
  deleteMarkers();
  addMarker(mapArray[counter]);
}