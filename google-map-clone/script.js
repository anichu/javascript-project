mapboxgl.accessToken =
  'pk.eyJ1IjoiYW5pc21vbGxhIiwiYSI6ImNrcjZucDB4cjNoaWcyb284MHc2cmNybWEifQ.VV3ezH6gAxdknGgzVAIBcw';
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([-2.24, 53.48]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15,
  });

  // for rotate the map
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  // for search the specific place
  map.addControl(
    new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    }),
    'top-left'
  );
}
