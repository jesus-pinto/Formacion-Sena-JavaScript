const inputPrice = document.querySelector("#price")
const inputDiscount = document.querySelector("#discount")
const btn = document.querySelector("#calcular")
const pRsultado = document.querySelector("#result")

btn.addEventListener("click", calcularPrecioConDescuento)

function calcularPrecioConDescuento(){
    
    const precio = Number(inputPrice.value)
    const descuento = Number(inputDiscount.value)

    if (!precio || !descuento){
        pRsultado.innerHTML = 'POR FAVOR!!! imbecil, llena el formulario 😒🤦‍♂️'
       return 
    }

    if (descuento > 100){
        pRsultado.innerHTML = 'Ajá, ya quisieras, no te vamos a dar plata, PAGA!'
        return
    }

    const nuevoPrecio = (precio * (100 - descuento)) / 100

    pRsultado.innerHTML = 'El nuevo precio con descuento es $' + nuevoPrecio
}