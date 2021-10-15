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

function clearAllObjects() {
	currObj1.dispose();
	currObj2.dispose();
}

function changeTime() {
	     clearAllObjects();
	     
	     var radioButtons = document.getElementsByName("time");
             for(var i = 0; i < radioButtons.length; i++)
             {
                 if(radioButtons[i].checked == true)
                 {
                    if (radioButtons[i].value == 0) currObj1 = addCircleToMap(map, lat1, lng1, 5, 'rgba(200, 0, 0, 0.25)');
                    if (radioButtons[i].value == 1) currObj1 = addCircleToMap(map, lat1, lng1, 45, 'rgba(200, 0, 0, 0.25)');
                    if (radioButtons[i].value == 2) currObj1 = addCircleToMap(map, lat1, lng1, 25, 'rgba(200, 0, 0, 0.25)');
                    if (radioButtons[i].value == 3) currObj1 = addCircleToMap(map, lat1, lng1, 25, 'rgba(200, 0, 0, 0.25)');
                    map.addObject(currObj1);

                    if (radioButtons[i].value == 0) currObj2 = addCircleToMap(map, lat2, lng2, 5, 'rgba(200, 50, 0, 0.25)');
                    if (radioButtons[i].value == 1) currObj2 = addCircleToMap(map, lat2, lng2, 15, 'rgba(200, 50, 0, 0.25)');
                    if (radioButtons[i].value == 2) currObj2 = addCircleToMap(map, lat2, lng2, 25, 'rgba(200, 50, 0, 0.25)');
                    if (radioButtons[i].value == 3) currObj2 = addCircleToMap(map, lat2, lng2, 55, 'rgba(200, 50, 0, 0.25)');
                    map.addObject(currObj2);
                 }
             }
}

function playOnce(item) {
	var radioButtons = document.getElementsByName("time");
	radioButtons[item].checked = true;
	changeTime();
}

function play() {
	var time = 0;

	for (var i=0; i<4; i++) {
	time = time + delay;
	setTimeout(function(){ playOnce(0); }, time);
	time = time + delay;
	setTimeout(function(){ playOnce(1); }, time);
	time = time + delay;
	setTimeout(function(){ playOnce(2); }, time);
	time = time + delay;
	setTimeout(function(){ playOnce(3); }, time);
	}
}

var delay = 300;
var currObj1;
var currObj2;
var lat1 = 51.580256;
var lng1 = 0.111558;

var lat2 = 51.572809234227584;
var lng2 = 0.11035499450206727;

// Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: 'dSC6dSLmhYnq3ivXvl8TtdNk78_baCy-xYQMOvAKCPo'
});
var defaultLayers = platform.createDefaultLayers();

// Step 2: initialize a map
var map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
  zoom: 15,
  center: { lat: lat1-0.004, lng: lng1 },
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

currObj1 = addCircleToMap(map, lat1, lng1 , 25, 'rgba(200, 0, 0, 0.25)');
currObj2 = addCircleToMap(map, lat2, lng2 , 25, 'rgba(200, 0, 0, 0.25)');
map.addObject(currObj1);
map.addObject(currObj2);
