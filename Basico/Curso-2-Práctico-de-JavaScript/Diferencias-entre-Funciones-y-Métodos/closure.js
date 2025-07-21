/*
 Closure: funcion que tiene acceso a variables de un ambito externo, 
 incluso despues de que esa funcion haya terminado de ejecutar. 

 Ambito lexico: cada vez que se declara una funcion,
 crea su propio ambito lexico, y pueda  acceder a las variables 
 dentro de ese ambito y a las variables en ambitos superiores 
*/

function outerFunction () {
    let outerVariable = "I am from outer function"

    function innterFuntion () {
        console.log(outerVariable)
    }

    return innterFuntion
}

const ClosureExample = outerFunction () 
ClosureExample()

//====================================

function createCounter () {
    let count = 0

    return function() {
        count++
        console.log(count)
    }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()

// =======================================

function outer () {
    let message = "Hola, "
    let saludo = " buenas tardes."

    function inner(name){
        console.log(message + name + saludo)
    }
    return inner
}

const ClosureA = outer()
const ClosureB = outer()

ClosureA("Jesus")
ClosureB("Alfredo")
