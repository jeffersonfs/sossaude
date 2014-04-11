'use strict';
 
app.controller('PostosCtrl', function ($scope, $geofire, $log, Posto, FIREBASE_URL) {

	var ref = new Firebase(FIREBASE_URL + 'geolocation');
    var geos = $geofire(ref);

	$scope.postos = Posto.all;

 
	$scope.posto = { 'cod_municipio': '', 'nome': '', 'endereco': '', 'bairro': '', 'cidade': '', 'telefone': ''};

	$scope.submitPosto = function () {
		Posto.create($scope.posto).then(function () {
		  $scope.posto = { 'cod_municipio': '', 'nome': '', 'endereco': '', 'bairro': '', 'cidade': '', 'telefone': ''};
		});
	};

	$scope.deletePosto = function (postoId) {
		Posto.delete(postoId);
	};

	$scope.submitArquivo = function () {

		var f = document.getElementById('file').files[0],
        r = new FileReader();

         r.onloadend = function(e){
    		var data = e.target.result;
    		//send you binary data via $http or $resource or do anything else with it
  		}

	  	r.onload = function (evt) {
	  		var texto = evt.target.result;
	  		//alert(texto);

	  		var allText = texto;
            var lineArr = allText.split('\n'); 
            for (var i = 0; i < lineArr.length; i++) {
            	if (lineArr[i] != null && lineArr[i] != ""){
			    var atributos = lineArr[i].split(',');
			    var j = 0;
			    $scope.posto = {
			    	latitude : atributos[0],
			    	longitude : atributos[1], 
			    	codMunicipio: atributos[2], 
			    	nome: atributos[4], 
			    	endereco: atributos[5], 
			    	bairro: atributos[6], 
			    	cidade: atributos[7], 
			    	telefone: atributos[8]
			    };


			    Posto.create($scope.posto).then(function (postoId) {
			    	
			    	var postoBD = Posto.find(postoId);
			    	//alert(postoBD.latitude);
			    	/*var postoObjeto = { latitude : postoBD.latitude, 
				    	longitude : postoBD.longitude, 
				    	codMunicipio: postoBD.codMunicipio, 
				    	nome: postoBD.nome, 
				    	endereco: postoBD.endereco, 
				    	bairro: postoBD.bairro, 
				    	cidade: postoBD.cidade, 
				    	telefone: postoBD.telefone
			    	};*/
  					// Trivial example of inserting some data and querying data
    				//geos.$insertByLocWithId(, postoId, posto).catch(function(err) { $log.error(err); });

    				geos.$insertByLocWithId([parseFloat(postoBD.latitude), 
    				 parseFloat(postoBD.longitude)], postoId, angular.fromJson(angular.toJson(postoBD))).catch(function(err) { $log.error(err); })
    					.then(function() {
    						var quantidade = parseInt($("#fileContents").text());
    						quantidade++;
    						$("#fileContents").html(quantidade);
    					});
    // Query for data,
  				//geos.$insertByLocWithId([parseFloat(atributos[0] ,parseFloat(atributos[1]) ], postoId, posto);
            	//	catch(function(err) { $log.error(err); });
  				
				});
			}
		}
    	    //document.getElementById("fileContents").innerHTML = evt.target.result;
	    }
	    r.onerror = function (evt) {
	        document.getElementById("fileContents").innerHTML = "error reading file";
	    }

	    //r.readAsDataURL(f);
	    r.readAsText(f, "UTF-8");
        //alert(f);
		//var data = $.csv.toObjects("/home/jefferson/Downloads/ubs-reduzido.csv");
		
		//alert(data);
		/*var rawFile = new XMLHttpRequest();
		rawFile.open("GET", "file:///home/jefferson/Downloads/ubs-reduzido.csv", true);
		rawFile.onreadystatechange = function ()
		{
		    if(rawFile.readyState === 4)
		    {
		        if(rawFile.status === 200 || rawFile.status == 0)
		        {
		            var allText = rawFile.responseText;
		            var lineArr = allText.split('\n'); 
		            for (var i = 0; i < lineArr.length; i++) {
					    var atributos = lineArr.split(',');
					    var j = 0;
					    var posto = {
					    	'cod_municipio': atributos[2], 
					    	'nome': atributos[3], 
					    	'endereco': atributos[4], 
					    	'bairro': atributos[5], 
					    	'cidade': atributos[6], 
					    	'telefone': atributos[7]
					    };
					    Posto.create($scope.posto).then(function (postoId) {
		  					$scope.posto = { 'cod_municipio': '', 'nome': '', 'endereco': '', 'bairro': '', 'cidade': '', 'telefone': ''};
		  					Map.create(parseFloat(atributos[0]), 
		  							   parseFloat(atributos[1]),
		  							   postoId);
						});
					}


		            //alert(allText);
		        }
		    }
		}
		rawFile.send(null);*/		
	};


});