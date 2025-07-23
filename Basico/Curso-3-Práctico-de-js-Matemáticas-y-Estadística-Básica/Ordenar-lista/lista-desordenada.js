function ordenarLista(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        if (valorAcumulado > nuevoValor) {
            return 1
        
        } else if (valorAcumulado ==  nuevoValor) {
            return 0
        
        } else if (valorAcumulado < nuevoValor){
            return -1
        }
           
    } 
    

   const lista = listaDesordenada.sort(ordenarListaSort)
   
    return lista
}