/**
 * EJERCICIO 3
 * La función checkscope devuelve el contenido de la función anidada, ya que en el return
 * usa la función anidada en lugar de la variable local dentro de su scope. 
 * Al llamar a esa función se sobreescribe esa varaible en el scope anidado, y es por eso
 * que en el console log sale nested.
 * Si usas scope directamente fuera de la función sale la variable global
 */
 var scope = "global scope";

 function checkscope() {
     
     var scope = "local scope";
     
     function nested() {
         
         var scope = "nested scope";
         return scope;
     }
     return nested();
 }
 
 console.log(checkscope());              // => "nested scope"
 console.log(scope);                     // => "global scope"