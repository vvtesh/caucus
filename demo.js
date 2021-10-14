/**
 * Load and add indoor data on the map.
 *
 * @param  {H.Map} map A HERE Map instance
 */

/**
 * Boilerplate map initialization code starts below:
 */
function clearAllObjects() {
	currObj.dispose(); 
}

function changeTime() {
	     clearAllObjects();
	     
	     var radioButtons = document.getElementsByName("time");
             for(var i = 0; i < radioButtons.length; i++)
             {
                 if(radioButtons[i].checked == true)
                 {
		 	if (radioButtons[i].value == 0) currObj = addCircleToMap(map, lat1, lng1 , 5, 'rgba(200, 0, 0, 1)');
		 	if (radioButtons[i].value == 1) currObj = addCircleToMap(map, lat1, lng1 , 45, 'rgba(200, 0, 0, 0.45)');
		 	if (radioButtons[i].value == 2) currObj = addCircleToMap(map, lat1, lng1 , 25, 'rgba(200, 0, 0, 0.25)');
		 	if (radioButtons[i].value == 3) currObj = addCircleToMap(map, lat1, lng1 , 25, 'rgba(200, 0, 0, 0.25)');
			map.addObject(currObj);
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
	time = time + 1000;
	setTimeout(function(){ playOnce(0); }, time);
	time = time + 1000;
	setTimeout(function(){ playOnce(1); }, time);
	time = time + 1000;
	setTimeout(function(){ playOnce(2); }, time);
	time = time + 1000;
	setTimeout(function(){ playOnce(3); }, time);
	}
}

var currObj;
var lat1 = 18.9225423;
var lng1 = 72.8341395;
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
                        currObj.dispose();
		 	if (radioButtons[i].value == 0) currObj = addCircleToMap(map, lat1, lng1, 10, 'rgba(200, 0, 0, 0.1)');
		 	if (radioButtons[i].value == 1) currObj = addCircleToMap(map, lat1, lng1, 20, 'rgba(200, 0, 0, 0.2)');
		 	if (radioButtons[i].value == 2) currObj = addCircleToMap(map, lat1, lng1, 30, 'rgba(200, 0, 0, 0.4)');
		 	if (radioButtons[i].value == 3) currObj = addCircleToMap(map, lat1, lng1, 50, 'rgba(200, 0, 0, 0.6)');
			map.addObject(currObj);
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
  center: { lat: lat1, lng: lng1 },
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

currObj = addCircleToMap(map, lat1, lng1, 50, 'rgba(200, 0, 0, 0.6)');

map.addObject(currObj);

//obj1.dispose(); 
//check.