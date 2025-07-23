const inputPrice = document.querySelector("#price")
const inputCupon = document.querySelector("#cupon")
const btn = document.querySelector("#calcular")
const pRsultado = document.querySelector("#result")

btn.addEventListener("click", calcularPrecioConDescuento)

const cuponLista = []
cuponLista.push({
    name: "jesus",
    descuento: 30,
})
cuponLista.push({
    name: "alfredo",
    descuento: 15,
})
cuponLista.push({
    name: "pinto",
    descuento: 30,
})
cuponLista.push({
    name: "garcia",
    descuento: 30,
})

function calcularPrecioConDescuento(){
    const precio = Number(inputPrice.value)
    const cupon = inputCupon.value
    
    if (!precio || !cupon){
        pRsultado.innerHTML = 'POR FAVOR!!! imbecil, llena el formulario 😒🤦‍♂️'
       return 
    }
  

    let descuento

    function cuponArrays(cuponElemento) {
        return cuponElemento.name == cupon
    }

    const cuponEnArrays = cuponLista.find(cuponArrays)

    if (cuponEnArrays) {
        descuento = cuponEnArrays.descuento
    } else {
        pRsultado.innerHTML = 'El cupon no es valido'
        return
    }

    const nuevoPrecio = (precio * (100 - descuento)) / 100

    pRsultado.innerHTML = 'El nuevo precio con descuento es $' + nuevoPrecio
}


