/**
 * DESESTRUCTURACIÓN DE OBJETOS COMO PARÁMETROS DE FUNCIONESalgo dijo de props
 * 
 */
function imprimirInformación({nombre, edad}) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
}

const persona = {
    nombre: "Grúffalo",
    edad: 33,
    ciudad: "Bichilandia"
}

imprimirInformación(persona);

/**
 * en esta caso estamos pasando un objeto como argumento a la función "imprimir información", y luegodesestructuramos el objeto directamente en los parámetros de la función para acceder a las propiedades dentro de la función
 */