function sum(num1, num2){
    return num1 + num2
}

function calc(num1, num2, sumNumbers) {
    return sumNumbers(num1, num2)
}

console.log(calc(5, 2, sum))

// =====================================
// tiempo de espera
setTimeout(function () {
    console.log('Hola JavaScript')
}, 2000)

// ========================
//saludo con tiempo de espera 
function saludo(name) {
    console.log(`Hola ${name}`)
}

setTimeout(saludo, 2000, 'Jesus')
