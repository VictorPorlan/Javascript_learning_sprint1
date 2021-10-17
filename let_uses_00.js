/**
 * Variables declaradas por let tienen por alcance el bloque
 * en el que se han definido, así mismo, como en cualquier bloque interno. 
 * De esta manera, let trabaja muy parecido a var. 
 * La más notable diferencia es que el alcance de una variable var es la función contenedora.
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let
 */

/**
 * Se sobreescribe el valor de la variable x, pasa de 31 a 71
 *  */ 
 function varTest() {

    var x = 31;

    if (true) {
        var x = 71;             
        console.log(x);         // 71
    }

    console.log(x);             // 71
}



/**
 * En este caso el valor no se sobreescribe, simplemente se almacenan dos variables
 * con el mismo nombre pero con unas funcionalidades diferentes, ya que las var se almacenan en
 * local y las variables let desaparecen al salir del bloque de codigo en las que se declaran.
 * Es por esto que en lugar de sobreescribirse simplemente se crea una nueva con el mismo nombre.
 */
function letTest() {

  var x = 31;
  
  if (true) {
      let x = 71;               
      console.log(x);           // 71
    }
    
    console.log(x);             // 31
}


// console.log(u);      Esto da ReferenceError (era por probar) no funciona el hoisting    
/**
 * w aparece undefined ya que por hoisting sabe que existe una variable que se llama así,
 * pero el hoisting no funciona con la inicialización de variables. Si w fuera una función que hace return de una string,
 * si no me equivoco, si que funcionaría el console.log().
 * var x / let x son varaibles diferentes, igual que antes
 * z desaparece al acabar el bloque de código en el que se ha declarado. 
 * w si que da un valor ahora, ya que la variable se ha inicializado
 */

function hoistingTest() {

    console.log(w);               
    // console.log(z);               // ReferenceError

    var x = 31;
    let y = 91;
    u = 1;                        
    
    if (true) {
        let x = 71;               
        console.log(x);           // 71
        console.log(y);           // 91
        let z = 101;
        var w = 1001;             
    }
      
    console.log(x);               // 31
    // console.log(z);             // ReferenceError
    console.log(w);               // 1001
  }


varTest();

letTest();

hoistingTest();
/**
 * Esto es una variable globar, se ha declarado sin var ni let
 * el hoisting no funciona, por lo probado arriba
 */
console.log(u) 