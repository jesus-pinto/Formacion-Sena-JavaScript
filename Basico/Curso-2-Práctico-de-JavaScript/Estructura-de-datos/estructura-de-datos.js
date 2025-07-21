/*

Estructura de datos

key / value 

objeto{
    propiedad: valor,
    propiedad: valor,
    propiedad: valor 
}

*/ 

const persona = {
    nombre: "John",
    edad: 30,
    dereccion: {
        calle: "Av urdaneta 15",
        ciudad: "Montalban"
    },
    saludar () {
        console.log(`Hola, mi nombre es ${persona.nombre}`)
    }
}

persona.saludar();