//darle un alias/sobrenombre a las propiedades que se desestructuran

const persona = {
    nombre: "Cinthya",
    edad: 20,
    ciudad: "La mejor ciudad"
}

const nombre = "Laura"

//DESESTRUCTURANDO el nombre
let {nombre: nuevoNombre} = persona;



console.log(nuevoNombre);