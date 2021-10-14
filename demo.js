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

function changeTime() {
	     var radioButtons = document.getElementsByName("time");
             for(var i = 0; i < radioButtons.length; i++)
             {
                 if(radioButtons[i].checked == true)
                 {
                     obj1.dispose();
		 	if (radioButtons[i].value == 0) obj1 = addCircleToMap(map, 18.9225423, 72.8341395, 10, 'rgba(200, 0, 0, 0.1)');
		 	if (radioButtons[i].value == 1) obj1 = addCircleToMap(map, 18.9225423, 72.8341395, 20, 'rgba(200, 0, 0, 0.2)');
		 	if (radioButtons[i].value == 2) obj1 = addCircleToMap(map, 18.9225423, 72.8341395, 30, 'rgba(200, 0, 0, 0.4)');
		 	if (radioButtons[i].value == 3) obj1 = addCircleToMap(map, 18.9225423, 72.8341395, 50, 'rgba(200, 0, 0, 0.6)');
			map.addObject(obj1);
                 }
             }
         
}

// Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: 'dSC6dSLmhYnq3ivXvl8TtdNk78_baCy-xYQMOvAKCPo'
});
var defaultLayers = platform.createDefaultLayers();

// Step 2: initialize a map
var map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
  zoom: 16,
  center: { lat: 18.9225423, lng: 72.8341395 },
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

var obj1 = addCircleToMap(map, 18.9225423, 72.8341395, 50, 'rgba(200, 0, 0, 0.6)');

map.addObject(obj1);

//obj1.dispose();
