app.factory('Posto',  function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'postos');
 
    var postos = $firebase(ref);

    var Posto = {
    	all: postos,
		create: function (posto) {
		  return postos.$add(posto).then(function (ref){
		  	return ref.name();
		  });
		},
		find: function (postoId) {
		  return postos.$child(postoId);
		},
		delete: function (postoId) {
		  return postos.$remove(postoId);
		}
    };

    return Posto;
});