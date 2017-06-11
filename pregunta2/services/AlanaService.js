/**
 * Sistema:             TestDeConocimiento
 * Nombre:              AlanaService.js
 * Descripcion:         Service angular encargador de llamar metodos del servidor referentes a Alana
 *
 * @author montieldaniel
 * @version 1.0
 * @since 09/06/2017
 */
angular.module('ServicesModule')
    .service('AlanaService',['$q','$http','$rootScope',AlanaService]);

function AlanaService($q,$http,$rootScope) {

    this.loadImagess = loadImages;
    
    /**
     * Nombre:                  loadImages
     * Descripcion:             Metodo  que llama a metodo del servidor para consultar todas las imagenes
     *
     * @version 1.0
     * @author montiedaniel
     * @since 09/06/2017
     */
    
    function loadImages() {
        console.log('entrando a la funcion loadImages');
        var defered = $q.defer();
        var promise = defered.promise;
        $http
        ({
            method: 'GET',
            url: 'http://IPDELSERVIDOR:8080/webservice/api/images/all/',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function success(response)
        {
            console.log('llamada success : '+response);
            defered.resolve(response.data);
        },function error(response)
        {
            console.log('Se genero un error: '+response);
            var error = response.data;
            defered.reject(error.mensaje);
        });
        return promise;
        console.log('entrando a la funcion loadImages');
    }
}