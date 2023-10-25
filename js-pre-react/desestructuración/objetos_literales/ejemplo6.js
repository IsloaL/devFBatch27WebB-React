//desestructuración anidada

const persona = {
    nombre: undefined,
    edad: 19,
    ciudad: "La mejor ciudad",
    direccion: {
        calle: "123 calle principal",
        colonia: "colonia bonita"
    }
}

//desestructuración anidada

const {nombre = "Luna", direccion: { calle, colonia }} = persona

console.log(calle);

