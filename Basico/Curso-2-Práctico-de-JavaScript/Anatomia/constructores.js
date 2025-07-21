function persona(nombre, apellido, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}

const persona1 = new persona("Jesus", "pinto", 21)

console.log(persona1)

const persona2 = new persona("Maria", "hernandez", 17)
persona2.nacionaliad = "Boliviana"

console.log(persona2)

persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} tengo ${this.edad} años`)
}

persona1.saludar()
persona2.saludar()