/**
 * Load and add indoor data on the map.
 *
 * @param  {H.Map} map A HERE Map instance
 */

/**
 * Boilerplate map initialization code starts below:
 */
function startFreeTextSearch() {
    var q = document.getElementsByName("free_text_text_box")[0].value;
    geocode(platform, q);
}

function geocode(platform, q) {
  var geocoder = platform.getSearchService(),
      geocodingParameters = {
        q: q
      };

  geocoder.geocode(
    geocodingParameters,
    onSuccess,
    onError
  );
}

function onSuccess(result) {
  var locations = result.items;
 /*
  * The styling of the geocoding response on the map is entirely under the developer's control.
  * A representitive styling can be found the full JS + HTML code of this example
  * in the functions below:
  */
  if (locations.length > 0)
    addLocationsToMap(locations);

}

function addLocationsToMap(locations){
  clearAllObjects();
  map.dispose();
  
    lat1 = locations[0].position.lat;
    lng1 = locations[0].position.lng;

    map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
      zoom: z,
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

    var address = "<font color=brown><pre>";
    address = address + "              {" + "\n";
    address = address + "                title: " + locations[0].title + "\n";
    address = address + "                id: " + locations[0].id + "\n";
    address = address + "                resultType: " + locations[0].resultType + "\n";
    address = address + "                address: {" + "\n";
    address = address + "                  label: " + locations[0].address.label + "\n";
    address = address + "                }" + "\n";
    address = address + "                density: {" + "\n";
    address = address + "                      0000: 0.05" + "\n";
    address = address + "                      0000: 0.10" + "\n";
    address = address + "                      0000: 0.25" + "\n";
    address = address + "                      0000: 0.60" + "\n";
    address = address + "                }" + "\n";
    address = address + "              }" + "\n";
    address = address + "</pre></font>";
    document.getElementById('responsejson').innerHTML = address;
}

/**
 * This function will be called if a communication error occurs during the JSON-P request
 * @param  {Object} error  The error message received.
 */
function onError(error) {
  alert('Can\'t reach the remote server');
}


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
var z = 16;
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
  zoom: z,
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