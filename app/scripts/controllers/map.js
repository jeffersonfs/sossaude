'use strict';
 
app.controller('MapCtrl', function ($scope, Map) {
 
 	    $scope.map = {
 	    control: {},
        center: {
            latitude: -7.52759814262368,   
            longitude: -46.062304973601
        },
        zoom: 8,
        draggable: true,
        markers:[]

    };

    Map.create();

    if ( navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position) {
        var lng = position.coords.latitude;
        var lat = position.coords.longitude;
        $scope.map.center.latitude = lng;
        $scope.map.center.latitude = lat;
        $scope.map.control.refresh({latitude: lng, longitude: lat});
        $scope.map.control.getGMap().setZoom(8);
    }, function() {
      //handleNoGeolocation(true);
    });
    }

});