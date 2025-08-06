function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}

let inicioTiempo = performance.now()
contar(5)
let finalTiempo = performance.now()
let duracion = finalTiempo - inicioTiempo

console.log(`El algoritmo contar ha durado: ${duracion}ms.`)