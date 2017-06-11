
/**
     * Nombre:                  ejercicio1
     * Descripcion:             Metodo que realiza el ejercicio1
     *
     * @version 1.0
     * @author montiedaniel
     * @since 09/06/2017
     */
function ejercicio1() {
   console.log('entrando a la funcion ejercicio1');
   var inicio = parseInt(document.getElementById("inicio").value);
   var fin = parseInt(document.getElementById("fin").value);
   if (validaCampos(inicio,fin)){
   limpiarpanel();
   var obtuvoresultado = false;
   var resumen = 'f('+inicio.toString()+' - '+fin.toString()+') = Array ( ';
   var array = [];
   var numero = 0;
   var divisores = "";
   var cuadradoperfecto = "";
        var numeroselect;
        var acumuladorfinal = 0;
        // for intervalo
        for (j = inicio; j<=fin; j++){
            numero = j;  
            
            //for de busqueda divisores de numero que se 
            // encuentra en el intervalor
            for (i = 1; i <=numero; i++) {
                if (numero%i==0)
                    {
                        // consiguio divisor
                        divisores =  divisores + i.toString() + ',';
                        array.push(i);     
                    }
                
            }
            for (numeroenarray in array){
                numeroselect = array[numeroenarray];
                acumuladorfinal = Math.pow(numeroselect,2) + acumuladorfinal;
            }
            
            if ((Math.sqrt(acumuladorfinal))%1==0)
            {
                cuadradoperfecto = "Si";
                console.log('suma de los cuadrados de los divisores de numero : ' + acumuladorfinal);
                console.log('este es ' + numero);
                obtuvoresultado = true;
                resumen=resumen + '['+numero.toString()+'] => '+acumuladorfinal.toString() + ' ';
            }
            else{
                cuadradoperfecto = "No";
            }
            var tbody = document.getElementById('tbody');
            $('#myTable > tbody:last-child').append('<tr><td>'+numero.toString()+'</td><td>'+divisores.slice(0, -1)+'</td><td>'+acumuladorfinal.toString()+'</td><td>'+cuadradoperfecto+'</td></tr>');
             acumuladorfinal = 0;  
             array = [];
             divisores = "";
             cuadradoperfecto="";
        }
   revisarResultado(obtuvoresultado,resumen);
   }
   console.log('saliendo de la funcion ejercicio1');
}
/**
     * Nombre:                  revisarResultado
     * Descripcion:             revisa si hubieron cuadrados perfectos encontrados y los coloca en el panel de resumen
     *
     * @version 1.0
     * @author montiedaniel
     * @since 09/06/2017
     */
function revisarResultado(obtuvoresultado,resumen){
    if (!obtuvoresultado){
        var div = document.getElementById('resultado');
        div.innerHTML = 'No se encontro algun numero que cumpla con el ejercicio';
    }
    else{
        resumen = resumen + ')';
        var div = document.getElementById('resultado');
        div.innerHTML = resumen;
    }
}
/**
     * Nombre:                  validaCampos
     * Descripcion:             valida los campos antes de realizar calculos
     *
     * @version 1.0
     * @author montiedaniel
     * @since 09/06/2017
     */

function validaCampos(inicio,fin){
    if ((!document.getElementById("inicio").value) || (!document.getElementById("fin").value)) {
             alert('Debes rellenar todos los campos');
    }else if(inicio>fin){
            alert('El inicio debe ser mayor que el fin');
    }else if(!/^[0-9]+$/.test(inicio)){
            alert('El inicio no es un numero');
    }else if(!/^[0-9]+$/.test(fin)){
            alert('El fin no es un numero');
    }
    else{
        return true;
    }
    
}
/**
     * Nombre:                  limpiapanel
     * Descripcion:             vacia la tabla y pone elementos visibles
     *
     * @version 1.0
     * @author montiedaniel
     * @since 09/06/2017
     */

function limpiarpanel(){
    console.log('entrando a la funcion limpiarpanel');
    $("#tbody").empty();
    document.getElementById("p1").style.visibility = "visible";
    document.getElementById("p2").style.visibility = "visible";
    document.getElementById("table-scroll").style.visibility = "visible";
    document.getElementById("panelresultado").style.visibility = "visible";    
    console.log('saliendo de la funcion limpiarpanel');
}