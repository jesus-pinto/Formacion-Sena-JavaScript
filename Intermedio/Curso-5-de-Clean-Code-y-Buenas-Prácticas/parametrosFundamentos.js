function getDouble(number){
    return number * 2
}
// Argumento es 10
getDouble(10) // 20

// ============================================

// Parametro defecto
function greet(person = 'Extraño') {
    console.log('Hola ' + person)
}

greet() // Hello Extraño
greet('Jesus ') // Hello jesus

// =============================================


// sin usar rest
function add(x, y) {
   console.log(x + y)
}

add(1, 2, 3, 4, 5) //3

// =============================================

// Uso de rest
function add(...numbers) {
    console.log( numbers.reduce((x, y) => x + y, 0))

}
add(1, 2, 3, 4, 5, 10) //25

// ============================================

const course = {
    title: 'JavaScript Definitivo',
    content: 'Todo lo que necesitas saber de javaScrip'
}

const courseCloned = Object.assign({}, course)
const spreadCourseCloned = {...course}

console.log('Original',course)
console.log('Clonado',spreadCourseCloned)

// ===========================================

const numbers = [1, 2, 3, 4, 5]

const clonedNumbers = numbers.slice()
const spreadClonedNumbers = [...numbers]
console.log('Original', numbers)
console.log('Clonado',spreadClonedNumbers)