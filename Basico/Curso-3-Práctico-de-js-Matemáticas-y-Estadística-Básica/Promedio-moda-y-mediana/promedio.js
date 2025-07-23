function calcularPromedio(lista) {

    // const sumarTodosElementos =(valorAcumulado, nuevoValor) => valorAcumulado + nuevoValor
 

    const sumaLista = lista.reduce((a, b) => a + b)

    const promedio = sumaLista / lista.length
    console.log(promedio)
    return promedio
}