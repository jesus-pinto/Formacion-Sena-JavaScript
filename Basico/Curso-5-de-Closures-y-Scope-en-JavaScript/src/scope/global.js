// variables

var a // declarar
var b = 'b' // declarar / asignamos
b = 'bb' // reasignacion
var a = 'aa' // redeclaracion


// Global Scope
var fruit = 'Apple' //global
console.log(fruit)


function bestFruit() {
    console.log(fruit)
}

bestFruit()


function countries() {
    country = 'Colombia' //Global
    console.log(country)
}

countries()
console.log(country)