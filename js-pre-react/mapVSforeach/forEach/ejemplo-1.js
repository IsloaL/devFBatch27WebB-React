/**
 * SE UTILIZA PARA ITERAR SOBRE LOS ELEMENTOS DE UN ARREGLO Y EJECUTAR UNA FUNCIÓN PARA CADA ELEMENTO
 * NO DEVULEVE UN NUEVO ARREGLO, TRABAJA SOBRE EL ORIGINAL
 */

const frutas = ["manzana", "pera", "plátano"]

//con función de flecha
frutas.forEach(fruta => {
    console.log(fruta);
})


//ejemplo con función clásica

frutas.forEach(function (fruta){
    console.log(fruta);
})

