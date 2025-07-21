const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(numbers)
console.log(evenNumbers)

// reduce{} caso 1

const numbersReduce = [1,2,3,4,5]
const sum =  numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue)

console.log(numbersReduce)
console.log(sum)

// reduce{} caso 2

const words = ["manzana", "banana", "Hola", "adios", "banana","adios","adios"]

const wordsRepit = words.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]){
        accumulator[currentValue]++

    } else{
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})
console.log(wordsRepit)

