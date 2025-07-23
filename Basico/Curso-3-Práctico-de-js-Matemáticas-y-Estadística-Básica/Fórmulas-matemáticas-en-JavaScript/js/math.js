console.group("cuadrado----------------------------/")

const ladoCuadrado = 5
const perimetroCuadrado = ladoCuadrado * 4

const areaCuadrado = ladoCuadrado * ladoCuadrado

function calcularcuadrado (lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado
    }
}

console.log("Cuadrado:",{
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
})

console.groupEnd("cuadrado")
//====================================================

console.group("Triangulo---------------------------/")

const ladoTriangulo1 = 6 
const ladoTriangulo2= 6 
const ladoTrianguloBase = 4
const alturaTriangulo = 5.5

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase
const areaTriangulo =  (ladoTrianguloBase * alturaTriangulo) / 2

function calcularPerimetroTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 +lado2,
        area: (base * altura) / 2
    }
}

function calcularAlturaTriangulo(lado1, base) {
    if ( lado1 == base) {
        console.warn(`Este no es un triangulo isoceles`)
    } else {
        // h = raizcuadrada(lado1**2 - (b**2)/4)
        return Math.sqrt((lado1 ** 2) - ((base ** 2)) / 4)
    }
}

console.log("Triangulo:",{
    ladoTriangulo1, 
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
})


console.groupEnd("Triangulo")

//===============================================

console.group("Circulo----------------------------/")

const radioCirculo = 3
const diametroCirculo = radioCirculo * 2
const pi = 3.1415

const circunferencia = diametroCirculo * pi
const areaCirculo = (radioCirculo ** 2) * pi


function calcularCirculo (radio){
    const diametro = radio * 2
    const radioAlCuadrado = Math.pow(radio, 2)

    return {
        circunferencia: diametro * pi,
        area: radioCirculo * pi
    }
}

console.log({
    radioCirculo,
    diametroCirculo,
    pi,
    circunferencia,
    areaCirculo,
})
console.groupEnd("Circulo")

