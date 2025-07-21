// // Explicit type casting

// // Entero 
// const string = "42"
// const integer = parseInt(string)
// console.log(integer)
// console.log( typeof integer)

// // Decimal
// const stringDecimal = "3.14"
// const float = parseFloat(stringDecimal)
// console.log(float)
// console.log( typeof float)

// // Binario
// const binary = "1010"
// const decimal = parseInt(binary, 2)
// console.log(decimal)
// console.log( typeof decimal)


// // Implicit type casting

// const sum = "5" + 3
// console.log(sum)

// const sumWinthBoolean = "3" + true
// console.log(sumWinthBoolean)

// const sumWinthNumber = 2 + true
// console.log(sumWinthNumber)


const stringValue = "10"
const numberValue = 10
const booleanValue = true 

console.log("----------------------")
console.log(stringValue + stringValue) //Concatena
console.log(stringValue + numberValue) //Concatena
console.log(stringValue + booleanValue) //Concatena
console.log("----------------------")
console.log(numberValue + stringValue) //Concatena
console.log(numberValue + numberValue) //Suma
console.log(numberValue + booleanValue) //Suma
console.log("----------------------")
console.log(booleanValue + stringValue) //Concatena
console.log(booleanValue + numberValue) // Suma
console.log(booleanValue + booleanValue) //Suma
console.log("----------------------")