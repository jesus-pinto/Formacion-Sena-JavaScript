class animal {
    constructor(nombre, tipo){
        this.nombre = nombre
        this.tipo = tipo
    }
    emitirSonido () {
        console.log("El animal emite un sonido")
    }
}

class perro extends animal{
    constructor(nombre, tipo, raza) {
        super(nombre, tipo)
        this.raza = raza
    }
    emitirSonido() {
        console.log("El perro ladra")
    }
    correr() {
        console.log(`${this.nombre} corre alegremente`)
    }
}

const perro1 = new perro("Bobby", "perro", "pug")

console.log("#1 ",perro1)

perro1.correr()
perro1.emitirSonido()


perro.nuevoMetodo = function () {
    console.log("Este es un metodo")
}
perro.nuevoMetodo()


perro.prototype.segundoMetodo = function () {
    console.log("Es otro nuevo metodo")
}
perro.prototype.segundoMetodo()