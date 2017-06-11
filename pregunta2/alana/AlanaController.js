
/**
 * Sistema:             TestDeConocimiento
 * Nombre:              AlanaController.js
 * Descripcion:         Controlador que invoca llamado del metodo del service angular
 *
 * @author montieldaniel
 * @version 1.0
 * @since 09/06/2017
 */
angular.module('AlanaModule')
.controller('AlanaController',['$scope','$rootScope','AlanaService',AlanaController]);

function AlanaController($scope,$rootScope,AlanaService)
{

    /**
     * Nombre:                  loadImages
     * Descripcion:             Metodo  que invoca llamado del metodo del service angular
     *                          Muestra mensaje en caso de error o almacena error en caso de fallo
     *
     * @version 1.0
     * @author montiedaniel
     * @since 09/06/2017
     */
   function loadImages() {
        console.log('entrando a la funcion loadImages');
        AlanaService.getAllImages()(auth)
            .then(function(data){
                console.log('se realizo consulta exitosamente');
                alert('se llamo exitosamente al servidor');
            })
            .catch(function (error) {
                console.log('se produjo un error en la consulta');
                $rootScope.errorOcurrido = error;
            });
        console.log('saliendo a la funcion loadImages');
    }
    
}