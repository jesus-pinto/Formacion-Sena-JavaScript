/*
Estructura de dato

key / value

objeto {
    propiedad: valor,
    propiedad: valor,
    propiedad: valor

    metodo()
}

*/ 

const persona = {
    nombre: "john",
    edad: 30,
    direccion: {
        calle: "Urdaneta",
        ciudad: "Montalban"
    },
    saludar() {
        console.log(`Hola mi nombre es ${this.nombre}`)
    }
}

persona.saludar()

persona.telefono = "3108459076"

console.log(persona.telefono)

persona.despedir = () => {
    console.log("adios")
}

persona.despedir()

// borrar porpiedades y objetos

delete persona.telefono

delete persona.despedir