'use strict';

app.factory('Map', function ($firebase, $geofire, $log, FIREBASE_URL) {
  /*  var ref = new Firebase(FIREBASE_URL + 'geolocation');
 
    var geos = $geofire(ref);

    var Map = {
    	create: function(latitude, longitude, id, objeto){
    		
		    // Trivial example of inserting some data and querying data
		    geos.$insertByLocWithId([latitude, longitude], id, objeto).
            catch(function(err) { $log.error(err); });
		    	
    	},
        find: function(latitude, longitude) {
            // Query for data
            return geos.$getPointsNearLoc([latitude,longitude],100)
                  .then(function(array) {
                    return array;
            }); 
        }
    }

    return Map;*/


});