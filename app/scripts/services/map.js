'use strict';

app.factory('Map', function ($firebase, $geofire, $log, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'geolocation');
 
    var geos = $geofire(ref);

    var Map = {
    	create: function(latitude, longitude, id, objeto){
    		
		    // Trivial example of inserting some data and querying data
		    geos.$insertByLocWithId([latitude, longitude], id, objeto).
            catch(function(err) { $log.error(err); });
		    	
    	},
        find: function(latitude, longitude, cb) {
            // Query for data
            return geos.$getPointsNearLoc([latitude,longitude],100)
            .then( 
                function(array) { 
                    //console.log("Teste");
                    //for (var i = 0; i < array.length; i++)
                    //    console.log("A found point = ", array[i]);
                    cb(array);
            });
                  
        }
    }

    return Map;


});