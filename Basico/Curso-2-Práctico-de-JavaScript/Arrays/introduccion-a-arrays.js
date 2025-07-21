//  formas de crear un array

// 1. new Array() o Array()

const frutas = Array("manzana", "pera", "banana", "piña", "uva")
console.log(frutas)

const number = Array( 1, 2, 3, 4, 5)
console.log(number)

// 2. Array literal synta

const oneNumber = [4]
console.log(oneNumber)

const solo = []
console.log(solo)

const sports = ["futbol", "beisbol", "balonmano"]
console.log(sports)

const recipeIngredients = [
    "flour",
    true,
    2,
    {
        ingrediente: "milk", quantity: "1 cup"
    },
    false
]
console.log(recipeIngredients)


// Accessing array elements 

const firesFruit = frutas[0]
console.log(firesFruit)


// lenngth property

const numberOfFruits = frutas.length
console.log(numberOfFruits)

// mutability

frutas.push("melon")
console.log(frutas)


// inmutability 

const newFrutas = frutas.concat(["naranja", "fresa"])
console.log(frutas)
console.log(newFrutas)

// checking arrays with array.isArray()

const isArray = Array.isArray(frutas)
console.log(isArray)

// practicas exercies: es la suma de todos los arrays

const numbersArray = [1, 2, 3, 4, 5]
let sum = 0 

for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i]
}

console.log(sum)




