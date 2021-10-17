/**
 * EJERCICIO 5
 * Aquí, en el primer console.log(), sale undefined porque por hoisting se sabe que existe una varaible scope dentro de
 * este scope, pero como aun no ha sido inicializada dentro de este bloque de código da undefined. Javascript sabe que va a ser sobreescrita
 * en ese bloque de código, pero no sabe su valor.
 * El segundo console log ocurre al ser inicializada la variable dentro de ese scope, y el tercero ocurre en el scope de fuera de la funcion.
 */
 var scope = "global";

 function f() {
 
     console.log(scope);             // WTF !!
     var scope = "local";
     console.log(scope);             // Prints "local"
 }
 
 f();
 
 console.log(scope);                 // Prints "global"