/**
 * MODIFICANDO EL ARREGLO ORIGINAL
 */


const numeros = [1, 2, 3, 4, 5]

//cada foreach en la función pide como parámetro a su vez esa función puede recibir 3 argumentos: elemento, índice y el arreglo completo

console.log("original", numeros);

numeros.forEach((gatoONumero, indice, arregloCompleto) => { //siempre es en este orden, lo dice en la documentación
    console.log(`${indice}.-${gatoONumero} ======= ${arregloCompleto}`);
    arregloCompleto[indice] = gatoONumero * 2
})

console.log("original modificado", numeros);
