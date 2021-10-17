/**
 * EJERCICIO 2
 * al no usar var dentro de la función hemos sobreescrito la variable globlal scope 
 * y conservado la variable myscope fuera de la función
 */
 scope = "global";

 function checkscope2() {
     
     scope = "local";
     myscope = "local";
 
     return [scope, myscope];
 }
 
 console.log(checkscope2());
 
 console.log(scope);
 console.log(myscope);           // => WTF ¿? La variable declarada dentro checkscope2() se conserva, ya que es una variable globlal