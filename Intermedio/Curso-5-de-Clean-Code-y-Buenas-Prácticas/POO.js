// Antes de ES6
function person(name) {
    this.name = name
}

person.prototype.greet = function() {
    return 'Hello I am ' + this.name
}

var person = new person('Jesus')
console.log(person.name)
console.log(person.greet())


// Con ES6
class Cat {
    constructor(cat) {
        this.name = cat
    }

    greet() {
        return 'Hello i am cat and my name is ' + this.name
    }
}

const cat = new Cat('malvado')
console.log(cat.name)
console.log(cat.greet())