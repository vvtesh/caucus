/**
 * Load and add indoor data on the map.
 *
 * @param  {H.Map} map A HERE Map instance
 */

/**
 * Boilerplate map initialization code starts below:
 */
 function addCircleToMap(map, lat, lng, radius, color){
 var obj =
  new H.map.Circle(
    // The central point of the circle
    {lat: lat, lng: lng},
    // The radius of the circle in meters
    radius,
    {
      style: {
        strokeColor: color, // Color of the perimeter
        lineWidth: 2,
        fillColor: color  // Color of the circle
      }
    }
  );
  return obj;
}

// Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: 'dSC6dSLmhYnq3ivXvl8TtdNk78_baCy-xYQMOvAKCPo'
});
var defaultLayers = platform.createDefaultLayers();

// Step 2: initialize a map
var map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
  zoom: 15,
  center: { lat: 18.9067, lng: 72.8147 },
  pixelRatio: window.devicePixelRatio || 1
});

// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

// Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Step 4: create the default UI component, for displaying bubbles
var ui = H.ui.UI.createDefault(map, defaultLayers);

var obj1 = addCircleToMap(map, 18.9067, 72.8147, 80, 'rgba(0, 128, 0, 0.3)');
var obj2 = addCircleToMap(map, 18.914042, 72.824693, 100, 'rgba(200, 0, 0, 0.3)');
var obj3 = addCircleToMap(map, 18.914042, 72.818693, 100, 'rgba(200, 0, 0, 0.3)');
var obj4 = addCircleToMap(map, 18.909, 72.817693, 100, 'rgba(200, 10, 0, 0.3)');
var obj5 = addCircleToMap(map, 18.912042, 72.821093, 100, 'rgba(200, 0, 0, 0.3)');

map.addObject(obj1);
map.addObject(obj2);
map.addObject(obj3);
map.addObject(obj4);
map.addObject(obj5);

//obj1.dispose();
//obj2.dispose();
