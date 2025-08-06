function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }
}

function repetir(arreglo) {
    let arregloRepetido = arreglo
    return arregloRepetido
}

function updateString(arreglo) {
    let resultado = arreglo.map(Element => Element.toString())
    return resultado
}
console.log(updateString([1, 2, 3]))



function dosDimensiones(valor) {
    let x = new Array(valor)
    for (let i = 0; i < valor; i++) {
        x[i] = new Array(valor).fill('Hola')
    }
    return x
}

console.log(dosDimensiones(5))

