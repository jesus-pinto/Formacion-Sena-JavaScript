// Anterior a ES6
var name = 'Maria'

// Js Moderno
let name = 'Jesus'
const PI = 3.14159



// Uso var 
var age = 21

{
    console.log('Valor dentro del bloque', age) //> 21
    var age = 25
}

console.log('Valor fuera del bloque', age) //> 25
age = age * 2
console.log('Valor cambiado', age) //> 50


// Uso de let 
let age = 20

{
    let age = 30
    console.log('Valor dentro del bloque', age) //> 21
}

console.log('Valor fuera del bloque', age) //> 25
age = age * 2
console.log('Valor cambiado', age) //> 50


// Uso de const
const pi = 3.1416
pi = 3.1416
console.log(pi)