/**
 * EJERCICIO 4
 * Al usar var, las variables se quedan definidas a lo largo de toda la función, incluida la variable contador
 * declarada en el for, la cual da 10 al hacer el console.log().
 */

 function test(o) {
    
    var i = 0;
    
    if (typeof o == "object") {
        
        var j = 0;
    
        for(var k=0; k < 10; k++) {
            console.log(k);             // print numbers 0 through 9
        }
    
        console.log(k);                 // prints 10
    }
    
    console.log(j);                     // j is defined, but may not be initialized
}

o = {};
test(o);