function oddsums(n) {

    let total = 0, result = []; 
    
    for(let x = 1; x <= n; x++) {
        let odd = 2*x-1;
        total += odd;
        result.push(total);
    }
    /**
     * odd y x son let declaradas dentro del loop, las cuales desaparecen al salir fuera 
     * del bloque de código en las que se declaran
     */
    // console.log(x);              
    // console.log(odd);            
    console.log(total);          //Muestra el resultado del bucle
    
    return result;
}

console.log(oddsums(5));            // Returns [1,4,9,16,25]