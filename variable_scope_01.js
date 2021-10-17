/**
 * EJERCICIO 1
 * Aquí el return está priorizando la variable local a la global.
 */
var scope = "global";

function checkscope() {
    var scope = "local";
    return scope;
}

console.log(checkscope());      // => "local"