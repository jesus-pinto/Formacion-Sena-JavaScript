const saludo = function (name){
    return `Hola, ${name}`
}

// Arrow function - explicita return

const NewSaludo = (name) =>{
    return `Hola, ${name}`
}

// Arrow function - implicita 

const NewSaludoImplicit = name => `Hola, ${name}`
const NewSaludoImplicitApellido = (name, apellido) => `Hola, ${name} ${apellido}`
 
// Lexical Binding 

const functionalCharacter = {
    name: "El tio ben",
    mensajeTradicionalFuncion: function (message) {
        console.log(`${this.name} dice: ${message}`)
    },
    mensajeArrowFuncion: (message) => {
        console.log(`${this.name} dice: ${message}`)
    }
}

functionalCharacter.mensajeTradicionalFuncion(`Un gran poder conlleva una gran responsabilidad.`)
functionalCharacter.mensajeArrowFuncion(`Cuidado con el doctor octopus.`)