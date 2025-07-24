function calcularMediana(lista) {
    const listaEsPar = espar(lista)

    if (listaEsPar) {
        const indexMitad1MedianaPar = (lista.length / 2) -1
        const indexMitad2MedianaPar =  (lista.length / 2)

        const listaMitades = []
        listaMitades.push(lista[indexMitad1MedianaPar])
        listaMitades.push(lista[indexMitad2MedianaPar])
        const medianaListapar = calcularPromedio(listaMitades)
        return medianaListapar        
    } else {
        const indexMitadMedianaImpar = Math.floor(lista.length / 2)
        const medianaListaImpar = (lista[indexMitadMedianaImpar])
        console.log(indexMitadMedianaImpar)
        console.log(medianaListaImpar)
        return medianaListaImpar
    }
}

function calcularPromedio(lista) {
    function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor
    }

    const sumaLista = lista.reduce(sumarTodosElementos)
    const promedio = sumaLista / lista.length
    console.log(promedio)
    return promedio
}


function calcularPromedio(lista) {

    // const sumarTodosElementos =(valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor
 

    const sumaLista = lista.reduce((a, b) => a + b)

    const promedio = sumaLista / lista.length
    console.log(promedio)
    return promedio
}