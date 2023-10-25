/**
 * se utiliza para crear un nuevo arreglo a partir de otro, aplicando una función a cada elemento del arreglo
 */

const numeros = [1, 2, 3, 4, 5]

const numerosDuplicados = numeros.map(numero => {
    //más código xD
    return numero * 2;
});

console.log("Arreglo original", numeros);
console.log("Copia del arreglo original", numerosDuplicados);
console.log("Arreglo original", numeros);