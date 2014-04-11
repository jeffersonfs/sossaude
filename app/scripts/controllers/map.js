'use strict';
 
app.controller('MapCtrl', function ($scope, Map, $geofire, $log, FIREBASE_URL) {


 	$scope.map = {
 	    control: {},
        center: {
            latitude: -7.52759814262368,   
            longitude: -46.062304973601
        },
        infoWindow: {
                coords: {
                    latitude: 36.270850,
                    longitude: -44.296875
                },
                options: {
                    disableAutoPan: true
                },
                show: false
        },
        zoom: 8,
        draggable: true,
       // markers:[]

    };

    var onMarkerClicked = function (marker) {
            marker.showWindow = true;
            alert("poxa");
            //window.alert("Marker: lat: " + marker.latitude + ", lon: " + marker.longitude + " clicked!!")
    };

    $scope.markers = [];

    $scope.onMarkerClicked = onMarkerClicked;
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
            for(var i = 0; i < array.length; i++){
                array[i].showWindow = false;
            }
            $scope.markers = array;

            $scope.map.control.refresh({latitude: $scope.map.center.latitude,
             longitude: $scope.map.center.longitude});
            $scope.map.control.getGMap().setZoom(8);
        });
        
    }, function() {
        alert("sem localizacao");
      //handleNoGeolocation(true);
    });
    }

     _.each($scope.markers, function (marker) {
        //marker.showWindow = false;
        marker.closeClick = function () {
            marker.showWindow = false;
            $scope.$apply();
        };
        marker.onClicked = function () {
            onMarkerClicked(marker);
        };
    });



});



