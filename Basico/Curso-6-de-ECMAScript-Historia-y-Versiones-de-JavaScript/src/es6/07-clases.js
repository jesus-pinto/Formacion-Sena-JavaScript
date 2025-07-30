/*

// declarando
class User {}

// instancia de una clase
const newUser = new User()
*/


class user {
    // metodos
    greeting() {
        return 'Hello'
    }
}

const gndx = new user ()
console.log(gndx.greeting())
const bebelope = new user()
console.log(bebelope.greeting())

// Constructor 

class user {
    // constructor
    constructor(){
        consolelog('nuevo usuario')
    }
    greeting() {
        return 'Hello'
    }
}

const david = new user()


// this

class user {
    constructor(name) {
        this.name = name
    }
    // metodos
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
}

const ana = new user ('Ana')
console.log(ana.greeting())


// setters getters

class user {
    // constructor
    constructor(name, age) {
        this.name = name 
        this.age = age
    }
    // metodos
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
    get uAge() {
        return this.age
    }
    set uAge(n) {
        this.age = n
    }
}

const bebeloper = new user('David', 15)
console.log(bebeloper.greeting(), bebeloper.uAge)
console.log(bebeloper.uAge = 20)








