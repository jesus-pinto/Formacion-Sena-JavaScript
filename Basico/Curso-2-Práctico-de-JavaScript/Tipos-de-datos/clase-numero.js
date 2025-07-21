// 1. Tipo entero y decimal 
const entero = 42
const decimal = 3.14

console.log(typeof entero, typeof decimal)

// 2. Notacion cienifica 
const cientifico = 5e3

// 3. infinito y NaN
const infinito = Infinity
const noEsNumero = NaN

// operaciones aritmeticas

// 1. suma, resta, multiplicacion y division
const suma = 3 + 4
const resta = 4 - 4
const multiplicacion = 2 * 3 
const divicion = 4 / 2

//  modulo y exponenciacion
const modulo = 15 % 8
const exponenciacion = 2 ** 3

// Precicion 
const resultado = 0.1 + 0.2 
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado === 0.3)

//  operaciones avanzada
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)