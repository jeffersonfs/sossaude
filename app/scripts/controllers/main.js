'use strict';

angular.module('sossaudeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var lng;
    var lat;

    if ( navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position) {
        lng = position.coords.latitude;
        lat = position.coords.longitude;
        $scope.map.center.latitude = lng;
        $scope.map.center.latitude = lat;
        google.maps.visualRefresh = true;
        //alert(lng);
        //alert(position.coords.longitude);
        //$("#map").html('');

    }, function() {
      //handleNoGeolocation(true);
    });
    }

    $scope.map = {
        center: {
            latitude: -12,   
            longitude: 47
        },
        zoom: 8,
        draggable: true,
        markers: 
        [
                {
                    latitude: -7,
                    longitude: -46,
                    showWindow: true,
                    title: 'Marker 2'
                }
        ]

    };

  });
