
/**
 * EJERCICIO 6
 * Dentro de la función el primer console.log() da undefined, ya que se ha declarado pero no inicializado,
 * luego se inicializa y da el valor "local".
 * Fuera de la varaible hay otra varaible scope que es ignorada a lo largo de la función, ya que se sobreescribe 
 * al inicializarla de nuevo en el scope de la función.
 * El último console log devuelve "global", ya que se encuentra fuera de la función.
 */

var scope = "global";

function f() {

    var scope;
    console.log(scope);
    scope = "local";
    console.log(scope);
}

f();

console.log(scope);