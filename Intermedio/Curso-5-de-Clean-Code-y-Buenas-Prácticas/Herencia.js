// Antes ES6
// Clase padre
function Person(name) {
    this.name = name
}

Person.prototype.greet = function() {
    console.log('Hello I am ' + this.name)
}


// clase hijo
function Developer(name) {
    this.name = name
}

Developer.prototype = Object.create(Person.prototype)

Developer.prototype.writeCode = function(coffee) {
    if (coffee) console.log('I am working in a new feature')
    else console.log('I need coffee, please!')
}

var dev = new Developer('jesus')
dev.greet() // Hello i an jesus
dev.writeCode() // i need coffee

// ==================================================

// Despues ES6
// clase padre
class Person {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(`Hello I am ${this.name}`)
    } 
}

// clase hijo
class Developer extends Person{
    constructor(name) {
        super(name)
    }

    writeCode(coffee) {
        coffee ? console.log(' I am developing a new feature') 
        : console.log('I need coffe, please!')
    }
}

const dev = new Developer('pastrana')
dev.greet() // hello i am pastrana
dev.writeCode() // I need coffe, please