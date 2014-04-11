'use strict';
 
app.controller('MapCtrl', function ($scope, Map, $geofire, $log, FIREBASE_URL) {


 	$scope.map = {
 	    control: {},
        center: {
            latitude: -7.52759814262368,   
            longitude: -46.062304973601
        },
        zoom: 8,
        draggable: true,
       // markers:[]

    };

    $scope.markers = [];


    //Map.create();

    if ( navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        $scope.map.center.latitude = latitude;
        $scope.map.center.longitude = longitude;
        $scope.map.control.refresh({latitude: latitude, longitude: longitude});
        $scope.map.control.getGMap().setZoom(8);
        Map.find(latitude, longitude, function(array){
            $scope.markers = array;
            
            // var arrayLatLog = [];
            for(var i = 0; i < $scope.markers.length; i++){
                $scope.markers[i].onMarkerClicked = function (m) {
                    //onMarkerClicked(marker);
                    //alert(marker.latitude);
                    m.showWindow = true;
                };
                //$scope.markers[i].closeClick = function () {
                    //marker.showWindow = false;
                    //$scope.$apply();
                //};
            }
            // $scope.markers = arrayLatLog;
            $scope.map.control.refresh({latitude: $scope.map.center.latitude,
             longitude: $scope.map.center.longitude});
            $scope.map.control.getGMap().setZoom(8);
        });
        
    }, function() {
        alert("sem localizacao");
      //handleNoGeolocation(true);
    });
    }

});
