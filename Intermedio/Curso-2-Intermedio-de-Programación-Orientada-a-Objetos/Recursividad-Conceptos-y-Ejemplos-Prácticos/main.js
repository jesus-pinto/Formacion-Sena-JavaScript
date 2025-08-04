// Ejemplo============================================
// function recursiva() {
//     if (/*Validacion*/ ) {
//         // llamados recursivos
//     } else {
//         // llamados normales, sin recursividad
//     }
// }
//=====================================================

const numeros = [0,1,2,3,4,5,6,7,8,946964654,65999,454,2,4,8]
// let numero = 0
// for (let i = 0; i < numeros.length; i++) {
//     numero = numeros[i]
//     console.log({i, numero})
// }

function recursiva(numbersArray) {
    if (numbersArray.length != 0) {
        const firstNum = numbersArray[0]
        console.log(firstNum)

        numbersArray.shift()
        recursiva(numbersArray)
    }
}