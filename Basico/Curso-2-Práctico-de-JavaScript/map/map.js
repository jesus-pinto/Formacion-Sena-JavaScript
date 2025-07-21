const number = [1, 2, 3, 4, 5]
const squearedNumber = number.map(num => num * num)

console.log(number)
console.log(squearedNumber)

// forEach()

const colors = ["Red", "Pink", "Blue", "Yellow"]
const iteratedColor = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColor)

// Execise: fahrenheit to celsius conversi

const temperaturafahrenheit = [32 , 68, 104, 212]
const temperaturacelsius = temperaturafahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32)) 

console.log("Temperaturas en Fahrenheit: ", temperaturafahrenheit)
console.log("Temperaturas en celsius: ", temperaturacelsius)

// suma de elementos y arrays

const newNumbers = [1, 2, 3, 4, 5]

let sum = 0

newNumbers.forEach(number => {
    sum += number
})

console.log("arrays de numeros: ", newNumbers)
console.log("suma de numeros: ", sum)