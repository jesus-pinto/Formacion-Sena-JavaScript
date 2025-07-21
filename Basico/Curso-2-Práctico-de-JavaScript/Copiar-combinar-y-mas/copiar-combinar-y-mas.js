// Arrays copiado

const originalArray = [1, 2, 3, 4, 5]
const copyArray = [ ...originalArray]

console.log("Original:",originalArray)
console.log("Copia:",copyArray)

// Combinar Arreys

const array1 = [1, 2, 3, ]
const array2 = [4, 5, 6]
const combinarArrays = [...array1, ...array2]

console.log("Array 1:", array1)
console.log("Array 2:", array2)
console.log("Array combinao:", combinarArrays)

// Crear un arrays y adicionar un elemento

const baseArray = [1, 2, 3]
const adicionArray = [...baseArray, 4, 5, 6]

console.log("Arrays base:",baseArray)
console.log("Arrays con adicion:",adicionArray)

// pasar elementos a funciones

function sum (a, b, c){
    return a + b + c
}

const numbers = [1, 2, 3]
const resultado = sum(...numbers)
console.log("Resultado: ",resultado)