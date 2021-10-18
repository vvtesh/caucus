/**
 * Load and add indoor data on the map.
 *
 * @param  {H.Map} map A HERE Map instance
 */

/**
 * Boilerplate map initialization code starts below:
 */
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
                    if (radioButtons[i].value == 0) currObj1 = addCircleToMap(map, lat1, lng1 , 5, 'rgba(200, 0, 0, 1)');
                    if (radioButtons[i].value == 1) currObj1 = addCircleToMap(map, lat1, lng1 , 45, 'rgba(200, 0, 0, 0.45)');
                    if (radioButtons[i].value == 2) currObj1 = addCircleToMap(map, lat1, lng1 , 25, 'rgba(200, 0, 0, 0.25)');
                    if (radioButtons[i].value == 3) currObj1 = addCircleToMap(map, lat1, lng1 , 25, 'rgba(200, 0, 0, 0.25)');
                    map.addObject(currObj1);

                    if (radioButtons[i].value == 0) currObj2 = addCircleToMap(map, lat2, lng2 , 5, 'rgba(200, 0, 0, 1)');
                    if (radioButtons[i].value == 1) currObj2 = addCircleToMap(map, lat2, lng2 , 45, 'rgba(200, 0, 0, 0.45)');
                    if (radioButtons[i].value == 2) currObj2 = addCircleToMap(map, lat2, lng2 , 25, 'rgba(200, 0, 0, 0.25)');
                    if (radioButtons[i].value == 3) currObj2 = addCircleToMap(map, lat2, lng2 , 25, 'rgba(200, 0, 0, 0.25)');
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

var currObj1;
var currObj2;

var lat1 = 13.0216444;
var lng1 = 80.0162790;

var lat2 = 13.0223970;
var lng2 = 80.0162147;

 function addCircleToMap(map, lat, lng, radius, color){

 //var marker = new H.map.Marker({lat:lat, lng:lng});
 //return marker;
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
                        clearAllObjects();
                        if (radioButtons[i].value % 2 == 0) {
                            currObj1 = addCircleToMap(map, lat1, lng1, 40, 'rgba(200, 0, 0, 0.6)');
                            currObj2 = addCircleToMap(map, lat2, lng2, 10, 'rgba(200, 0, 0, 0.6)');
                        } else {
                            currObj1 = addCircleToMap(map, lat1, lng1, 10, 'rgba(200, 0, 0, 0.6)');
                            currObj2 = addCircleToMap(map, lat2, lng2, 40, 'rgba(200, 0, 0, 0.6)');
                        }
                        map.addObject(currObj1);
                        map.addObject(currObj2);
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
  zoom: 18,
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

currObj1 = addCircleToMap(map, lat1, lng1, 10, 'rgba(200, 0, 0, 0.6)');
currObj2 = addCircleToMap(map, lat2, lng2, 40, 'rgba(200, 0, 0, 0.6)');

map.addObject(currObj1);
map.addObject(currObj2);

//obj1.dispose();
//check.
