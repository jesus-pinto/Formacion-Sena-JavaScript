/**
 * Complejidad Temporal -> O( n )
 * Complejidad Espacial -> O(  )
 * Espacio Auxiliar -> O(  )
 */

function linearSearch(arreglo, clave) {
    for (let indice = 0; indice < arreglo.length; indice++) { // o(n)
        if (arreglo[indice] === clave) { // O(1)
            return indice;
        }
    }
    return -1; // O(1)
}