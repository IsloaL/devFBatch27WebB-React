/**
 * la desestructuración de objetos literales en JS, te permite extraer propiedades de un objeto y asigNARLAS A VARIABLES/CONSTANTES INDIDIVUALES DE MANERA MÁS CONVENIENTE
 * 
 */

const persona = {
    nombre: "Cinthya",
    edad: 20,
    ciudad: "La mejor ciudad"
}

//DESESTRUCTURANDO ANDO...

/* The code is using object destructuring in JavaScript to extract the properties `nombre`, `edad`, and
`ciudad` from the `persona` object. It then assigns the values of these properties to the variables
`nombre`, `edad`, and `ciudad` respectively. Finally, it logs the value of the `nombre` variable to
the console. */
let {nombre, edad, ciudad} = persona

console.log(ciudad);