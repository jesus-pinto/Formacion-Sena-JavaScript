function calcularteDiscountedPrice (price, discountPorcentage) {
    const discount = (price * discountPorcentage) / 100
    const priceWinthDiscount = price - discount

    return priceWinthDiscount
}

const originalPrice = 100
const discountPorcentage = 20
const finalPrice = calcularteDiscountedPrice(originalPrice, discountPorcentage)

console.log(`Origanal price: $` + originalPrice)
console.log(`Discount:`  +  discountPorcentage + "%")
console.log(`Price with discount: $` + finalPrice)
