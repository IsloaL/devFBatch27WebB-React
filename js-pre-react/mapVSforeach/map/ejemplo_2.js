/**
 * convertir un arreglo de nombres en un arreglo de saludos
 * 
 */

const nombres = ["Polar", "Nommie", "Grizz" , "PanPan"]

const saludacion = nombres.map(nombre => {
    return `¡Hola ${nombre}!`
});

console.log("Arreglo de nombres", nombres);
console.log("Arreglo de saludos", saludacion);

